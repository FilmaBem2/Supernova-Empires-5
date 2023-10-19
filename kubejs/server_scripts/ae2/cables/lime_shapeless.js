
ServerEvents.recipes(event => {

    // Covered

    event.shapeless(
        Item.of('ae2:lime_covered_cable'),
        [ 
          'ae2:lime_glass_cable',
          'minecraft:lime_wool'
        ]
    ),

    event.shapeless(
        Item.of('ae2:lime_covered_cable'),
        [ 
          '#forge:dyes/lime',
          '#ae2:covered_cable'
        ]
    ),

    // Covered Dense

    event.shapeless(
        Item.of('ae2:lime_covered_dense_cable'),
        [ 
          '#ae2:covered_dense_cable',
          '#forge:dyes/lime'
        ]
    ),

    // Glass

    event.shapeless(
        Item.of('ae2:lime_glass_cable'),
        [ 
          '#ae2:glass_cable',
          '#forge:dyes/lime'
        ]
    ),

    // Smart Cable

    event.shapeless(
        Item.of('ae2:lime_smart_cable'),
        [ 
          '#ae2:covered_cable',
          '#forge:dusts/redstone',
          '#forge:dusts/glowstone',
          '#forge:dyes/lime'
        ]
    ),

    event.shapeless(
        Item.of('ae2:lime_smart_cable'),
        [
            'ae2:fluix_glass_cable',
            '#forge:dusts/redstone',
            '#forge:dusts/glowstone',
            'minecraft:lime_wool'
        ]
    ),

    event.shapeless(
        Item.of('ae2:lime_smart_cable'),
        [ 
          '#ae2:smart_cable',
          '#forge:dyes/lime'
        ]
    )

    // Smart Dense

    event.shapeless(
        Item.of('ae2:lime_smart_dense_cable'),
        [ 
          '#ae2:smart_dense_cable',
          '#forge:dyes/lime'
        ]
    ),

    event.shapeless(
        Item.of('ae2:lime_smart_dense_cable'),
        [ 
          'ae2:lime_covered_dense_cable',
          '#forge:dusts/redstone',
          '#forge:dusts/glowstone'
        ]
    )



})