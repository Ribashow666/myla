        // Criar corações flutuantes
        function createHeart() {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.innerHTML = '❤️' + '💕' + '💞';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
            heart.style.animationDelay = Math.random() * 2 + 's';
            document.getElementById('hearts').appendChild(heart);
            
            setTimeout(() => heart.remove(), 8000);
        }

        setInterval(createHeart, 800);

        function showNext(section) {
            document.getElementById('section' + (section - 1)).classList.add('hidden');
            document.getElementById('section' + section).classList.remove('hidden');
        }
