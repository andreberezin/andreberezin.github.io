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


const switchLangButton = document.getElementById('switch-lang');
const htmlTag = document.documentElement;

// Function to update language-based properties
function updateLanguageElements(lang) {
	// Toggle visibility of language elements
	document.querySelectorAll("[lang='en']").forEach(element => {
		if (element !== htmlTag) {
			element.hidden = lang !== "en";
		}
	});

	document.querySelectorAll("[lang='ee']").forEach(element => {
		if (element !== htmlTag) {
			element.hidden = lang !== "ee";
		}
	});

	// Update --data-type property on .title-wrapper elements
	document.querySelectorAll('.title-wrapper').forEach(wrapper => {
		const dataType = lang === 'en' ? wrapper.getAttribute('data-type-en') : wrapper.getAttribute('data-type-ee');
		if (dataType) {
			wrapper.style.setProperty('--data-type', `"${dataType}"`);
		}
	});
}

// Language toggle function
function toggleLanguage() {
	const currentLang = localStorage.getItem("lang") || "en";
	const newLang = currentLang === "en" ? "ee" : "en";

	localStorage.setItem("lang", newLang);
	updateLanguageElements(newLang);
}

// Apply the saved language when the page loads
document.addEventListener("DOMContentLoaded", () => {
	const savedLang = localStorage.getItem("lang") || "en";
	updateLanguageElements(savedLang);
});

// Add event listener for the language switch button
switchLangButton.addEventListener("click", toggleLanguage);