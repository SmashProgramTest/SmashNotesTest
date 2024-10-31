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
characters.forEach(character => {
    const option = document.createElement('option');
    option.value = character;
    option.textContent = character.charAt(0).toUpperCase() + character.slice(1);
    characterSelect.appendChild(option);
});

// Load saved notes and update icon
window.onload = () => {
    characters.forEach(character => {
        const savedNote = localStorage.getItem(`${character}-note`);
        if (savedNote) {
            document.getElementById(`${character}-note`).value = savedNote;
        }
    });
};

// Display icon and notes when character is selected
characterSelect.addEventListener('change', () => {
    const selectedCharacter = characterSelect.value;
    const icon = document.getElementById('icon');

    if (selectedCharacter) {
        // Set the icon source based on character selected
        icon.src = `icon_${selectedCharacter}.png`; // Update this path if necessary
        icon.style.display = 'block'; // Show the icon
        const savedNote = localStorage.getItem(`${selectedCharacter}-note`);
        document.getElementById('note').value = savedNote ? savedNote : '';
    } else {
        icon.style.display = 'none'; // Hide the icon if no character is selected
        document.getElementById('note').value = ''; // Clear the note
    }
});

// Save the note
document.getElementById('save-button').addEventListener('click', () => {
    const selectedCharacter = characterSelect.value;
    const note = document.getElementById('note').value;

    if (selectedCharacter) {
        localStorage.setItem(`${selectedCharacter}-note`, note);
        document.getElementById('saved-note-message').textContent = 'Note saved!';
    }
});
