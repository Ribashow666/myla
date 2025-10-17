    // Criar emojis flutuantes
        function createFloatingEmoji() {
            const emojis = ['❤️', '💕', '💖', '💗', '💓', '💝', '💘', '💞', '📅', '📸', '⭐'];
            const emoji = document.createElement('div');
            emoji.className = 'emoji';
            emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.left = Math.random() * 100 + '%';
            emoji.style.animationDuration = (Math.random() * 3 + 5) + 's';
            emoji.style.animationDelay = Math.random() * 2 + 's';
            document.getElementById('floatingEmojis').appendChild(emoji);
            
            setTimeout(() => emoji.remove(), 9000);
        }

        setInterval(createFloatingEmoji, 900);
    
    // Detectar quando o usuário chega perto do final da página
        window.addEventListener('scroll', function() {
            const scrollHeight = document.documentElement.scrollHeight;
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            const clientHeight = document.documentElement.clientHeight;
            
            // Se o usuário rolou até 80% da página, mostra os botões
            if (scrollTop + clientHeight >= scrollHeight * 0.8) {
                document.getElementById('backButton').classList.add('visible');
                document.getElementById('nextButton').classList.add('visible');
            } else {
                document.getElementById('backButton').classList.remove('visible');
                document.getElementById('nextButton').classList.remove('visible');
            }
        });