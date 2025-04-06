// script.js
const sidebarItems = document.querySelectorAll('.sidebar ul li');

sidebarItems.forEach(item => {
    item.addEventListener('click', function(event) {
        // Prevent dropdown from closing if you click on a dropdown item
        if (event.target.tagName === 'A') {
            window.location.href = event.target.href; // Navigate to the new HTML page
        }

        const dropdown = item.querySelector('ul');
        
        if (dropdown) {
            // Toggle class to show or hide dropdown
            dropdown.classList.toggle('active');
            item.classList.toggle('active'); // Toggle arrow rotation
        }
    });
});
