const characters = [
    'banjo', 'bayonetta', 'bowser', 'bowserjr', 'byleth',
    'captainfalcon', 'charizard', 'chrom', 'cloud', 'corrin',
    'daisy', 'dedede', 'diddykong', 'donkeykong', 'drmario',
    'duckhunt', 'falco', 'fox', 'ganon', 'greninja',
    'hero', 'iceclimbers', 'ike', 'incineroar', 'inkling',
    'isabelee', 'ivysaur', 'jigglypuff', 'joker', 'kazuya',
    'ken', 'kirby', 'krool', 'link', 'littlemac',
    'lucario', 'lucas', 'lucina', 'luigi', 'mario',
    'marth', 'megaman', 'metaknight', 'mewtwo', 'miibrawler',
    'miigunner', 'miiswordsman', 'minmin', 'mythra', 'ness',
    'olimar', 'palutena', 'peach', 'pichu', 'pikachu',
    'piranhaplant', 'pit', 'pitb', 'ptrainer', 'pyra',
    'richter', 'ridley', 'robin', 'rosalina', 'roy',
    'ryu', 'samus', 'samusd', 'sephiroth', 'sheik',
    'shulk', 'simon', 'snake', 'sonic', 'sora',
    'squirtle', 'terry', 'toonlink', 'villager', 'wario',
    'wiifit', 'wolf', 'yoshi', 'younglink', 'zelda',
    'zerosuit'
];

// Populate the character select dropdown
const characterSelect = document.getElementById('character-select');
const selectIcon = document.getElementById('select-icon');

characters.forEach(character => {
    const option = document.createElement('option');
    option.value = character;
    option.textContent = character.charAt(0).toUpperCase() + character.slice(1);
    characterSelect.appendChild(option);
});

// Display icon and notes when character is selected
characterSelect.addEventListener('change', () => {
    const selectedCharacter = characterSelect.value;
    const icon = document.getElementById('icon');

    if (selectedCharacter) {
        // Set the icon source based on character selected
        icon.src = `images/icon_${selectedCharacter}.png`;
        icon.style.display = 'block'; // Show the large icon

        // Set the small icon next to the dropdown
        selectIcon.src = `images/icon_${selectedCharacter}.png`; // Set small icon source
        selectIcon.style.display = 'inline'; // Show small icon next to select

        // Load saved note if available
        const savedNote = localStorage.getItem(`${selectedCharacter}-note`);
        document.getElementById('note').value = savedNote ? savedNote : '';

        // Load saved down throw value if available
        const savedDownThrow = localStorage.getItem(`${selectedCharacter}-down-throw`);
        const downThrowInput = document.getElementById('down-throw-ftilt');
        downThrowInput.innerText = savedDownThrow ? savedDownThrow : ''; // Set innerText for editable div

        // Load saved down throw color if available
        const savedDownThrowColor = localStorage.getItem(`${selectedCharacter}-down-throw-color`);
        if (savedDownThrowColor) {
            downThrowInput.style.backgroundColor = savedDownThrowColor; // Set color if it exists
        }
        
        // Load locked state if available
        const isLocked = localStorage.getItem(`${selectedCharacter}-locked`) === 'true';
        toggleEditable(isLocked);
    } else {
        icon.style.display = 'none'; // Hide the large icon if no character is selected
        selectIcon.style.display = 'none'; // Hide the small icon if no character is selected
    }
});

// Save note and down throw input
document.getElementById('save-button').addEventListener('click', () => {
    const selectedCharacter = characterSelect.value;
    const noteValue = document.getElementById('note').value;
    const downThrowValue = document.getElementById('down-throw-ftilt').innerText; // Get innerText for the editable div

    if (selectedCharacter) {
        localStorage.setItem(`${selectedCharacter}-note`, noteValue); // Save note
        localStorage.setItem(`${selectedCharacter}-down-throw`, downThrowValue); // Save down throw
        document.getElementById('saved-note-message').textContent = 'Note saved!';
    }
});

// Lock and unlock the editability of the down throw input
document.getElementById('lock-button').addEventListener('click', () => {
    const selectedCharacter = characterSelect.value;
    const downThrowInput = document.getElementById('down-throw-ftilt');
    const isLocked = downThrowInput.isContentEditable;

    toggleEditable(!isLocked); // Toggle lock state

    if (isLocked) {
        // Save the background color before locking
        const currentColor = downThrowInput.style.backgroundColor;
        localStorage.setItem(`${selectedCharacter}-down-throw-color`, currentColor); // Save current color
        localStorage.setItem(`${selectedCharacter}-locked`, 'true'); // Mark as locked
        alert('Down throw ftilt % locked!'); // Notify user
    } else {
        localStorage.setItem(`${selectedCharacter}-locked`, 'false'); // Mark as unlocked
        alert('Down throw ftilt % unlocked!'); // Notify user
    }
});

// Function to toggle editable state
function toggleEditable(lock) {
    const downThrowInput = document.getElementById('down-throw-ftilt');
    downThrowInput.contentEditable = !lock; // Toggle contenteditable
    downThrowInput.style.backgroundColor = lock ? '#555' : '#444'; // Change color when locked
}
