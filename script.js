console.log("Welcome to my website!");

const links = document.querySelectorAll('.sidebar a');
const contentArea = document.querySelector('.content');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const course = link.textContent;
        contentArea.innerHTML = `<h2>${course}</h2><p>This is the content for the course ${course}.</p>`;
    });
});
