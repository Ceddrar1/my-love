// ВСТАВЬ ВАШУ ДАТУ ЗДЕСЬ (Год, Месяц - 1, День)
// Внимание: месяцы в JS начинаются с 0 (январь = 0, сентябрь = 8)
const startDate = new Date(2025, 6, 29); 

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / 1000 / 60) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    document.getElementById('timer').innerText = 
        ${days}д ${hours}ч ${mins}м ${secs}с;
}

setInterval(updateTimer, 1000);
updateTimer();

// Эффект сердечек
const btn = document.getElementById('heartButton');
btn.addEventListener('click', () => {
    for (let i = 0; i < 40; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 2 + 2) + 's';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 4000);
    }
});