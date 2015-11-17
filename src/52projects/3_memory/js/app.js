document.addEventListener('DOMContentLoaded', function(e) {
	// show cards on page load
	memory.createCards();
	// attach event listener to cards
	var wrapper = document.querySelector('.wrapper'),
		replayButton = document.querySelector('.replay');

	wrapper.addEventListener('click', memory.clickCard);
	replayButton.addEventListener('click', memory.createCards);
});

var memory = {
	selectedArray : [],
	counter : 0,
	createCards : function() {
		var pairCount = 8,
			i = 0,
			newCard,
			copyCard,
			cardArray = [],
			wrapper = document.querySelector('.wrapper'),
			_this = this;


		// clear old game
		wrapper.innerHTML = '';
		// create cards and assign classes
		for (i; i < pairCount; i++) {

			newCardContainer = document.createElement('div');
			newCardContainer.className = 'card-container pair-' + (i + 1);
			newFront = document.createElement('div');
			newFront.className = 'front';
			newBack = document.createElement('div');
			newBack.className = 'back';

			newCardContainer.appendChild(newFront);
			newCardContainer.appendChild(newBack);

			cardArray.push(newCardContainer, newCardContainer.cloneNode(true)); // push complete pair into array, cloning the second
		}

		memory.shuffleCards(cardArray);
	},
	shuffleCards : function(arr) {
		var array = arr,
			arrayLength = array.length,
			i = 0,
			temp;

		while (arrayLength) {
			i = Math.floor(Math.random() * arrayLength--); // choose random number from card remaining to be shuffled

			temp = array[arrayLength]; // hold last index to still be shuffled in temp
			array[arrayLength] = array[i]; // set last index to currently chosen/shuffled index
			array[i] = temp; // place unshuffled item at front of array, with other unshuffleds
		}

		this.printCards(array);
	},
	printCards : function(arr) {
		var parent = document.querySelector('.wrapper'),
			array = arr,
			arrayLength = array.length,
			i = 0;

		for (i; i < arrayLength; i++) {

			parent.appendChild(array[i]);

		}
	},
	clickCard : function(e) {
		// only listen for clicks on child elements (cards)
		if (e.target.parentElement !== e.currentTarget && !e.target.classList.contains('back')) {
			memory.flipCard(e.target.parentElement);
		} else {
			return false;
		}

		memory.matchCard(e);
	},
	flipCard : function(card) {
		if (card.className.indexOf('flip') === -1) {
			card.classList.add('flip');
		} else {
			card.classList.remove('flip');
		}
	},
	matchCard : function(e) {
		var currentCard,
			_this = this,
			selectedArray = memory.selectedArray,
			selectedArrayLength = selectedArray.length;

		// only listen for clicks on child elements (cards)
		if (e.target.parentElement !== e.currentTarget) {
			currentCard = e.target.parentElement,
			memory.selectedArray.push(currentCard);
			selectedArrayLength++;
		}

		if (selectedArrayLength === 2) {
			var i = 0;

			if (selectedArray[0].classList[1] !== selectedArray[1].classList[1]) {
				// add delay
				setTimeout(function() {
					for (i; i < selectedArrayLength; i++) {
						memory.flipCard(selectedArray[i]);
					}
				}, 1000)
			} else {
				this.counter++;

				if (this.counter === 8) {
					var replay = document.querySelector('.replay');

					replay.classList.add('show');
				}
			}
			memory.selectedArray = [];
		}
	}
}