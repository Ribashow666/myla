// Criar emojis flutuantes
        function createFloatingEmoji() {
            const emojis = ['❤️', '💕', '💖', '💗', '💓', '💝', '💘', '💞', '📊', '📈', '💯'];
            const emoji = document.createElement('div');
            emoji.className = 'emoji';
            emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.left = Math.random() * 100 + '%';
            emoji.style.animationDuration = (Math.random() * 4 + 6) + 's';
            emoji.style.animationDelay = Math.random() * 2 + 's';
            document.getElementById('floatingEmojis').appendChild(emoji);
            
            setTimeout(() => emoji.remove(), 10000);
        }

        setInterval(createFloatingEmoji, 800);

// Calcular dias juntos dinamicamente
        const startDate = new Date('2025-05-10');
        const today = new Date();
        const diffTime = Math.abs(today - startDate);
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        document.getElementById('daysCounter').textContent = diffDays;

        // Animar medidor de amor
        setTimeout(() => {
            const fill = document.getElementById('loveFill');
            const percentage = document.getElementById('lovePercentage');
            let value = 0;
            
            const interval = setInterval(() => {
                value += 1;
                fill.style.width = value + '%';
                percentage.textContent = value + '%';
                
                if (value >= 100) {
                    clearInterval(interval);
                    percentage.textContent = 'INFINITO! ∞';
                }
            }, 20);
        }, 500);

        // Gráfico de Evolução do Amor
        const loveCtx = document.getElementById('loveChart').getContext('2d');
        new Chart(loveCtx, {
            type: 'line',
            data: {
                labels: ['Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov'],
                datasets: [{
                    label: 'Felicidade',
                    data: [85, 90, 88, 92, 95, 98, 99],
                    borderColor: '#f093fb',
                    backgroundColor: 'rgba(240, 147, 251, 0.1)',
                    tension: 0.4,
                    borderWidth: 3
                }, {
                    label: 'Amor',
                    data: [90, 92, 95, 97, 98, 100, 100],
                    borderColor: '#f5576c',
                    backgroundColor: 'rgba(245, 87, 108, 0.1)',
                    tension: 0.4,
                    borderWidth: 3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: { color: '#fff', font: { size: 14 } }
                    }
                },
                scales: {
                    y: {
                        ticks: { color: '#fff' },
                        grid: { color: 'rgba(255, 255, 255, 0.1)' }
                    },
                    x: {
                        ticks: { color: '#fff' },
                        grid: { color: 'rgba(255, 255, 255, 0.1)' }
                    }
                }
            }
        });

        // Gráfico de Atividades
        const activitiesCtx = document.getElementById('activitiesChart').getContext('2d');
        new Chart(activitiesCtx, {
            type: 'doughnut',
            data: {
                labels: ['Conversas', 'Chamadas', 'Fotos', 'Músicas'],
                datasets: [{
                    data: [450, 120, 230, 180],
                    backgroundColor: ['#f093fb', '#f5576c', '#ffd89b', '#19547b'],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: { color: '#fff', font: { size: 14 } }
                    }
                }
            }
        });

        // Gráfico da Semana
        const weekCtx = document.getElementById('weekChart').getContext('2d');
        new Chart(weekCtx, {
            type: 'bar',
            data: {
                labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
                datasets: [{
                    label: 'Momentos',
                    data: [12, 15, 18, 14, 20, 25, 22],
                    backgroundColor: '#f093fb',
                    borderRadius: 10
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: { color: '#fff', font: { size: 14 } }
                    }
                },
                scales: {
                    y: {
                        ticks: { color: '#fff' },
                        grid: { color: 'rgba(255, 255, 255, 0.1)' }
                    },
                    x: {
                        ticks: { color: '#fff' },
                        grid: { color: 'rgba(255, 255, 255, 0.1)' }
                    }
                }
            }
        });

        // Gráfico de Emoções (Radar)
        const emotionsCtx = document.getElementById('emotionsChart').getContext('2d');
        new Chart(emotionsCtx, {
            type: 'radar',
            data: {
                labels: ['Felicidade', 'Amor', 'Carinho', 'Saudade', 'Paixão'],
                datasets: [{
                    label: 'Intensidade',
                    data: [98, 100, 95, 85, 99],
                    backgroundColor: 'rgba(240, 147, 251, 0.3)',
                    borderColor: '#f093fb',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: { color: '#fff', font: { size: 14 } }
                    }
                },
                scales: {
                    r: {
                        ticks: { color: '#fff', backdropColor: 'transparent' },
                        grid: { color: 'rgba(255, 255, 255, 0.2)' },
                        pointLabels: { color: '#fff' }
                    }
                }
            }
        });