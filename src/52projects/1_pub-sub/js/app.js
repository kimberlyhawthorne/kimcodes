document.addEventListener('DOMContentLoaded', function(e) {
	lottery.init();
	pubSub.subscribe('lotterySelections', lottery.printNums);
})


var lottery = lottery || {};

lottery = {
	init : function() {
		var generateButton = document.querySelector('.generate-button')
			_this = this;

		generateButton.addEventListener('click', function(e) {
			e.preventDefault();
			_this.generateNums();
		})
	},
	createNumPool : function(num) {
		var i = 0,
			maximum = num, 
			array = [];

		for (i; i < num; i++) {
			array.push(i + 1);
		}

		return array;
	},
	pickNumber : function(maxNum) {
		return Math.floor(Math.random() * (maxNum - 1 + 1)) + 1;
	},
	generateNums : function() {
		var array = [], 
			i = 0,
			currentIndex,
			powerball,
			whiteNum = 59,
			whiteNumArray = this.createNumPool(whiteNum),
			redNum = 35;

		// five white balls
		for (i; i < 5; i++) {
			var n = 0;

			currentIndex = this.pickNumber(whiteNum);

			// check if chosen number is in whiteNumArray
			// if so, remove it. if not, draw another.
			if (whiteNumArray.indexOf(currentIndex) > -1 ) {
				whiteNumArray.splice(whiteNumArray.indexOf(currentIndex), 1);
				console.log(currentIndex + ' ' + whiteNumArray);
			} else {
				i--; // ensure five numbers are chosen
				continue;
			}

			array.push(currentIndex); 
		}

		// one red ball
		powerball = this.pickNumber(redNum);
		array.push(powerball);

		pubSub.publish('lotterySelections', array);
	},
	printNums : function(array) {
		var lotteryResults = document.querySelector('.lottery-results'),
			i = 0,
			currentIndex,
			arrayLength = array.length,
			resultsSet = document.createElement('ul'),
			newListItem,
			newListItemText;

		// create set of lotto results, each in a li tag pushed 
		for (i; i < arrayLength; i++) {
			currentIndex = array[i].toString();
			newListItem = document.createElement('li');
			newListItemText = document.createTextNode(currentIndex);

			newListItem.appendChild(newListItemText);
			resultsSet.appendChild(newListItem);
		}

		lotteryResults.insertBefore(resultsSet, lotteryResults.firstChild);
		setTimeout(function() {
			resultsSet.className = 'show';
		}, 100)
	}
}

var pubSub = {
	topics : {},
	publish : function(topic, arguments) {
		var key = topic,
			listener;

		// add topic to list if it doesn't exist already
		if (!(key in this.topics)) {
			this.topics[key] = [key];
		}

		listener = this.topics[key][1];
		listener(arguments);

	},
	subscribe : function(topic, listener) {
		var key = topic;

		// create topic and add to list, if it doesn't exist already
		if (!(key in this.topics)) {
			this.topics[key] = [key];
		}

		this.topics[key].push(listener);
	}
}