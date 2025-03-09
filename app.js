const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

    function toggleDetails(projectId) {
        const detailsSection = document.getElementById(`details-${projectId}`);        
        // Toggle visibility of the details section
        detailsSection.classList.toggle('show');
    }

