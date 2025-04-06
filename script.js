// script.js
const sidebarItems = document.querySelectorAll('.sidebar ul li');

sidebarItems.forEach(item => {
    item.addEventListener('click', function() {
        const dropdown = item.querySelector('ul');
        
        if (dropdown) {
            // Toggle display of dropdown
            if (dropdown.style.display === 'block') {
                dropdown.style.display = 'none'; // Hide if already visible
            } else {
                dropdown.style.display = 'block'; // Show if hidden
            }
        }
    });
});
