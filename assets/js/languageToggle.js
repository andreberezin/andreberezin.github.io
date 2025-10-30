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