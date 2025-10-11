        // Criar notas musicais flutuantes
        function createNote() {
            const notes = ['🎵', '🎶', '🎼', '🎸', '🎹'];
            const note = document.createElement('div');
            note.className = 'note';
            note.innerHTML = notes[Math.floor(Math.random() * notes.length)];
            note.style.left = Math.random() * 100 + '%';
            note.style.animationDuration = (Math.random() * 4 + 6) + 's';
            note.style.animationDelay = Math.random() * 2 + 's';
            document.getElementById('musicNotes').appendChild(note);
            
            setTimeout(() => note.remove(), 10000);
        }

        setInterval(createNote, 1000);

        // Mostrar surpresa
        function showSurprise() {
            const surpriseContent = document.getElementById('surpriseContent');
            surpriseContent.classList.add('show');
            
            // Esconder o botão
            event.target.style.display = 'none';
        }

        // Mostrar botão de voltar quando chegar perto do final
        window.addEventListener('scroll', function() {
            const scrollHeight = document.documentElement.scrollHeight;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            const clientHeight = window.innerHeight || document.documentElement.clientHeight;
            
            const scrollPercent = (scrollTop + clientHeight) / scrollHeight;
            
            // Se o usuário rolou até 60% da página, mostra o botão
            if (scrollPercent >= 0.6) {
                document.getElementById('backButton').classList.add('visible');
            } else {
                document.getElementById('backButton').classList.remove('visible');
            }
        });
        
        // Verificar também ao clicar na surpresa
        document.querySelector('.surprise-button').addEventListener('click', function() {
            setTimeout(function() {
                const scrollHeight = document.documentElement.scrollHeight;
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                const clientHeight = window.innerHeight;
                const scrollPercent = (scrollTop + clientHeight) / scrollHeight;
                
                if (scrollPercent >= 0.6) {
                    document.getElementById('backButton').classList.add('visible');
                }
            }, 500);
        });
