/**
 * BLOCK: product-showcase
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { InnerBlocks, InspectorControls } = wp.editor;
const { Fragment } = wp.element;
const {
	SelectControl,
	PanelBody,
	PanelRow,
} = wp.components;

const template = [
	[ 'js/block-easy-div', { className: 'row mb-6' }, [
		[ 'js/block-easy-div', { className: 'col-12 col-sm-6 wp-block-product-showcase__image' }, [
			[ 'core/image', {} ],
		] ],
		[ 'js/block-easy-div', { className: 'col-12 col-sm-6 wp-block-product-showcase__content' }, [
			[ 'core/paragraph', { fontSize: 'small', className: 'mb-0' } ],
			[ 'core/heading', { level: 3 } ],
			[ 'core/paragraph', {} ],
			[ 'core/list', {} ],
		] ],
	] ],
];

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
registerBlockType( 'js/block-product-showcase', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Product Showcase' ), // Block title.
	icon: 'analytics', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'showcase' ),
	],
	attributes: {
		imageSide: {
			type: 'string',
			default: 'left',
		}
	},

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
			attributes: {
				imageSide,
			},
		} = props;

		function onChangeImageSide( newImageSide ) {
			props.setAttributes( { imageSide: newImageSide } );
		}

		// Creates a <p class='wp-block-cgb-block-product-showcase'></p>.
		return (
			<Fragment>
				<InspectorControls>
					<PanelBody>
						<PanelRow>
							<SelectControl
								label={ __( 'Image side:' ) }
								value={ imageSide }
								onChange={ onChangeImageSide }
								options={ [
									{ value: 'left', label: 'Image left' },
									{ value: 'right', label: 'Image right' },
								] }
							/>
						</PanelRow>
					</PanelBody>
				</InspectorControls>
				<div className={ props.className }>
					<InnerBlocks
						renderAppender={ () => (
							<InnerBlocks.ButtonBlockAppender />
						) }
						templateLock={ 'insert' }
						template={ template }
					/>
				</div>
			</Fragment>
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
				imageSide,
			},
		} = props;

		return (
			<div className={ imageSide }>
				<InnerBlocks.Content />
			</div>
		);
	},
} );
