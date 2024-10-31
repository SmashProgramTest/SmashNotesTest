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
    const downThrowInput = document.getElementById('down-throw-ftilt');
    const colorSelect = document.getElementById('box-color');

    if (selectedCharacter) {
        // Set the icon source based on character selected
        icon.src = `images/icon_${selectedCharacter}.png`;
        icon.style.display = 'block'; // Show the large icon

        // Set the small icon next to the dropdown
        selectIcon.src = `images/icon_${selectedCharacter}.png`; // Set small icon source
        selectIcon.style.display = 'inline'; // Show small icon next to select

        // Load saved note and stats if available
        const savedNote = localStorage.getItem(`${selectedCharacter}-note`);
        document.getElementById('note').value = savedNote ? savedNote : '';
        
        const savedDownThrow = localStorage.getItem(`${selectedCharacter}-down-throw`);
        downThrowInput.value = savedDownThrow ? savedDownThrow : '';
        
        const savedColor = localStorage.getItem(`${selectedCharacter}-color`);
        colorSelect.value = savedColor ? savedColor : 'white'; // Default to white
        downThrowInput.style.backgroundColor = colorSelect.value; // Set background color
    } else {
        icon.style.display = 'none'; // Hide the large icon if no character is selected
        selectIcon.style.display = 'none'; // Hide the small icon if no character is selected
        document.getElementById('note').value = ''; // Clear the note
        downThrowInput.value = ''; // Clear down throw input
        downThrowInput.style.backgroundColor = 'white'; // Reset background color
        colorSelect.value = 'white'; // Reset color selection
    }
});

// Update the down throw input box color and save the value
const downThrowInput = document.getElementById('down-throw-ftilt');
const colorSelect = document.getElementById('box-color');

colorSelect.addEventListener('change', () => {
    downThrowInput.style.backgroundColor = colorSelect.value; // Change the background color
});

// Save note and stats on button click
document.getElementById('save-button').addEventListener('click', () => {
    const selectedCharacter = characterSelect.value;
    const noteContent = document.getElementById('note').value;
    const downThrowValue = downThrowInput.value;
    const colorValue = colorSelect.value;

    if (selectedCharacter) {
        localStorage.setItem(`${selectedCharacter}-note`, noteContent); // Save note to local storage
        localStorage.setItem(`${selectedCharacter}-down-throw`, downThrowValue); // Save down throw value
        localStorage.setItem(`${selectedCharacter}-color`, colorValue); // Save background color

        document.getElementById('saved-note-message').textContent = `Note saved for ${selectedCharacter.charAt(0).toUpperCase() + selectedCharacter.slice(1)}!`;
    }
});
