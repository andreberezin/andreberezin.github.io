const modal = document.getElementById('loadingModal');

// pop-up to confirm is user wants to proceed to the link
document.querySelectorAll('.website-link').forEach(link => {
	link.addEventListener('click', function(event) {
		event.preventDefault(); // Prevent immediate navigation

		// Show the modal
		// const modal = document.getElementById('loadingModal');
		const proceedButton = document.getElementById('proceedButton');
		const cancelButton = document.getElementById('cancelButton');

		modal.style.display = 'flex'; // Show modal

		// Handle the Proceed button click
		proceedButton.onclick = function() {
			window.open(link.href, '_blank'); // Proceed to the link in a new tab
			modal.style.display = 'none'; // Close the modal
		};

		// Handle the Cancel button click
		cancelButton.onclick = function() {
			modal.style.display = 'none'; // Close the modal without navigating
		};
	});
});

// close modal if user clicks outside the modal
document.querySelectorAll('.modal').forEach(modal => {
	modal.addEventListener('click', function(event) {
		event.preventDefault(); // Prevent immediate navigation

		// display none if clicked outside of modal element
		if(event.target === modal) {
			modal.style.display = 'none';
		}

	});
});