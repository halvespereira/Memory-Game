document.addEventListener('DOMContentLoaded', () => {
        const cardArray = [
                {
                        name: 'Kissing',
                        img: './kissing.JPEG',
                },
                {
                        name: 'Kissing',
                        img: './kissing.JPEG',
                },
                {
                        name: 'Heart-Eyes',
                        img: './Heart-eyes-emoji.jpg',
                },
                {
                        name: 'Heart-Eyes',
                        img: './Heart-eyes-emoji.jpg',
                },
                {
                        name: 'Laughing',
                        img: './laughing.jpg',
                },
                {
                        name: 'Laughing',
                        img: './laughing.jpg',
                },
                {
                        name: 'Saluting',
                        img: './SalutingEmoji.jpg',
                },
                {
                        name: 'Saluting',
                        img: './SalutingEmoji.jpg',
                },
                {
                        name: 'Silly',
                        img: './silly.jpg',
                },
                {
                        name: 'Silly',
                        img: './silly.jpg',
                },
                {
                        name: 'Surprised',
                        img: './surprised.png',
                },
                {
                        name: 'Surprised',
                        img: './surprised.png',
                },
        ];

        cardArray.sort(() => 0.5 - Math.random());

        const grid = document.querySelector('.grid');
        const buttonDiv = document.createElement('div');
        const outerDiv = document.querySelector('.outerDiv');
        const button = document.createElement('button');
        const resultDisplay = document.querySelector('#result');
        let cardsChosen = [];
        let cardsChosenId = [];
        const cardsWon = [];

        function createBoard() {
                for (let i = 0; i < cardArray.length; i++) {
                        const card = document.createElement('img');
                        card.setAttribute('class', 'imgGrid');
                        card.setAttribute('src', './initial.jpg');
                        card.setAttribute('data-id', i);
                        card.addEventListener('click', flipCard);
                        grid.appendChild(card);
                }
        }

        outerDiv.appendChild(buttonDiv);
        buttonDiv.appendChild(button);
        button.innerHTML = ' &#128513;   Restart   &#128513; ';
        buttonDiv.classList.add('button');

        function restartPage() {
                window.location.reload();
        }

        button.addEventListener('click', restartPage);

        function checkForMatch() {
                const cards = document.getElementsByClassName('imgGrid');
                const optionOneId = cardsChosenId[0];
                const optionTwoId = cardsChosenId[1];
                if (cardsChosen[0] === cardsChosen[1]) {
                        cards[optionOneId].setAttribute('src', './white-space.jpg');
                        cards[optionTwoId].setAttribute('src', './white-space.jpg');
                        cardsWon.push(cardsChosen);
                } else {
                        cards[optionOneId].setAttribute('src', './initial.jpg');
                        cards[optionTwoId].setAttribute('src', './initial.jpg');
                }
                cardsChosen = [];
                cardsChosenId = [];
                resultDisplay.textContent = cardsWon.length;
                if (cardsWon.length === cardArray.length / 2) {
                        resultDisplay.innerHTML = 'Nice work!! You found all pairs! &#128516; &#129304; &#129351;';
                }
        }

        function flipCard() {
                const cardID = this.getAttribute('data-id');
                cardsChosen.push(cardArray[cardID].name);
                cardsChosenId.push(cardID);
                this.setAttribute('src', cardArray[cardID].img);
                if (cardsChosen.length === 2) {
                        setTimeout(checkForMatch, 500);
                }
        }
        createBoard();
});
