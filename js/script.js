// Get current year
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Fixing flexbox gap property missing in some Safari versions
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

  if (!isSupported)
    document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// Adding dark mode toggle
const darkModeToggle = document.querySelector('.theme-toggle');
let darkMode = localStorage.getItem('dark-mode');

const enableDarkMode = () => {
  document.body.classList.add('dark-mode');
  localStorage.setItem('dark-mode', 'enabled');
};

const disableDarkMode = () => {
  document.body.classList.remove('dark-mode');
  localStorage.setItem('dark-mode', "disabled");
};

if (darkMode === "enabled") {
  enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('dark-mode');
  if (darkMode === "disabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
}
);