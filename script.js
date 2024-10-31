function saveNote(character) {
    const note = document.getElementById(`${character}-note`).value;
    localStorage.setItem(`${character}-note`, note);
    document.getElementById(`${character}-saved-note`).innerText = 'Note saved!';
}

window.onload = function() {
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

    characters.forEach(character => {
        const savedNote = localStorage.getItem(`${character}-note`);
        if (savedNote) {
            document.getElementById(`${character}-note`).value = savedNote;
        }
    });
};
