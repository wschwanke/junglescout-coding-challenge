/**
 * BLOCK: easy-div
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { InnerBlocks } = wp.editor;

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'js/block-easy-div', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Easy Div' ), // Block title.
	icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'layout', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'div' ),
		__( 'block' ),
		__( 'layout' ),
	],

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 * @param {Object} props the component props
	 * @returns {JSX} Returns the JSX markup
	 */
	edit: function( props ) {
		const {
			attributes,
			className,
		} = props;

		let renderClassList = function() {
			return ( <li></li> );
		};

		if ( typeof attributes !== 'undefined' && attributes.className ) {
			// Find all of the classes we want to apply to the div
			const classes = attributes.className.split( / /g );

			renderClassList = function() {
				return classes.map( function( cssClass, index ) {
					return ( <li key={ `${ cssClass }--${ index }` }>{ cssClass }</li> );
				} );
			};
		}

		return (
			<div className={ className }>
				{ /* this is just flare and makes the block easier to click on */ }
				<ul className="easy-div-classes">
					<li><span><small>Easy Div&apos;s Classes:</small></span></li>
					{ renderClassList() }
				</ul>
				<InnerBlocks
					renderAppender={ () => (
						<InnerBlocks.ButtonBlockAppender />
					) }
				/>
			</div>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 * @param {Object} props the component props
	 * @returns {JSX} Returns the JSX markup
	 */
	save: function( props ) {
		const {
			attributes: {
				className,
			},
		} = props;

		return (
			<div className={ typeof className !== 'undefined' ? className : '' }>
				<InnerBlocks.Content />
			</div>
		);
	},
} );
