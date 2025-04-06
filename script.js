// script.js
const sidebarItems = document.querySelectorAll('.sidebar ul li');

sidebarItems.forEach(item => {
    item.addEventListener('click', function() {
        const dropdown = item.querySelector('ul');
        
        if (dropdown) {
            // Toggle class to show or hide dropdown
            dropdown.classList.toggle('active');
        }
    });
});
