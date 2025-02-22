* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

body {
    background-color: #f5f7fa;
    color: #333;
    line-height: 1.6;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #007bff;
    padding: 10px 20px;
    color: white;
    border-radius: 8px 8px 0 0;
    margin-bottom: 20px;
}

header h1 {
    font-size: 24px;
}

.header-right {
    display: flex;
    align-items: center;
    gap: 15px;
}

.user {
    display: flex;
    align-items: center;
    gap: 5px;
}

.user-icon {
    width: 30px;
    height: 30px;
    border-radius: 50%;
}

.edit-btn {
    background-color: #0056b3;
    color: white;
    border: none;
    padding: 8px 15px;
    border-radius: 5px;
    cursor: pointer;
}

.edit-btn:hover {
    background-color: #003d7a;
}

nav {
    background-color: #e9ecef;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 20px;
}

nav ul {
    list-style: none;
    display: flex;
    gap: 10px;
}

nav ul li a {
    display: flex;
    align-items: center;
    gap: 5px;
    color: #007bff;
    text-decoration: none;
    padding: 8px 15px;
    border-radius: 5px;
    background-color: white;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

nav ul li a.active {
    background-color: #007bff;
    color: white;
}

nav ul li a img {
    width: 16px;
    height: 16px;
}

.section {
    display: none;
}

.section.active {
    display: block;
}

.dashboard-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

.card {
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    position: relative;
    overflow: hidden;
}

.card h3 {
    color: #007bff;
    font-size: 16px;
    margin-bottom: 10px;
}

.card p {
    font-size: 14px;
    color: #666;
    line-height: 1.4;
}

.arrow {
    position: absolute;
    top: 10px;
    right: 10px;
    color: #007bff;
    font-size: 20px;
    cursor: pointer;
}

.warning {
    background-color: #fff3cd;
    border-left: 4px solid #ffc107;
}

.warning .check {
    color: #28a745;
    font-size: 20px;
}

.chart-placeholder {
    height: 50px;
    background: #e9ecef;
    margin: 10px 0;
}

.chart-toggle {
    background-color: #e9ecef;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
}

.notifications p {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}

.notification-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.notification-list li {
    padding: 5px 0;
    font-size: 12px;
    color: #666;
}

.red-dot, .green-dot {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-right: 5px;
}

.red-dot { background-color: #dc3545; }
.green-dot { background-color: #28a745; }

.arrow-down {
    font-size: 12px;
    color: #666;
}

.ki-features button {
    display: block;
    background-color: #e9ecef;
    border: none;
    padding: 8px 15px;
    margin: 5px 0;
    border-radius: 5px;
    cursor: pointer;
    color: #007bff;
    text-align: left;
}

.ki-features button:hover {
    background-color: #dee2e6;
}

.observation-list {
    background: linear-gradient(to bottom, #007bff, #0056b3);
    color: white;
    padding: 20px;
}

.observation-list h3 {
    color: white;
    margin-bottom: 10px;
}

.observation-list p {
    color: white;
    font-size: 14px;
    margin-bottom: 10px;
}

.rating {
    color: #ffd700;
    font-size: 14px;
    margin-bottom: 10px;
}

.observation-list button {
    background-color: #e9ecef;
    color: #007bff;
    border: none;
    padding: 8px 15px;
    margin: 5px 0;
    border-radius: 5px;
    cursor: pointer;
}

.observation-list button:hover {
    background-color: #dee2e6;
}

/* Responsive Design */
@media (max-width: 768px) {
    header { flex-direction: column; text-align: center; }
    header .header-right { flex-direction: column; gap: 10px; }
    nav ul { flex-direction: column; }
    nav ul li { margin: 5px 0; }
    .dashboard-grid { grid-template-columns: 1fr; }
}
