// Backend Version - Connected to Node.js Server
const API_BASE = ""; // Base URL for API calls
let is_open = true; // Status can be managed via backend too, but for now kept simple
let pendingBooking = null;
let overlayState = null;
let slotsRequestId = 0;

function checkStatus() {
    const banner = document.getElementById('status-banner');
    const bookBtn = document.getElementById('book-btn');
    if (!banner || !bookBtn) return;
    
    if (!is_open) {
        banner.style.display = 'block';
        banner.className = 'status-closed';
        banner.innerText = t('shop.closedBanner');
        bookBtn.disabled = true;
        bookBtn.innerText = t('shop.closedButton');
    } else {
        banner.style.display = 'none';
        bookBtn.disabled = false;
        bookBtn.innerText = t('form.submit');
    }
}

function toggleShopStatus() {
    is_open = !is_open;
    checkStatus();
    alert(t(is_open ? 'shop.statusOpen' : 'shop.statusClosed'));
}

// Dynamic Slot Generation Logic
function getSlotsForService(service) {
    if (service === 'haircut') {
        return ["10:00", "11:30", "14:00", "15:30"];
    } else {
        const slots = [];
        for (let h = 10; h < 17; h++) {
            if (h === 13) continue; // Lunch
            slots.push(`${h}:00`, `${h}:30`);
        }
        return slots;
    }
}

function renderTimeSlots() {
    const serviceEl = document.getElementById('service');
    const dateEl = document.getElementById('date');
    const grid = document.getElementById('time-grid');
    const selectedInput = document.getElementById('selected-time');
    if (!serviceEl || !dateEl || !grid || !selectedInput) return;

    const service = serviceEl.value;
    const dateStr = dateEl.value;
    const previouslySelected = selectedInput.value;
    selectedInput.value = '';
    grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #888;">' + t('slots.loading') + '</p>';
    
    if (!dateStr) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #888;">' + t('slots.pickDate') + '</p>';
        return;
    }

    const selectedDate = new Date(`${dateStr}T00:00:00`);
    const dayOfWeek = selectedDate.getDay();

    if (dayOfWeek === 0) {
        selectedInput.value = '';
        grid.innerHTML = '<p style="color: #ff4d4d; grid-column: 1/-1; text-align: center; background: rgba(255,0,0,0.1); padding: 15px; border-radius: 10px; border: 1px solid rgba(255,0,0,0.2);"><strong>' + t('slots.sundayClosed') + '</strong><br>' + t('slots.sundayHint') + '</p>';
        return;
    }

    // Fetch taken slots from server
    const requestId = ++slotsRequestId;
    fetch(`${API_BASE}/api/bookings?date=${dateStr}`)
        .then(res => res.json())
        .then(takenSlots => {
            if (requestId !== slotsRequestId) return;
            const slots = getSlotsForService(service);
            const now = new Date();
            const isToday = selectedDate.toDateString() === now.toDateString();

            grid.innerHTML = '';
            let availableCount = 0;

            slots.forEach(time => {
                const [hour, minute] = time.split(':').map(Number);
                const slotDate = new Date(selectedDate);
                slotDate.setHours(hour, minute, 0, 0);

                const slot = document.createElement('div');
                slot.className = 'time-slot';
                slot.innerText = time;
                
                const isPast = isToday && slotDate < now;
                const isTaken = takenSlots.includes(time);

                if (isTaken || isPast) {
                    slot.classList.add('taken');
                    slot.title = isTaken ? t('slots.booked') : t('slots.passed');
                } else {
                    slot.onclick = () => selectTime(slot, time);
                    if (previouslySelected === time) {
                        slot.classList.add('selected');
                        selectedInput.value = time;
                    }
                    availableCount++;
                }
                grid.appendChild(slot);
            });

            if (availableCount === 0) {
                grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #ffbc00; background: rgba(255,188,0,0.1); padding: 10px; border-radius: 10px;">' + t('slots.full') + '</p>';
            }
        })
        .catch(err => {
            console.error("Error fetching slots:", err);
            grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #ff4d4d;">' + t('slots.serverError') + '</p>';
        });
}

function selectTime(element, time) {
    document.querySelectorAll('.time-slot').forEach(s => s.classList.remove('selected'));
    element.classList.add('selected');
    document.getElementById('selected-time').value = time;
}

// Global modal controls
window.closePaymentModal = function() {
    document.getElementById('payment-modal').style.display = 'none';
    pendingBooking = null;
};

window.submitBookingRequest = function() {
    if (!pendingBooking) return;
    
    const confirmBtn = document.querySelector('#payment-modal .btn-primary');
    const originalText = confirmBtn.innerText;
    confirmBtn.innerText = t('status.processing');
    confirmBtn.disabled = true;

    fetch(`${API_BASE}/api/book`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(pendingBooking)
    })
    .then(res => res.json())
    .then(data => {
        if (data.error) {
            alert(localizeError(data.error));
            confirmBtn.innerText = originalText;
            confirmBtn.disabled = false;
        } else {
            // Hide payment modal, show status overlay
            document.getElementById('payment-modal').style.display = 'none';
            showStatusOverlay(data.id);
        }
    })
    .catch(err => {
        alert(t('errors.connection'));
        confirmBtn.innerText = originalText;
        confirmBtn.disabled = false;
    });
};

function applyOverlayCopy() {
    if (!overlayState) return;
    const title = document.getElementById('status-title');
    const desc = document.getElementById('status-desc');
    if (!title || !desc) return;

    if (overlayState === 'confirmed') {
        title.innerText = t('status.paymentReceived');
        title.style.color = 'var(--primary-color)';
        desc.innerText = t('status.confirmedRedirect');
    } else if (overlayState === 'rejected') {
        title.innerText = t('status.paymentMissing');
        title.style.color = '#e74c3c';
        desc.innerText = t('status.paymentMissingDesc');
    } else {
        title.innerText = t('status.submittedTitle');
        title.style.color = 'var(--primary-color)';
        desc.innerText = t('status.submittedDesc');
    }

    const closeBtn = document.getElementById('status-close');
    if (closeBtn) closeBtn.innerText = t('status.close');
}

function fillPaymentSummary() {
    const summary = document.getElementById('payment-summary');
    if (!summary) return;
    const service = (pendingBooking && pendingBooking.service) || (document.getElementById('service') && document.getElementById('service').value) || 'haircut';
    const price = service === 'haircut' ? 80 : 20;
    summary.textContent = t('modal.summary', { service: serviceLabel(service), amount: price });
}

function showStatusOverlay(bookingId) {
    const overlay = document.getElementById('status-overlay');
    overlay.style.display = 'flex';
    overlayState = 'pending';
    applyOverlayCopy();
    
    // Poll for status
    const pollInterval = setInterval(() => {
        fetch(`${API_BASE}/api/booking-status/${bookingId}`)
            .then(res => res.json())
            .then(data => {
                if (data.status === 'confirmed') {
                    clearInterval(pollInterval);
                    overlayState = 'confirmed';
                    applyOverlayCopy();
                    document.getElementById('status-spinner').style.display = 'none';
                    setTimeout(() => {
                        alert(t('status.confirmedAlert'));
                        location.reload();
                    }, 2000);
                } else if (data.status === 'rejected') {
                    clearInterval(pollInterval);
                    overlayState = 'rejected';
                    applyOverlayCopy();
                    document.getElementById('status-spinner').style.display = 'none';

                    if (!document.getElementById('status-close')) {
                        const closeBtn = document.createElement('button');
                        closeBtn.id = 'status-close';
                        closeBtn.innerText = t('status.close');
                        closeBtn.className = "btn-secondary";
                        closeBtn.style.marginTop = "20px";
                        closeBtn.onclick = () => location.reload();
                        document.querySelector('#status-overlay .modal-content').appendChild(closeBtn);
                    }
                }
            })
            .catch(err => console.error("Polling error:", err));
    }, 3000); // Check every 3s
}

// Initial Setup
const dateInput = document.getElementById('date');
const serviceInput = document.getElementById('service');

if (dateInput) {
    const today = new Date();
    const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
    dateInput.setAttribute('min', todayStr);
    dateInput.value = todayStr;
    dateInput.addEventListener('change', renderTimeSlots);
}

if (serviceInput) {
    serviceInput.addEventListener('change', renderTimeSlots);
}

const form = document.getElementById('book-form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const time = document.getElementById('selected-time').value;
        if (!time) {
            alert(t('slots.pickTime'));
            return;
        }

        const service = document.getElementById('service').value;

        pendingBooking = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            service: service,
            date: document.getElementById('date').value,
            time: time,
            bank: document.getElementById('bank').value
        };

        fillPaymentSummary();
        document.getElementById('payment-modal').style.display = 'flex';
    });
}

document.addEventListener('languagechange', () => {
    checkStatus();
    renderTimeSlots();
    fillPaymentSummary();
    applyOverlayCopy();
});

// Start up
renderTimeSlots();
checkStatus();
