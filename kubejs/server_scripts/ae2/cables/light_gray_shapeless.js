
ServerEvents.recipes(event => {

    // Covered

    event.shapeless(
        Item.of('ae2:light_gray_covered_cable'),
        [ 
          'ae2:light_gray_glass_cable',
          'minecraft:light_gray_wool'
        ]
    ),

    event.shapeless(
        Item.of('ae2:light_gray_covered_cable'),
        [ 
          '#forge:dyes/light_gray',
          '#ae2:covered_cable'
        ]
    ),

    // Covered Dense

    event.shapeless(
        Item.of('ae2:light_gray_covered_dense_cable'),
        [ 
          '#ae2:covered_dense_cable',
          '#forge:dyes/light_gray'
        ]
    ),

    // Glass

    event.shapeless(
        Item.of('ae2:light_gray_glass_cable'),
        [ 
          '#ae2:glass_cable',
          '#forge:dyes/light_gray'
        ]
    ),

    // Smart Cable

    event.shapeless(
        Item.of('ae2:light_gray_smart_cable'),
        [ 
          '#ae2:covered_cable',
          '#forge:dusts/redstone',
          '#forge:dusts/glowstone',
          '#forge:dyes/light_gray'
        ]
    ),

    event.shapeless(
        Item.of('ae2:light_gray_smart_cable'),
        [
            'ae2:fluix_glass_cable',
            '#forge:dusts/redstone',
            '#forge:dusts/glowstone',
            'minecraft:light_gray_wool'
        ]
    ),

    event.shapeless(
        Item.of('ae2:light_gray_smart_cable'),
        [ 
          '#ae2:smart_cable',
          '#forge:dyes/light_gray'
        ]
    )

    // Smart Dense

    event.shapeless(
        Item.of('ae2:light_gray_smart_dense_cable'),
        [ 
          '#ae2:smart_dense_cable',
          '#forge:dyes/light_gray'
        ]
    ),

    event.shapeless(
        Item.of('ae2:light_gray_smart_dense_cable'),
        [ 
          'ae2:light_gray_covered_dense_cable',
          '#forge:dusts/redstone',
          '#forge:dusts/glowstone'
        ]
    )



})