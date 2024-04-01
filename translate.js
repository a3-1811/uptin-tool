// Define a variable to store the current language
let currentLanguage = "en";
let dictionary = {};

// Function to fetch and load translations from JSON file
async function loadTranslations(language) {
  try {
    const response = await fetch(`lang/${language}.json`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error loading translations:", error);
    return {};
  }
}

function findAndreplace(obj = {}, parent = null) {
  for (const key in obj) {
    const isObject = typeof obj[key] === 'object';
    const combineKey = parent ? `${parent}_${key}` : key;
    if (isObject) {
      findAndreplace(obj[key], combineKey);
    }else{
      const eles = document.querySelectorAll(`#${combineKey}`);
      if (eles) {
        eles.forEach(ele=>{
          ele.innerHTML = obj[key];
        })
      }
    }
  }
}

// Function to update content based on language
async function updateContent(language) {
  // Load translations for the selected language
  const translations = await loadTranslations(language);
  dictionary = translations; 
  findAndreplace(translations);

  // Update current language
  currentLanguage = language;
}

// Function to initialize the page with default language
async function initializePage() {
  await updateContent(currentLanguage);
}

// Event listener for language selector
document
  .getElementById("languageSelect")
  .addEventListener("change", async function () {
    const selectedLanguage = this.value;
    await updateContent(selectedLanguage);
  });

// Initialize the page
initializePage();
