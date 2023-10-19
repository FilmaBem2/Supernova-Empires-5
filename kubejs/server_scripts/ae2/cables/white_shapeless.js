
ServerEvents.recipes(event => {

    // Covered

    event.shapeless(
        Item.of('ae2:white_covered_cable'),
        [ 
          'ae2:white_glass_cable',
          'minecraft:white_wool'
        ]
    ),

    event.shapeless(
        Item.of('ae2:white_covered_cable'),
        [ 
          '#forge:dyes/white',
          '#ae2:covered_cable'
        ]
    ),

    // Covered Dense

    event.shapeless(
        Item.of('ae2:white_covered_dense_cable'),
        [ 
          '#ae2:covered_dense_cable',
          '#forge:dyes/white'
        ]
    ),

    // Glass

    event.shapeless(
        Item.of('ae2:white_glass_cable'),
        [ 
          '#ae2:glass_cable',
          '#forge:dyes/white'
        ]
    ),

    // Smart Cable

    event.shapeless(
        Item.of('ae2:white_smart_cable'),
        [ 
          '#ae2:covered_cable',
          '#forge:dusts/redstone',
          '#forge:dusts/glowstone',
          '#forge:dyes/white'
        ]
    ),

    event.shapeless(
        Item.of('ae2:white_smart_cable'),
        [
            'ae2:fluix_glass_cable',
            '#forge:dusts/redstone',
            '#forge:dusts/glowstone',
            'minecraft:white_wool'
        ]
    ),

    event.shapeless(
        Item.of('ae2:white_smart_cable'),
        [ 
          '#ae2:smart_cable',
          '#forge:dyes/white'
        ]
    )

    // Smart Dense

    event.shapeless(
        Item.of('ae2:white_smart_dense_cable'),
        [ 
          '#ae2:smart_dense_cable',
          '#forge:dyes/white'
        ]
    ),

    event.shapeless(
        Item.of('ae2:white_smart_dense_cable'),
        [ 
          'ae2:white_covered_dense_cable',
          '#forge:dusts/redstone',
          '#forge:dusts/glowstone'
        ]
    )



})