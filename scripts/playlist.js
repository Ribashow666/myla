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
            
            // Iniciar o contador
            updateCounter();
            setInterval(updateCounter, 1000);
        }
        
        // Calcular e atualizar o contador
        function updateCounter() {
            const yearsEl = document.getElementById('years');
            const monthsEl = document.getElementById('months');
            const daysEl = document.getElementById('days');
            const hoursEl = document.getElementById('hours');
            
            // Verificar se os elementos existem antes de atualizar
            if (!yearsEl || !monthsEl || !daysEl || !hoursEl) return;
            
            const startDate = new Date('2025-05-10T13:00:00');
            const now = new Date();
            
            const diff = now - startDate;
            
            const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
            const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30.44));
            const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            
            yearsEl.textContent = years;
            monthsEl.textContent = months;
            daysEl.textContent = days;
            hoursEl.textContent = hours;
        }

        // Mostrar botão de voltar quando chegar perto do final
        window.addEventListener('scroll', function() {
            const scrollHeight = document.documentElement.scrollHeight;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            const clientHeight = window.innerHeight || document.documentElement.clientHeight;
            
            const scrollPercent = (scrollTop + clientHeight) / scrollHeight;
            
            // Se o usuário rolou até 60% da página, mostra os botões
            if (scrollPercent >= 0.6) {
                document.getElementById('backButton').classList.add('visible');
                document.getElementById('nextButton').classList.add('visible');
            } else {
                document.getElementById('backButton').classList.remove('visible');
                document.getElementById('nextButton').classList.remove('visible');
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
                    document.getElementById('nextButton').classList.add('visible');
                }
            }, 500);
        });