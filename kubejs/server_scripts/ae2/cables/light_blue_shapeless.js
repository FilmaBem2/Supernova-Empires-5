
ServerEvents.recipes(event => {

    // Covered

    event.shapeless(
        Item.of('ae2:light_blue_covered_cable'),
        [ 
          'ae2:light_blue_glass_cable',
          'minecraft:light_blue_wool'
        ]
    ),

    event.shapeless(
        Item.of('ae2:light_blue_covered_cable'),
        [ 
          '#forge:dyes/light_blue',
          '#ae2:covered_cable'
        ]
    ),

    // Covered Dense

    event.shapeless(
        Item.of('ae2:light_blue_covered_dense_cable'),
        [ 
          '#ae2:covered_dense_cable',
          '#forge:dyes/light_blue'
        ]
    ),

    // Glass

    event.shapeless(
        Item.of('ae2:light_blue_glass_cable'),
        [ 
          '#ae2:glass_cable',
          '#forge:dyes/light_blue'
        ]
    ),

    // Smart Cable

    event.shapeless(
        Item.of('ae2:light_blue_smart_cable'),
        [ 
          '#ae2:covered_cable',
          '#forge:dusts/redstone',
          '#forge:dusts/glowstone',
          '#forge:dyes/light_blue'
        ]
    ),

    event.shapeless(
        Item.of('ae2:light_blue_smart_cable'),
        [
            'ae2:fluix_glass_cable',
            '#forge:dusts/redstone',
            '#forge:dusts/glowstone',
            'minecraft:light_blue_wool'
        ]
    ),

    event.shapeless(
        Item.of('ae2:light_blue_smart_cable'),
        [ 
          '#ae2:smart_cable',
          '#forge:dyes/light_blue'
        ]
    )

    // Smart Dense

    event.shapeless(
        Item.of('ae2:light_blue_smart_dense_cable'),
        [ 
          '#ae2:smart_dense_cable',
          '#forge:dyes/light_blue'
        ]
    ),

    event.shapeless(
        Item.of('ae2:light_blue_smart_dense_cable'),
        [ 
          'ae2:light_blue_covered_dense_cable',
          '#forge:dusts/redstone',
          '#forge:dusts/glowstone'
        ]
    )



})