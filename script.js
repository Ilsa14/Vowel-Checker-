function checkVowel() {
    const input = document.getElementById("inputText").value.toLowerCase();
    const result = document.getElementById("result");
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    if (input.length !== 1) {
        result.textContent = "Please enter a single character.";
        result.style.color = 'red';
        return;
    }

    if (vowels.includes(input)) {
        result.textContent = `"${input}" is a vowel.`;
        result.style.color = 'green';
    } else {
        result.textContent = `"${input}" is not a vowel.`;
        result.style.color = 'red';
    }
}
