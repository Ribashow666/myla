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