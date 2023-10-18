
ServerEvents.recipes(event => {

    // Covered

    event.shapeless(
        Item.of('ae2:black_covered_cable'),
        [ 
          'ae2:black_glass_cable',
          'minecraft:black_wool'
        ]
    ),

    event.shapeless(
        Item.of('ae2:black_covered_cable'),
        [ 
          '#forge:dyes/black',
          '#ae2:covered_cable'
        ]
    ),

    // Covered Dense

    event.shapeless(
        Item.of('ae2:black_covered_dense_cable'),
        [ 
          '#ae2:covered_dense_cable',
          '#forge:dyes/black'
        ]
    ),

    // Glass

    event.shapeless(
        Item.of('ae2:black_glass_cable'),
        [ 
          '#ae2:glass_cable',
          '#forge:dyes/black'
        ]
    ),

    // Smart Cable

    event.shapeless(
        Item.of('ae2:black_smart_cable'),
        [ 
          '#ae2:covered_cable',
          '#forge:dusts/redstone',
          '#forge:dusts/glowstone',
          '#forge:dyes/black'
        ]
    ),

    event.shapeless(
        Item.of('ae2:black_smart_cable'),
        [
            'ae2:fluix_glass_cable',
            '#forge:dusts/redstone',
            '#forge:dusts/glowstone',
            'minecraft:black_wool'
        ]
    ),

    event.shapeless(
        Item.of('ae2:black_smart_cable'),
        [ 
          '#ae2:smart_cable',
          '#forge:dyes/black'
        ]
    )

    // Smart Dense

    event.shapeless(
        Item.of('ae2:black_smart_dense_cable'),
        [ 
          '#ae2:smart_dense_cable',
          '#forge:dyes/black'
        ]
    ),

    event.shapeless(
        Item.of('ae2:black_smart_dense_cable'),
        [ 
          'ae2:black_covered_dense_cable',
          '#forge:dusts/redstone',
          '#forge:dusts/glowstone'
        ]
    )



})