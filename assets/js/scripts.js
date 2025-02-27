

// document.querySelectorAll('.website-link').forEach(link => {
// 	link.addEventListener('click', function(event) {
// 		if (!confirm('This site may take 20-30 seconds to load \n Thank you for your patience!')) {
// 			event.preventDefault();  // Prevent navigation if the user cancels
// 		}
// 	});
// });

document.querySelectorAll('.website-link').forEach(link => {
	link.addEventListener('click', function(event) {
		event.preventDefault(); // Prevent immediate navigation

		// Show the modal
		const modal = document.getElementById('loadingModal');
		const proceedButton = document.getElementById('proceedButton');
		const cancelButton = document.getElementById('cancelButton');

		modal.style.display = 'flex'; // Show modal

		// Handle the Proceed button click
		proceedButton.onclick = function() {
			window.location.href = link.href; // Proceed to the link
		};

		// Handle the Cancel button click
		cancelButton.onclick = function() {
			modal.style.display = 'none'; // Close the modal without navigating
		};
	});
});