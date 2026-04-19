/*** Dark Mode ***
  
  Purpose:
  - Use this starter code to add a dark mode feature to your website.

  When To Modify:
  - [ ] Project 5 (REQUIRED FEATURE) 
  - [ ] Any time after
***/

// Step 1: Select the theme button
const themeButton = document.querySelector("#theme-button");

// Step 2: Write the callback function
const toggleDarkMode = () => {
    const isDark = document.documentElement.classList.toggle('dark-mode');
    themeButton.textContent = isDark ? 'Light Mode' : 'Dark Mode';
}

// Step 3: Register a 'click' event listener for the theme button,
//             and tell it to use toggleDarkMode as its callback function
themeButton.addEventListener('click', toggleDarkMode);


/*** Form Handling [PLACEHOLDER] [ADDED IN UNIT 6] ***/

/*** Form Handling ***
  
  Purpose:
  - When the user submits the RSVP form, the name and state they 
    entered should be added to the list of participants.

  When To Modify:
  - [ ] Project 6 (REQUIRED FEATURE)
  - [ ] Project 6 (STRETCH FEATURE) 
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: Add your query for the submit RSVP button here
const rsvpButton = document.querySelector("#rsvp-button");

const addParticipant = (event) => {
    // Step 2: Write your code to manipulate the DOM here
    event.preventDefault();

    const nameInput = document.querySelector("#rsvp-name");
    const stateInput = document.querySelector("#rsvp-state");
    const emailInput = document.querySelector("#rsvp-email");

    const newEntry = document.createElement("p");
    newEntry.textContent = `🎟️ ${nameInput.value.trim()} from ${stateInput.value.trim()} has RSVP'd.`;
    document.querySelector(".rsvp-participants").appendChild(newEntry);

    nameInput.value = "";
    stateInput.value = "";
    emailInput.value = "";

}

// Step 3: Add a click event listener to the submit RSVP button here
rsvpButton.addEventListener('click', addParticipant);
/*** Form Validation [PLACEHOLDER] [ADDED IN UNIT 7] ***/
/*** Form Validation ***
  
  Purpose:
  - Prevents invalid form submissions from being added to the list of participants.

  When To Modify:
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 7 (STRETCH FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: We actually don't need to select the form button again -- we already did it in the RSVP code above.

// Step 2: Write the callback function
const validateForm = (event) => {

  let containsErrors = false;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  var rsvpInputs = document.getElementById("rsvp-form").elements;
  for (let input of rsvpInputs) {
    const invalid = input.value.trim() === ""
      || !input.validity.valid
      || (input.type === "email" && !emailRegex.test(input.value.trim()));
    if (invalid) {
      input.classList.add("error");
      containsErrors = true;
    } else {
      input.classList.remove("error");
    }
  }

  if (!containsErrors) {
    addParticipant(event);
  }

}

// Step 3: Replace the form button's event listener with a new one that calls validateForm()
rsvpButton.removeEventListener('click', addParticipant);
rsvpButton.addEventListener('click', validateForm);

/*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/
/*** Success Modal [PLACEHOLDER] [ADDED IN UNIT 9] ***/