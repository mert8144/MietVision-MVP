let properties = JSON.parse(localStorage.getItem('properties')) || [];
let documents = JSON.parse(localStorage.getItem('documents')) || [];
let messages = JSON.parse(localStorage.getItem('messages')) || [];
let roles = JSON.parse(localStorage.getItem('roles')) || ['Admin', 'Mitarbeiter'];

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));
        document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
        document.querySelector(this.getAttribute('href')).classList.add('active');
        this.classList.add('active');
    });
});

function updateDashboard() {
    const paymentsReceived = properties.reduce((sum, p) => sum + (p.paymentsReceived || 0), 0);
    const paymentsPending = properties.reduce((sum, p) => sum + (p.paymentsPending || 0), 0);
    const cashflow = paymentsReceived - paymentsPending;
    const rentalYield = properties.length ? (paymentsReceived / properties.length / 12 * 100).toFixed(1) : 0;
    const vacancyRate = properties.length ? ((properties.filter(p => !p.occupied).length / properties.length) * 100).toFixed(1) : 0;

    document.getElementById('property-count').textContent = properties.length;
    document.getElementById('payments-received').textContent = `${paymentsReceived} €`;
    document.getElementById('payments-pending').textContent = `${paymentsPending} €`;
    document.getElementById('cashflow').textContent = `${cashflow} €`;
    document.getElementById('rental-yield').textContent = `${rentalYield}%`;
    document.getElementById('vacancy-rate').textContent = `${vacancyRate}%`;
}

function uploadDocuments() {
    const files = document.getElementById('upload-doc').files;
    for (let file of files) {
        documents.push({ name: file.name, date: new Date().toLocaleDateString() });
    }
    localStorage.setItem('documents', JSON.stringify(documents));
    renderDocuments();
}

function signDocument() {
    alert('Digitale Unterschrift wird simuliert.');
}

function renderDocuments() {
    const docList = document.getElementById('doc-list');
    docList.innerHTML = documents.map(doc => `<li>${doc.name} - ${doc.date}</li>`).join('');
}

function sendMessage() {
    const message = document.getElementById('message').value;
    if (message) {
        messages.push({ text: message, date: new Date().toLocaleDateString() });
        localStorage.setItem('messages', JSON.stringify(messages));
        document.getElementById('message').value = '';
        renderMessages();
    }
}

function renderMessages() {
    const messageList = document.getElementById('message-list');
    messageList.innerHTML = messages.map(msg => `<li>${msg.text} - ${msg.date}</li>`).join('');
}

function calculateRent() {
    const suggestion = (Math.random() * 1000 + 500).toFixed(2);
    document.getElementById('rent-suggestion').textContent = `${suggestion} €/Monat`;
}

function predictMaintenance() {
    const prediction = Math.random() > 0.5 ? 'Wartung in 3 Monaten erforderlich' : 'Kein Wartungsbedarf';
    document.getElementById('maintenance-prediction').textContent = prediction;
}

function generateReport() {
    alert('Bericht wird generiert: Cashflow, Mietrendite, etc.');
}

function addProperty() {
    const name = document.getElementById('property-name').value;
    if (name) {
        properties.push({ name, paymentsReceived: 0, paymentsPending: 0, occupied: true });
        localStorage.setItem('properties', JSON.stringify(properties));
        document.getElementById('property-name').value = '';
        updateDashboard();
    }
}

function addRole() {
    const role = document.getElementById('user-role').value;
    if (role) {
        roles.push(role);
        localStorage.setItem('roles', JSON.stringify(roles));
        document.getElementById('user-role').value = '';
        renderRoles();
    }
}

function renderRoles() {
    const roleList = document.getElementById('role-list');
    roleList.innerHTML = roles.map(role => `<li>${role}</li>`).join('');
}

updateDashboard();
renderDocuments();
renderMessages();
renderRoles();
