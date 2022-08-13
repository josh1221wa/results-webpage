// Get current year
const yearEl = document.querySelector(".year"); // Get the year element
const currentYear = new Date().getFullYear(); // Get the current year
yearEl.textContent = currentYear; // Set the current year

// Fixing gap property missing in some browsers
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-gap");
}
checkFlexGap();

// Adding dark mode toggle
const darkModeToggle =
  document.querySelector(".theme-toggle");
let darkMode = localStorage.getItem("dark-mode");

const enableDarkMode = () => {
  document.body.classList.add("dark-mode");
  localStorage.setItem("dark-mode", "enabled");
};

const disableDarkMode = () => {
  document.body.classList.remove("dark-mode");
  localStorage.setItem("dark-mode", "disabled");
};

if (darkMode === "enabled") {
  enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("dark-mode");
  if (darkMode === "disabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
