/**
 * The Table Widget class
 *
 * @constructor
 *
 * @author   Jelle De Loecker <jelle@elevenways.be>
 * @since    0.1.0
 * @version  0.1.0
 *
 * @param    {Object}   data
 */
const AlchemyTable = Function.inherits('Alchemy.Widget', 'AlchemyTable');

/**
 * Populate the widget
 *
 * @author   Jelle De Loecker   <jelle@elevenways.be>
 * @since    0.1.0
 * @version  0.1.0
 */
AlchemyTable.setMethod(function populateWidget() {

	let table = this.createElement('alchemy-table'),
	    config = this.config;

	if (config.id) {
		table.id = config.id;
	}

	// Always enable the actions?
	table.has_actions = true;

	if (config.fieldset) {
		table.fieldset = config.fieldset;
	}

	if (config.page_size) {
		table.page_size = config.page_size;
	}

	if (config.recordsource) {
		table.recordsource = config.recordsource;
	}

	this.element.append(table);
});
