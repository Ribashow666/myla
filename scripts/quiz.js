// Criar corações flutuantes
        function createHeart() {
            const hearts = ['❤️', '💕', '💖', '💗', '💓', '💝', '💘', '💞'];
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (Math.random() * 4 + 6) + 's';
            heart.style.animationDelay = Math.random() * 2 + 's';
            document.getElementById('floatingHearts').appendChild(heart);
            
            setTimeout(() => heart.remove(), 10000);
        }

        setInterval(createHeart, 1000);

        // Perguntas do Quiz
        const questions = [
            {
                question: "Qual foi a data do nosso primeiro encontro?",
                options: ["10 de Maio", "13 de Maio", "15 de Maio", "18 de Maio"],
                correct: 1
            },
            {
                question: "Onde foi nosso primeiro encontro?",
                options: ["Cinema", "Praça do Derby", "Zoológico", "No parque perto do trampo de Myla"],
                correct: 3
            },
            {
                question: "Qual foi o primeiro filme que assistimos juntos no cinema?",
                options: ["Premonição", "Vingadores", "Harry Potter", "Velozes e Furiosos"],
                correct: 0
            },
            {
                question: "Quando começamos a namorar oficialmente?",
                options: ["10 de Maio", "5 de Junho", "13 de Maio", "22 de Maio"],
                correct: 1
            },
            {
                question: "Qual foi o animal que vimos antes de eu te pedir em namoro?",
                options: ["Macacos", "Leões", "Capivaras", "Girafas"],
                correct: 2
            },
            {
                question: "Onde a gente sempre vai comer açaí/sorvete?",
                options: ["McDonald's", "Glacaí", "Milky Moo", "Todas as anteriores"],
                correct: 3
            },
            {
                question: "Qual série a gente passou o dia TODO assistindo?",
                options: ["Breaking Bad", "Dexter", "Stranger Things", "The Office"],
                correct: 1
            },
            {
                question: "Qual jogo a gente zerou juntos?",
                options: ["It Takes Two", "Split Fiction", "Overcooked", "Mario Kart"],
                correct: 0
            },
            {
                question: "Em que dia completamos 200 dias juntos?",
                options: ["20 de Novembro", "26 de Novembro", "1 de Dezembro", "10 de Novembro"],
                correct: 1
            },
            {
                question: "Qual é nosso cantinho favorito?",
                options: ["Parque das Graças", "Praça do Derby", "Shopping", "Todos eles"],
                correct: 3
            }
        ];

        let currentQuestionIndex = 0;
        let score = 0;
        let selectedOption = null;

        function startQuiz() {
            document.querySelector('.start-screen').classList.remove('active');
            document.querySelector('.quiz-screen').classList.add('active');
            currentQuestionIndex = 0;
            score = 0;
            loadQuestion();
        }

        function loadQuestion() {
            const question = questions[currentQuestionIndex];
            document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
            document.getElementById('totalQuestions').textContent = questions.length;
            document.getElementById('question').textContent = question.question;
            
            const optionsContainer = document.getElementById('options');
            optionsContainer.innerHTML = '';
            selectedOption = null;
            document.getElementById('nextBtn').classList.remove('show');

            question.options.forEach((option, index) => {
                const optionDiv = document.createElement('div');
                optionDiv.className = 'option';
                optionDiv.textContent = option;
                optionDiv.onclick = () => selectOption(index, optionDiv);
                optionsContainer.appendChild(optionDiv);
            });
        }

        function selectOption(index, element) {
            if (selectedOption !== null) return;

            selectedOption = index;
            const question = questions[currentQuestionIndex];
            const options = document.querySelectorAll('.option');

            options.forEach((opt, i) => {
                if (i === question.correct) {
                    opt.classList.add('correct');
                } else if (i === index && i !== question.correct) {
                    opt.classList.add('wrong');
                }
                opt.style.pointerEvents = 'none';
            });

            if (index === question.correct) {
                score++;
            }

            document.getElementById('nextBtn').classList.add('show');
        }

        function nextQuestion() {
            currentQuestionIndex++;
            
            if (currentQuestionIndex < questions.length) {
                loadQuestion();
            } else {
                showResults();
            }
        }

        function showResults() {
            document.querySelector('.quiz-screen').classList.remove('active');
            document.querySelector('.result-screen').classList.add('active');

            const percentage = (score / questions.length) * 100;
            
            document.getElementById('score').textContent = score + '/' + questions.length;
            document.getElementById('correctAnswers').textContent = score;
            document.getElementById('totalQuestionsResult').textContent = questions.length;
            document.getElementById('percentage').textContent = percentage.toFixed(0) + '% de acertos!';

            let message = '';
            if (percentage === 100) {
                message = '🏆 PERFEITO! Você lembra de TUDO sobre a gente! Sua memória é incrível, amor! Te amo demais! ❤️';
            } else if (percentage >= 80) {
                message = '🎉 Muito bem! Você tem uma ótima memória sobre nossa história! Continue assim, meu amor! 💕';
            } else if (percentage >= 60) {
                message = '😊 Nada mal! Você lembra de bastante coisa, mas tem alguns detalhes que passaram batido! 💖';
            } else if (percentage >= 40) {
                message = '🤔 Hmm, parece que você esqueceu algumas coisas importantes! Vou ter que te lembrar mais! 💝';
            } else {
                message = '😅 Amor! Você esqueceu muita coisa da nossa história! Precisamos criar mais memórias juntos! ❤️';
            }

            document.getElementById('resultMessage').textContent = message;
        }

        function restartQuiz() {
            document.querySelector('.result-screen').classList.remove('active');
            document.querySelector('.start-screen').classList.add('active');
        }