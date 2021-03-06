/**
 * The alchemy-label custom element
 *
 * @author   Jelle De Loecker   <jelle@elevenways.be>
 * @since    0.1.0
 * @version  0.1.0
 */
const AlchemyLabel = Function.inherits('Alchemy.Element.Form.Base', 'Label');

/**
 * The stylesheet to load for this element
 *
 * @author   Jelle De Loecker <jelle@develry.be>
 * @since    0.1.0
 * @version  0.1.0
 */
AlchemyLabel.setStylesheetFile('form/alchemy_form');

/**
 * The linked element
 *
 * @author   Jelle De Loecker <jelle@elevenways.be>
 * @since    0.1.0
 * @version  0.1.0
 */
AlchemyLabel.setAttribute('for');

/**
 * Added to the dom
 *
 * @author   Jelle De Loecker <jelle@elevenways.be>
 * @since    0.1.0
 * @version  0.1.0
 */
AlchemyLabel.setMethod(function introduced() {

	this.addEventListener('click', e => {

		if (!this.for) {
			return;
		}

		let element = document.getElementById(this.for);

		if (!element) {
			return;
		}

		element.click();

	});

});