// Simulierte Daten und Interaktionen (optional, da das Design statisch ist)
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));
        document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
        document.querySelector(this.getAttribute('href')).classList.add('active');
        this.classList.add('active');
    });
});

// Simulierte Interaktionen für Karten
document.querySelectorAll('.card .arrow').forEach(arrow => {
    arrow.addEventListener('click', function() {
        alert('Detailansicht geöffnet!');
    });
});

document.querySelector('.notifications p').addEventListener('click', function() {
    const list = document.querySelector('.notification-list');
    list.style.display = list.style.display === 'none' ? 'block' : 'none';
});

document.querySelector('.chart-toggle').addEventListener('click', function() {
    this.textContent = this.textContent === 'Monatlich' ? 'Jährlich' : 'Monatlich';
    alert('Diagrammansicht gewechselt!');
});
