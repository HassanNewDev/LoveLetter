const revealBtn = document.getElementById('revealBtn');
        const loveLetter = document.getElementById('loveLetter');

        revealBtn.addEventListener('click', () => {
            loveLetter.classList.add('reveal');
            revealBtn.style.display = 'none';
            createHearts();
        });

        function createHearts() {
            for (let i = 0; i < 20; i++) {
                const heart = document.createElement('div');
                heart.innerHTML = '❤️';
                heart.classList.add('hearts');
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.animationDelay = Math.random() * 2 + 's';
                document.body.appendChild(heart);
                
                setTimeout(() => {
                    heart.remove();
                }, 3000);
            }
        }