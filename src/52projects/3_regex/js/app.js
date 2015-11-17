document.addEventListener('DOMContentLoaded', function (e) {
	regEx.init();
});


var regEx = {

	init: function () {
		var form = document.getElementById('genericForm'),
			children = form.children,
			childrenLength = children.length,
			i = 0,
			reType;

		// loop through children and attach event listener
		for (i; i < childrenLength; i++) {

			// if input has a minimum length
			if (children[i].dataset.chars) {
				children[i].addEventListener('input', regEx.onInput)
				children[i].addEventListener('blur', regEx.validate.minLength); // ensure min length is reached on blur
			} else {
				children[i].addEventListener('blur', function() {
					regEx.processInput(this);
				});
			}
		}

	},

	onInput: function (e) {
		var element = this,
			value = this.value,
			key = e.keyCode;

		regEx.processInput(element);

		// autoformatting
		if (element.classList.contains('autoformat')) {
			var formatType = element.id;

			regEx['format'][formatType](value);
		}

	},

	processInput: function(element) {
		var	reType = element.dataset.regex,
			value = element.value,
			reqLength = element.dataset.chars ? element.dataset.chars : undefined,
			result;

		element.classList.remove('validated');
		element.classList.remove('error');

		// validate and update classes
		if (!reqLength || (reqLength && value.length == reqLength)) {
			result = regEx['validate'][reType](value);
			regEx.status.update(element, result);
		}
	},

	status : {
		error: function (element) {
			element.classList.remove('validated');
			element.classList.add('error');
		},
		update: function (element, result) {
			if (result) {
				this.valid(element);
			} else {
				this.error(element);
			}

		},
		valid: function (element) {
			element.classList.add('validated');
			element.classList.remove('error');
		}
	},

	format : {
		telephone: function (value) {
			var	valueLength = value.length,
				numOnly = value.replace(/\D/g, ''),
				i = 0;

			if (numOnly.length > 0) {

				for (i; i < valueLength; i++) {

					if (i === 2) {
						value = '(' + numOnly.substr(0,3) + ') ' + numOnly.substr(3);
					}

					if (i === 9) {
						value = value.slice(0, 9) + '-' + value.slice(9);
					}

				}
			}

			document.getElementById('telephone').value = value;
		},
		birthdate: function (value) {
			var	numOnly = value.replace(/\D/g, ''),
				numOnlyLength = numOnly.length;

			if (numOnlyLength === 2 || numOnlyLength === 4) {
				value += '/';
			}

			document.getElementById('birthdate').value = value;
		}
	},

	validate : {
		validKeyUpChar: function (value) {
			var pattern 

		},
		birthdate: function (value) {
			var pattern = /^(?:0[1-9]|1[0-2])\/(?:[1-9]|0[1-9]|1\d|2\d|3[0-1])\/(?:19\d\d|20[0-1][0-5])$/;
			return pattern.test(value);
		},

		email: function (value) {
			var pattern = /^(?!.*(\.)\1)(?:\w[\w\b!#$%&'*+\-\/=?^_`{|}~\.]{1,63})@(?:[\w\-]+)\.(?:[^\_\W]){2,}$/
			return pattern.test(value);
		},

		minLength: function () {
			var element = this,
				reqLength = this.dataset.chars || 1,
				value = this.value,
				valueLength = value.length;


			if (valueLength < reqLength) {
				regEx.status.error(element);
			}
		},

		telephone: function (value) {
			var value = value.replace(/\D/g, ''),
				pattern = /^\d{10}$/;

			return pattern.test(value);
		},

		zipcode: function (value) {
			var pattern = /^\d{5}$/;
			return pattern.test(value);
		}
	}
}

// old email: 			var pattern = /^(?=^.{1,64}$)(?!.*(\.)\1)(?:\w[\w\b!#$%&'*+\-\/=?^_`{|}~\.]*)@(?:[\w\-]*)\.(?:[^\_\W]){2,}$/;