function saveNote(character) {
    const noteText = document.getElementById(`${character}-note`).value;
    document.getElementById(`${character}-saved-note`).innerText = `Saved Note: ${noteText}`;
    
    // Save the note in local storage
    localStorage.setItem(`${character}-note`, noteText);
}

// Load notes from local storage when the page loads
window.onload = function() {
    const characters = ['bayonetta', 'mario']; // Add more character IDs here
    characters.forEach(character => {
        const savedNote = localStorage.getItem(`${character}-note`);
        if (savedNote) {
            document.getElementById(`${character}-note`).value = savedNote;
            document.getElementById(`${character}-saved-note`).innerText = `Saved Note: ${savedNote}`;
        }
    });
};
