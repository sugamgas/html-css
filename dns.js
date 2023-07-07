// Add click event to navigation links
var navLinks = document.querySelectorAll('nav a');
navLinks.forEach(function(link) {
	link.addEventListener('click', function(event) {
		event.preventDefault();
		alert('You clicked ' + link.textContent);
	});
});
