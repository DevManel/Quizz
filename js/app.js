document.addEventListener("DOMContentLoaded", function () {
    let themes = ["Culture générale", "Sport", "Films", "Dessins animés", "Musique", "Histoire"];
    
    let cultureG = [
        {
            question: "Quelle est la capitale de la France ?",
            options: ["1. Berlin", "2. Madrid", "3. Paris", "4. Rome", "5. Moscou"],
            correctAnswer: 2
        },
        {
            question: "Quel est le plus grand pays du monde en termes de superficie ?",
            options: ["1. Russie", "2. Canada", "3. Chine", "4. États-Unis", "5. Brésil"],
            correctAnswer: 0
        },
        {
            question: "Qui est l'auteur du célèbre roman 'Le Comte de Monte-Cristo' ?",
            options: ["1. Victor Hugo", "2. Alexandre Dumas", "3. Gustave Flaubert", "4. Honoré de Balzac", "5. Stendhal"],
            correctAnswer: 1
        },
        {
            question: "Quelle est la plus grande ville du monde en termes de population ?",
            options: ["1. Shanghai", "2. New York", "3. Los Angeles", "4. Tokyo", "5. Mumbai"],
            correctAnswer: 3
        },
        {
            question: "Quelle théorie a été formulée par Albert Einstein en 1915 ?",
            options: ["1. Théorie de la relativité restreinte", "2. Théorie de la relativité générale", "3. Théorie de la mécanique quantique", "4. Théorie de la gravité"],
            correctAnswer: 1
        },
        {
            question: "Qui est le fondateur de la philosophie stoïcienne ?",
            options: ["1. Socrate", "2. Platon", "3. Aristote", "4. Épicure", "5. Zénon de Citium"],
            correctAnswer: 4
        },
        {
            question: "Quel est le nom de la plus grande chaîne montagneuse du monde ?",
            options: ["1. Alpes", "2. Andes", "3. Pyrénées", "4. Himalaya", "5. Rocheuses"],
            correctAnswer: 3
        },
        {
            question: "Qui est l'auteur du célèbre tableau 'La Joconde' ?",
            options: ["1. Léonard de Vinci", "2. Michel-Ange", "3. Raphaël", "4. Pablo Picasso", "5. Caravage"],
            correctAnswer: 0
        },
        {
            question: "Quelle est la plus longue rivière du monde ?",
            options: ["1. Yangtsé", "2. Amazone", "3. Nil", "4. Mississippi", "5. Congo"],
            correctAnswer: 2
        },
        {
            question: "Quelle est la plus grande île du monde ?",
            options: ["1. Groenland", "2. Nouvelle-Guinée", "3. Bornéo", "4. Madagascar", "5. Sumatra"],
            correctAnswer: 0
        },
        {
            question: "Qui est le fondateur de la psychanalyse ?",
            options: ["1. Melanie Klein", "2. Carl Jung", "3. Alfred Adler", "4. Erich Fromm", "5. Sigmund Freud"],
            correctAnswer: 4
        }
    ];
    
    let sport = [
        {
            question: "Qui est le joueur de football le plus titré de l'histoire ? ",
            options: ["1. Lionel Messi", "2. Cristiano Ronaldo", "3. Diego Maradona", "4. Johan Cruyff", "5. Pelé"],
            correctAnswer: 0
        },
        {
            question: "Quel est le nom de la plus grande course de Formule 1 du monde ? ",
            options: ["1. Grand Prix de Silverstone", "2. Grand Prix de France", "3. Grand Prix de Monaco", "4. Grand Prix de Monza", "5. Grand Prix de Suzuka"],
            correctAnswer: 2
        },
        {
            question: "Qui est le joueur de basket-ball le plus titré de l'histoire ? ",
            options: ["1. Michael Jordan", "2. Kareem Abdul-Jabbar", "3. LeBron James", "4. Bill Russell", "5. Magic Johnson"],
            correctAnswer: 3
        },
        {
            question: "Quel est le nom de la plus grande équipe de rugby du monde ?",
            options: ["1. All Blacks", "2. Springboks", "3. Wallabies", "4. Lions", "5. Équipe de France"],
            correctAnswer: 0
        },
        {
            question: "Qui est le joueur de tennis le plus titré de l'histoire ? ",
            options: ["1. Rafael Nadal", "2. Roger Federer", "3. Novak Djokovic", "4. Pete Sampras", "5. Bjorn Borg"],
            correctAnswer: 1
        },
        {
            question: "Quel est le nom de la plus grande course de marathon du monde ? ",
            options: ["1. Marathon de Paris", "2. Marathon de Londres", "3. Marathon de Boston", "4. Marathon de New York", "5. Marathon de Tokyo"],
            correctAnswer: 0
        },
        {
            question: "Qui est le joueur de football américain le plus titré de l'histoire ?",
            options: ["1. Aaron Rodgers", "2. Joe Montana", "3. Peyton Manning", "4. Drew Brees", "5. Tom Brady"],
            correctAnswer: 4
        },
        {
            question: "Quel est le nom de la plus grande équipe de cricket  du monde ? ",
            options: ["1. Équipe d'Australie", "2. Équipe du Pakistan", "3. Équipe d'Angleterre", "4. Équipe d'Inde", "5. Équipe d'Afrique du Sud"],
            correctAnswer: 0
        },
        {
            question: "Qui est le joueur de golf le plus titré de l'histoire ?",
            options: ["1. Jack Nicklaus", "2. Arnold Palmer", "3. Tiger Woods", "4. Rory Mcllroy", "5. Gary Player"],
            correctAnswer: 0
        }
    ];
    
    let films = [
        {
            question: "Quel film a remporté l'Oscar du meilleur film en 1994 ?",
            options: ["1. Pulp Fiction", "2. Forrest Gump", "3. Le Roi Lion", "4. Braveheart", "5. La Liste de Schindler"],
            correctAnswer: 1
        },
        {
            question: "Qui a réalisé le film 'Inception' ?",
            options: ["1. Steven Spielberg", "2. Christopher Nolan", "3. Quentin Tarantino", "4. Martin Scorsese", "5. James Cameron"],
            correctAnswer: 1
        },
        {
            question: "Quel acteur a joué le rôle de Jack Dawson dans 'Titanic' ?",
            options: ["1. Brad Pitt", "2. Johnny Depp", "3. Leonardo DiCaprio", "4. Tom Cruise", "5. Matt Damon"],
            correctAnswer: 2
        },
        {
            question: "Quel film d'animation a été produit par Pixar en 2003 ?",
            options: ["1. Toy Story", "2. Monstres et Cie", "3. Le Monde de Nemo", "4. Les Indestructibles", "5. Cars"],
            correctAnswer: 2
        },
        {
            question: "Quel film est basé sur le livre 'Harry Potter à l'école des sorciers' ?",
            options: ["1. Harry Potter et la Chambre des secrets", "2. Harry Potter et le Prisonnier d'Azkaban", "3. Harry Potter et la Coupe de feu", "4. Harry Potter à l'école des sorciers", "5. Harry Potter et les Reliques de la Mort"],
            correctAnswer: 3
        },
        {
            question: "Quel film a été réalisé par Quentin Tarantino et se déroule dans le monde du crime organisé ?",
            options: ["1. Kill Bill", "2. Pulp Fiction", "3. Django Unchained", "4. Reservoir Dogs", "5. Inglourious Basterds"],
            correctAnswer: 1
        },
        {
            question: "Quel film de science-fiction met en scène un voyage dans le temps avec une DeLorean ?",
            options: ["1. Terminator", "2. Retour vers le futur", "3. Interstellar", "4. Matrix", "5. Inception"],
            correctAnswer: 1
        },
        {
            question: "Quel film d'animation a remporté l'Oscar du meilleur film d'animation en 2010 ?",
            options: ["1. Toy Story 3", "2. Shrek", "3. Les Indestructibles", "4. Monstres et Cie", "5. Le Monde de Nemo"],
            correctAnswer: 0
        },
        {
            question: "Quel film raconte l'histoire d'un jeune sorcier qui découvre ses pouvoirs à l'école de sorcellerie ?",
            options: ["1. Le Hobbit", "2. Harry Potter", "3. Eragon", "4. Le Seigneur des Anneaux", "5. Stardust"],
            correctAnswer: 1
        },
        {
            question: "Quel film a été le premier à franchir le milliard de dollars au box-office mondial ?",
            options: ["1. Titanic", "2. Avatar", "3. Star Wars", "4. Jurassic Park", "5. Le Seigneur des Anneaux : Le Retour du Roi"],
            correctAnswer: 0
        }
    ];
    
    let comics = [
        {
            question: "Quel est le nom du personnage principal dans 'Le Roi Lion' ?",
            options: ["1. Simba", "2. Mufasa", "3. Scar", "4. Nala", "5. Timon"],
            correctAnswer: 0
        },
        {
            question: "Quel dessin animé met en scène une petite sirène nommée Ariel ?",
            options: ["1. Mulan", "2. Pocahontas", "3. La Petite Sirène", "4. Cendrillon", "5. Blanche-Neige"],
            correctAnswer: 2
        },
        {
            question: "Quel est le nom du chien dans 'Les 101 Dalmatiens' ?",
            options: ["1. Pongo", "2. Perdita", "3. Cruella", "4. Roger", "5. Anita"],
            correctAnswer: 0
        },
        {
            question: "Quel dessin animé célèbre a été créé par Walt Disney et met en scène une princesse endormie ?",
            options: ["1. Cendrillon", "2. La Belle au bois dormant", "3. La Belle et la Bête", "4. Raiponce", "5. Mulan"],
            correctAnswer: 1
        },
        {
            question: "Quel personnage de dessin animé est connu pour sa phrase 'Eh bien, qu'est-ce qu'il y a ?' ?",
            options: ["1. Bugs Bunny", "2. Daffy Duck", "3. Mickey Mouse", "4. Donald Duck", "5. Porky Pig"],
            correctAnswer: 0
        },
        {
            question: "Quel est le nom du héros dans 'Aladdin' ?",
            options: ["1. Jafar", "2. Jasmine", "3. Abu", "4. Genie", "5. Aladdin"],
            correctAnswer: 4
        },
        {
            question: "Quel dessin animé met en scène un ours nommé Baloo ?",
            options: ["1. Bambi", "2. Winnie l'Ourson", "3. Le Livre de la Jungle", "4. Les Aristochats", "5. Peter Pan"],
            correctAnswer: 2
        },
        {
            question: "Quel est le nom de la princesse dans 'La Belle et la Bête' ?",
            options: ["1. Belle", "2. Ariel", "3. Cendrillon", "4. Pocahontas", "5. Raiponce"],
            correctAnswer: 0
        },
        {
            question: "Quel personnage de dessin animé est un petit éléphant qui peut voler grâce à ses grandes oreilles ?",
            options: ["1. Horton", "2. Bambi", "3. Babar", "4. Dumbo", "5. Elmer"],
            correctAnswer: 3
        },
        {
            question: "Quel dessin animé met en scène un jeune garçon nommé Andy et ses jouets ?",
            options: ["1. Toy Story", "2. Monstres et Cie", "3. Le Monde de Nemo", "4. Les Indestructibles", "5. Cars"],
            correctAnswer: 0
        }
    ];
    
    let musique = [
        {
            question: "Quel groupe a chanté 'Bohemian Rhapsody' ?",
            options: ["1. The Beatles", "2. Queen", "3. Led Zeppelin", "4. Pink Floyd", "5. The Rolling Stones"],
            correctAnswer: 1
        },
        {
            question: "Qui est connu comme le 'Roi de la Pop' ?",
            options: ["1. Elvis Presley", "2. Madonna", "3. Prince", "4. Michael Jackson", "5. David Bowie"],
            correctAnswer: 1
        },
        {
            question: "Quel est le titre de l'album le plus vendu de tous les temps ?",
            options: ["1. Rumours", "2. Back in Black", "3. The Dark Side of the Moon", "4. The Bodyguard", "5. Thriller"],
            correctAnswer: 4
        },
        {
            question: "Quel artiste a sorti la chanson 'Shape of You' ?",
            options: ["1. Ed Sheeran", "2. Justin Bieber", "3. Bruno Mars", "4. Sam Smith", "5. Drake"],
            correctAnswer: 0
        },
        {
            question: "Quel groupe a chanté 'Hotel California' ?",
            options: ["1. The Doors", "2. Fleetwood Mac", "3. The Eagles", "4. Lynyrd Skynyrd", "5. Creedence Clearwater Revival"],
            correctAnswer: 2
        },
        {
            question: "Qui a interprété la chanson 'Rolling in the Deep' ?",
            options: ["1. Beyoncé", "2. Taylor Swift", "3. Adele", "4. Rihanna", "5. Lady Gaga"],
            correctAnswer: 2
        },
        {
            question: "Quel chanteur est connu pour son style de musique country et a sorti l'album 'No Fences' ?",
            options: ["1. Alan Jackson", "2. Garth Brooks", "3. George Strait", "4. Tim McGraw", "5. Blake Shelton"],
            correctAnswer: 1
        },
        {
            question: "Quel duo a chanté 'I Got You Babe' ?",
            options: ["1. Sonny et Cher", "2. Simon et Garfunkel", "3. Hall et Oates", "4. The Carpenters", "5. The Everly Brothers"],
            correctAnswer: 0
        },
        {
            question: "Quel artiste a remporté le plus de Grammy Awards de tous les temps ?",
            options: ["1. Beyoncé", "2. Michael Jackson", "3. Stevie Wonder", "4. Aretha Franklin", "5. Alison Krauss"],
            correctAnswer: 4
        },
        {
            question: "Quel est le titre de la chanson emblématique de Whitney Houston tirée du film 'The Bodyguard' ?",
            options: ["1. I Will Always Love You", "2. Greatest Love of All", "3. I Wanna Dance with Somebody", "4. How Will I Know", "5. Saving All My Love for You"],
            correctAnswer: 0
        }
    ];
    
    let histoire = [
        {
            question: "Qui est le premier président des États-Unis ? ",
            options: ["1. Abraham Lincoln", "2. Thomas Jefferson", "3. George Washington", "4. Franklin D.Roosevelt", "5. Theodore Roosevelt"],
            correctAnswer: 2
        },
        {
            question: "Quel est le nom de la plus grande civilisation antique du monde ? ",
            options: ["1. Civilisation grecque", "2. Civilisation égyptienne", "3. Civilisation Romaine", "4. Civilisation Chinoise", "5. Civilisation Mésopotamie"],
            correctAnswer: 1
        },
        {
            question: "Qui a découvert l'Amérique en 1492 ?",
            options: ["1. Ferdinand Magellan", "2. Hernán Cortés", "3. Vasco de Gama", "4. Christophe Colomb", "5. Marco Polo"],
            correctAnswer: 3
        },
        {
            question: "Quel événement a marqué le début de la Révolution française ?",
            options: ["1. La prise de la Bastille", "2. La Déclaration des droits de l'homme", "3. La chute de la monarchie", "4. La Terreur", "5. Le couronnement de Napoléon"],
            correctAnswer: 0
        },
        {
            question: "Qui était le leader de l'Union soviétique pendant la Seconde Guerre mondiale ?",
            options: ["1. Léon Trotsky", "2. Joseph Staline", "3. Nikita Khrouchtchev", "4. Vladimir Lénine", "5. Mikhail Gorbatchev"],
            correctAnswer: 1
        },
        {
            question: "Quel traité a mis fin à la Première Guerre mondiale ?",
            options: ["1. Traité de Paris", "2. Traité de Trianon", "3. Traité de Saint-Germain", "4. Traité de Brest-Litovsk", "5. Traité de Versailles"],
            correctAnswer: 4
        },
        {
            question: "Qui a été le premier homme à marcher sur la Lune ?",
            options: ["1. Yuri Gagarin", "2. Neil Armstrong", "3. Buzz Aldrin", "4. John Glenn", "5. Michael Collins"],
            correctAnswer: 1
        },
        {
            question: "Quel empire était dirigé par Gengis Khan ?",
            options: ["1. Empire romain", "2. Empire ottoman", "3. Empire mongol", "4. Empire perse", "5. Empire byzantin"],
            correctAnswer: 2
        },
        {
            question: "Quel événement a eu lieu le 11 septembre 2001 ?",
            options: ["1. La chute du mur de Berlin", "2. L'attaque de Pearl Harbor", "3. Les attentats de New York", "4. La fin de la guerre froide", "5. La première guerre du Golfe"],
            correctAnswer: 2
        },
        {
            question: "Qui a écrit 'Le Prince', un traité politique influent ?",
            options: ["1. Machiavel", "2. Rousseau", "3. Montesquieu", "4. Voltaire", "5. Hobbes"],
            correctAnswer: 0
        }
    ];
    
    
    let questions = [];
        let currentQuestionIndex = 0;
        let score = 0;
        let userAnswers = [];
        let correctAnswers = [];
    
        // Modification ici pour correspondre à l'ID correct
        const themeSelectionEl = document.getElementById("themes");
        const questionEl = document.getElementById("question");
        const optionsEl = document.getElementById("options");
        const scoreContainer = document.getElementById("score-container");
        const finalScoreEl = document.getElementById("final-score");
    
        // Exemple d'affichage d'une question
        function displayQuestion() {
            if (currentQuestionIndex < questions.length) {
                let currentQuestion = questions[currentQuestionIndex];
                questionEl.textContent = currentQuestion.question;
    
                optionsEl.innerHTML = ""; 
                currentQuestion.options.forEach((option, index) => {
                    let btn = document.createElement("button");
                    btn.textContent = option;
                    btn.onclick = () => checkAnswer(index);
                    optionsEl.appendChild(btn);
                });
    
                document.getElementById("next-btn").style.display = "none";
            } else {
                questionEl.textContent = `Quiz terminé ! Votre score : ${score}/${questions.length}`;
                optionsEl.innerHTML = "";
    
                document.getElementById("next-btn").style.display = "none";
                showUserAnswers();
                scoreContainer.style.display = "block";
            }
        }
    
        // Fonction pour vérifier la réponse
        function checkAnswer(selectedIndex) {
            let correctIndex = questions[currentQuestionIndex].correctAnswer;
            userAnswers.push(selectedIndex);
            correctAnswers.push(correctIndex);
    
            if (selectedIndex === correctIndex) {
                score++;
            }
    
            document.getElementById("next-btn").style.display = "inline"
            currentQuestionIndex++;
            displayQuestion();
        }
    
        function showUserAnswers() {
            finalScoreEl.innerHTML = `<strong>Votre score final est : ${score} sur ${questions.length}</strong><br><br>`;
            
            let answerList = '<h3>Vos réponses et les réponses correctes :</h3>';
            for (let i = 0; i < questions.length; i++) {
                let userAnswerText = questions[i].options[userAnswers[i]];
                let correctAnswerText = questions[i].options[correctAnswers[i]];
                answerList += `<p><strong>Question ${i + 1}: </strong>${questions[i].question}<br>
                                <strong>Votre réponse: </strong>${userAnswerText}<br>
                                <strong>Réponse correcte: </strong>${correctAnswerText}</p><br>`;
            }
            finalScoreEl.innerHTML += answerList;
        }
    
    
    
        // Fonction de sélection du thème
        function selectTheme(themeIndex) {
            switch (themeIndex) {
                case 0: questions = cultureG; break;
                case 1: questions = sport; break;
                case 2: questions = films; break;
                case 3: questions = comics; break;
                case 4: questions = musique; break;
                case 5: questions = histoire; break;
            }
            currentQuestionIndex = 0;
            score = 0;
            userAnswers = [];
            correctAnswers = [];
            displayQuestion();
    
            // Afficher le conteneur de la question
            document.getElementById("question-container").style.display = "block"; // Affiche les questions
        }
    
        // Ajout des thèmes au DOM
        themes.forEach((theme, index) => {
            let btn = document.createElement("button");
            btn.textContent = theme;
            btn.onclick = () => selectTheme(index);
            themeSelectionEl.appendChild(btn);
        });
    
        // Afficher les réponses de l'utilisateur et les réponses correctes
    function displayAnswers() {
        const answersContainer = document.getElementById("answers-container");
        answersContainer.innerHTML = "";
    
        questions.forEach((question, index) => {
            const userAnswer = userAnswers[index];
            const correctAnswer = question.options[question.correctAnswer];
    
            const answerElement = document.createElement("div");
            answerElement.classList.add("answer");
    
            // Afficher la question et les réponses de l'utilisateur et la correcte
            answerElement.innerHTML = `
                <p><strong>Question ${index + 1} :</strong> ${question.question}</p>
                <p><strong>Votre réponse :</strong> ${question.options[userAnswer]}</p>
                <p><strong>Réponse correcte :</strong> ${correctAnswer}</p>
                <hr />
            `;
            answersContainer.appendChild(answerElement);
        });
    }
    
    document.getElementById("toggle-btn").addEventListener("click", function() {
        const container = document.getElementById("answers-container");
        container.classList.toggle("expanded");
        this.textContent = container.classList.contains("expanded") ? "Afficher moins" : "Afficher plus";
    });
    
    // Appeler cette fonction lorsque le quiz est terminé
    function endQuiz() {
        // Afficher le score final
        document.getElementById("final-score").textContent = `Votre score final est : ${score}/${questions.length}`;
        
        // Afficher toutes les réponses de l'utilisateur
        displayAnswers();
        
        // Afficher le conteneur de score
        document.getElementById("score-container").style.display = "block";
    }
    });