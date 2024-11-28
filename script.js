// Selecting elements
const title = document.getElementById('title');
const nextBtn = document.getElementById('next-btn');
const imageCarousel = document.getElementById('image-carousel');
const youtubeMusic = document.getElementById('youtube-music');

// When "Next" button is clicked
nextBtn.addEventListener('click', () => {
    // Fade out the "Next" button and then hide it
    nextBtn.classList.add('fade-out');

    // Show the image carousel after button fades out
    setTimeout(() => {
        imageCarousel.style.display = 'flex';
        imageCarousel.classList.remove('hidden');
        imageCarousel.hidden = false;
    }, 1000); // Wait for button fade out (1 second)

    // Start playing YouTube music by updating the iframe source with autoplay
    youtubeMusic.src = "https://www.youtube.com/embed/kt9n5E71EPI?start=0&autoplay=1";

    // Change title to "วันที่คนน่ารักเกิดมาบนโลกนี้ไง" with typing effect after 3 seconds
    setTimeout(() => {
        title.textContent = ''; // Clear current title
        typeText('วันที่คนน่ารักเกิดมาบนโลกนี้ไง'); // Call function to type the text
    }, 1000); // Delay of 10 seconds before typing starts

    // Show "ขอบคุณที่เราได้มาเจอกันนะคะ" after typing is done (delay further by 12 seconds)
    setTimeout(() => {
        title.textContent = '';
        typeText('ขอบคุณที่เราได้มาเจอกันนะคะ'); // Call function to type the text
    }, 12000); // 12 seconds after the first text

    // Show "สุขสันต์วันเกิดนะ" after 6 seconds more
    setTimeout(() => {
        title.textContent = '';
        typeText('สุขสันต์วันเกิดนะ'); // Call function to type the text
    }, 24000); // 6 seconds after the previous text

    // Show "รักเธอนะคะ" after 6 more seconds
    setTimeout(() => {
        title.textContent = '';
        typeText('รักเธอนะคะ'); // Call function to type the text
    }, 30000); // 6 seconds after the previous text
});

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
