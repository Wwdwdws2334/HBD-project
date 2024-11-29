// Selecting elements
const title = document.getElementById('title');
const nextBtn = document.getElementById('next-btn');
const imageCarousel = document.getElementById('image-carousel');
const song = document.querySelector('.song');

// When "Next" button is clicked
nextBtn.addEventListener('touchend', () => {
    // Fade out the "Next" button and then hide it
    nextBtn.classList.add('fade-out');

    // Start playing the song
    song.play();

    // Change title to "วันที่คนน่ารักเกิดมาบนโลกนี้ไง" with typing effect after 1 second
    setTimeout(() => {
        title.textContent = ''; // Clear current title
        typeText('วันที่คนน่ารักเกิดมาบนโลกนี้ไง'); // Call function to type the text
    }, 1000); // Delay of 1 second before typing starts

    // Show "ขอบคุณที่เราได้มาเจอกันนะคะ" after the first text (14 seconds after clicking)
    setTimeout(() => {
        title.textContent = '';
        typeText('ขอบคุณที่เราได้มาเจอกันนะคะ'); // Call function to type the text
    }, 13000); // 14 seconds after the first text

    // Show "สุขสันต์วันเกิดนะ" after 6 seconds more (24 seconds after clicking)
    setTimeout(() => {
        title.textContent = '';
        typeText('สุขสันต์วันเกิดนะ'); // Call function to type the text❤️
    }, 23000); // 6 seconds after the previous text

    // Show "รักเธอนะคะ" after 6 more seconds (30 seconds after clicking)
    setTimeout(() => {
        title.textContent = '';
        typeText('รักเธอนะคะ 🎄❤️'); // Call function to type the text
    }, 29000); // 6 seconds after the previous text

    // Show the image carousel after all text animations with a fade-in and slide-up effect (36 seconds total)
    setTimeout(() => {
        imageCarousel.classList.add('show'); // Add the class that triggers the animation
    }, 35000); // 6 seconds after the last text
});❤️

// Function to simulate typing the text
function typeText(text) {
    let index = 0;
    const typingInterval = setInterval(() => {
        title.textContent += text[index];
        index++;

        if (index === text.length) {
            clearInterval(typingInterval); // Stop when the full text is typed
        }
    }, 200); // Adjust this interval for typing speed (200 ms per character)
}
