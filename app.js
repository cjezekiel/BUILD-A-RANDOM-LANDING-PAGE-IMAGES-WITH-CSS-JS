document.addEventListener('DOMContentLoaded', (e) => {
    const section = document.querySelector('section');

    // Call function every 2s
    setInterval(setBgImage, 2000)

    // Function
    function setBgImage() {
        // Image Array
        const images = [
            '1.png',
            '2.png',
            '3.png',
            '4.png',
            '5.png' 
        ];

        // Randomize Arrays
        const randImage = images.sort((a, b) => 0.5 - Math.random());

        // console.log(randImage[0]);

        // Set Background Image
        section.style.backgroundImage = `url(${randImage[0]})`;
        section.style.transition = `.7s`;

    }
})