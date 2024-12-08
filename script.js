function link(element) {
    const targetId = element.getAttribute('data-target');  
    location.href = targetId;  
}

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach((card) => {
        card.addEventListener('mouseenter', function () {
            card.style.transition = '0.5s';
            card.style.width = '1100px';

            const text = card.querySelector('.card-text');
            const minus = card.querySelector('.minus');

            if (text) text.style.display = 'block'; 
            if (minus) minus.style.display = 'block'; 
        });

        card.addEventListener('mouseleave', function () {
            card.style.transition = '0.5s';
            card.style.width = 'auto';

            const text = card.querySelector('.card-text');
            const minus = card.querySelector('.minus');

            if (text) text.style.display = 'none'; 
            if (minus) minus.style.display = 'none'; 
        });
    });
});