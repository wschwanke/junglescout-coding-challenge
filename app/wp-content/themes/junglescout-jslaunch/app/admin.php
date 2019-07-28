<?php

namespace App;

/**
 * Theme customizer
 */
add_action('customize_register', function (\WP_Customize_Manager $wp_customize) {
    // Add postMessage support
    $wp_customize->get_setting('blogname')->transport = 'postMessage';
    $wp_customize->selective_refresh->add_partial('blogname', [
        'selector' => '.brand',
        'render_callback' => function () {
            bloginfo('name');
        }
    ]);

    $wp_customize->add_section( 'js_launch_settings' , [
        'title'    => __( 'Jungle Scout Launch Settings', 'junglescout_jslaunch' ),
        'priority' => 30
    ] );

    $wp_customize->add_setting( 'js_launch_hero_image' , [
        'transport' => 'refresh',
    ] );

    $wp_customize->add_control(
        new \WP_Customize_Image_Control(
            $wp_customize,
            'homepage_hero_image',
            [
                'label'      => __( 'Upload or select a hero image', 'junglescout_jslaunch' ),
                'section'    => 'js_launch_settings',
                'settings'   => 'js_launch_hero_image',
            ]
        )
    );
});

/**
 * Customizer JS
 */
add_action('customize_preview_init', function () {
    wp_enqueue_script('sage/customizer.js', asset_path('scripts/customizer.js'), ['customize-preview'], null, true);
});
