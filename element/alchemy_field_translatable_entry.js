/**
 * The alchemy-field-translatable-entry element
 *
 * @author   Jelle De Loecker   <jelle@elevenways.be>
 * @since    0.1.0
 * @version  0.1.0
 */
var FieldTranslatableEntry = Function.inherits('Alchemy.Element.Form.FieldEntry', function FieldTranslatableEntry() {
	FieldTranslatableEntry.super.call(this);
});

/**
 * The template to use for the content of this element
 *
 * @author   Jelle De Loecker   <jelle@elevenways.be>
 * @since    0.1.0
 * @version  0.1.0
 */
FieldTranslatableEntry.setTemplateFile('form/elements/alchemy_field_translatable_entry');

/**
 * The prefix of this translation
 *
 * @author   Jelle De Loecker   <jelle@elevenways.be>
 * @since    0.1.0
 * @version  0.1.0
 */
FieldTranslatableEntry.setAttribute('prefix');

/**
 * Get the original value
 *
 * @author   Jelle De Loecker   <jelle@elevenways.be>
 * @since    0.1.0
 * @version  0.1.0
 */
FieldTranslatableEntry.setProperty(function original_value() {

	let context_value = this.field_context.original_value;

	if (context_value) {
		return context_value[this.prefix];
	}
});
