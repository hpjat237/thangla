// script.js
const sidebarItems = document.querySelectorAll('.sidebar ul li');

sidebarItems.forEach(item => {
    item.addEventListener('click', function(event) {
        // Prevent dropdown from closing if you click on a dropdown item
        const dropdown = item.querySelector('ul');
        
        // If the clicked target is an anchor tag (li > a), navigate to the corresponding page
        if (event.target.tagName === 'A') {
            event.stopPropagation(); // Prevent closing the dropdown
            window.location.href = event.target.href; // Navigate to the new HTML page
        }

        if (dropdown) {
            // Toggle class to show or hide dropdown
            dropdown.classList.toggle('active');
            item.classList.toggle('active'); // Toggle arrow rotation
        }
    });
});
