// Passwort-Nachrichten-Kombinationen
const secrets = {
    "password123": "Das ist deine geheime Nachricht für Passwort123!",
    "helloWorld": "Hier ist eine andere geheime Nachricht!",
    "openSesame": "Das Passwort öffnet das Geheimnis!",
};

function checkPassword() {
    const passwordInput = document.getElementById('password').value.trim();
    const messageDiv = document.getElementById('message');

    if (secrets[passwordInput]) {
        messageDiv.textContent = secrets[passwordInput];
        messageDiv.style.color = '#00ffcc';
    } else {
        messageDiv.textContent = "Falsches Passwort! Versuche es erneut.";
        messageDiv.style.color = 'red';
    }
}
