document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner l'élément à animer
    const element = document.querySelector('.animate-me');

    // Ajouter une classe pour déclencher l'animation
    element.classList.add('start-animation');

    // Exemple d'animation avec JavaScript
    element.style.transition = 'transform 2s';
    element.style.transform = 'translateX(100px)';
});
