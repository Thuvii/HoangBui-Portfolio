// Navigation script remains the same
const links = document.querySelectorAll('nav a');
const pages = document.querySelectorAll('.page');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const pageId = this.dataset.page;

        // Hide all pages
        pages.forEach(page => page.classList.remove('active'));

        // Show the selected page
        document.getElementById(pageId).classList.add('active');
    });
});
