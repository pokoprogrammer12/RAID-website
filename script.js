function link(element) {
    const targetId = element.getAttribute('data-target');  
    location.href = targetId;  
}

document.addEventListener("DOMContentLoaded", () => {
    // Select all elements with the 'card' class
    const elements = document.querySelectorAll('.card'); // Returns a NodeList

    // Iterate over each card element
    elements.forEach((element) => {
        element.addEventListener('mouseenter', function () {
            element.style.height = 'auto';  // Expand on hover
            element.style.transition = '0.5s'; // Smooth transition
        });

        element.addEventListener('mouseleave', function () {
            element.style.height = '270px';  // Collapse on mouse leave
            element.style.transition = '0.5s'; // Smooth transition
        });
    });
});