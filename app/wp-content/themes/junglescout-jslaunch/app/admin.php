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

    // Start the customizer settings for the hero image
    $wp_customize->add_section( 'js_launch_hero_image_section' , [
        'title'    => __( 'Jungle Scout Launch Hero Image', 'junglescout_jslaunch' ),
        'priority' => 30
    ] );

    $wp_customize->add_setting( 'js_launch_hero_image' , [
        'transport' => 'refresh',
    ] );

    $wp_customize->add_control(
        new \WP_Customize_Image_Control(
            $wp_customize,
            'js_launch_hero_image',
            [
                'label'      => __( 'JS Launch Hero Image', 'junglescout_jslaunch' ),
                'section'    => 'js_launch_hero_image_section',
                'settings'   => 'js_launch_hero_image',
            ]
        )
    );

    // Hero image heading
    $wp_customize->add_setting( 'js_launch_hero_heading' , [
        'default' => 'Launch your Amazon FBA business with the right data',
        'transport' => 'refresh',
    ] );

    $wp_customize->add_control(
        new \WP_Customize_Control(
            $wp_customize,
            'js_launch_hero_heading',
            [
                'label'          => __( 'JS Launch Hero Heading', 'junglescout_jslaunch' ),
                'section'        => 'js_launch_hero_image_section',
                'settings'       => 'js_launch_hero_heading',
                'type'           => 'textarea',
            ]
        )
    );

    // Hero heading subtext
    $wp_customize->add_setting( 'js_launch_hero_subtext' , [
        'default' => 'Jungle Scout is the only tool that Amazon FBA sellers trust for production research.',
        'transport' => 'refresh',
    ] );

    $wp_customize->add_control(
        new \WP_Customize_Control(
            $wp_customize,
            'js_launch_hero_subtext',
            [
                'label'          => __( 'JS Launch Hero Subtext', 'junglescout_jslaunch' ),
                'section'        => 'js_launch_hero_image_section',
                'settings'       => 'js_launch_hero_subtext',
                'type'           => 'textarea',
            ]
        )
    );

    // Review text
    $wp_customize->add_setting( 'js_launch_hero_review' , [
        'default' => '"Jungle Scout is the ONE tool I can not live without. There\'s ways to use it that simply blow you away once you realize the power of what they can do forr your business. A must-have tool for any Amazon seller!"',
        'transport' => 'refresh',
    ] );

    $wp_customize->add_control(
        new \WP_Customize_Control(
            $wp_customize,
            'js_launch_hero_review',
            [
                'label'          => __( 'JS Launch Hero Review', 'junglescout_jslaunch' ),
                'section'        => 'js_launch_hero_image_section',
                'settings'       => 'js_launch_hero_review',
                'type'           => 'textarea',
            ]
        )
    );

    // Review person image
    $wp_customize->add_setting( 'js_launch_hero_reviewer_image' , [
        'transport' => 'refresh',
    ] );

    $wp_customize->add_control(
        new \WP_Customize_Image_Control(
            $wp_customize,
            'js_launch_hero_reviewer_image',
            [
                'label'      => __( 'JS Launch Hero Reviewer Image', 'junglescout_jslaunch' ),
                'section'    => 'js_launch_hero_image_section',
                'settings'   => 'js_launch_hero_reviewer_image',
            ]
        )
    );

    // Review person name
    $wp_customize->add_setting( 'js_launch_hero_reviewer_name' , [
        'default' => 'Scott Volker',
        'transport' => 'refresh',
    ] );

    $wp_customize->add_control(
        new \WP_Customize_Control(
            $wp_customize,
            'js_launch_hero_reviewer_name',
            [
                'label'          => __( 'JS Launch Hero Review', 'junglescout_jslaunch' ),
                'section'        => 'js_launch_hero_image_section',
                'settings'       => 'js_launch_hero_reviewer_name',
                'type'           => 'text',
            ]
        )
    );

    // Review person name
    $wp_customize->add_setting( 'js_launch_hero_reviewer_title' , [
        'default' => 'The Amazing Seller',
        'transport' => 'refresh',
    ] );

    $wp_customize->add_control(
        new \WP_Customize_Control(
            $wp_customize,
            'js_launch_hero_reviewer_title',
            [
                'label'          => __( 'JS Launch Hero Review', 'junglescout_jslaunch' ),
                'section'        => 'js_launch_hero_image_section',
                'settings'       => 'js_launch_hero_reviewer_title',
                'type'           => 'text',
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
