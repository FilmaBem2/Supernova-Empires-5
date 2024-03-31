
ServerEvents.recipes(event => {

    // Covered

    event.shapeless(
        Item.of('ae2:purple_covered_cable'),
        [ 
          'ae2:purple_glass_cable',
          'minecraft:purple_wool'
        ]
    ),

    event.shapeless(
        Item.of('ae2:purple_covered_cable'),
        [ 
          '#forge:dyes/purple',
          '#ae2:covered_cable'
        ]
    ),

    // Covered Dense

    event.shapeless(
        Item.of('ae2:purple_covered_dense_cable'),
        [ 
          '#ae2:covered_dense_cable',
          '#forge:dyes/purple'
        ]
    ),

    // Glass

    event.shapeless(
        Item.of('ae2:purple_glass_cable'),
        [ 
          '#ae2:glass_cable',
          '#forge:dyes/purple'
        ]
    ),

    // Smart Cable

    event.shapeless(
        Item.of('ae2:purple_smart_cable'),
        [ 
          '#ae2:covered_cable',
          '#forge:dusts/redstone',
          '#forge:dusts/glowstone',
          '#forge:dyes/purple'
        ]
    ),

    event.shapeless(
        Item.of('ae2:purple_smart_cable'),
        [
            'ae2:fluix_glass_cable',
            '#forge:dusts/redstone',
            '#forge:dusts/glowstone',
            'minecraft:purple_wool'
        ]
    ),

    event.shapeless(
        Item.of('ae2:purple_smart_cable'),
        [ 
          '#ae2:smart_cable',
          '#forge:dyes/purple'
        ]
    )

    // Smart Dense

    event.shapeless(
        Item.of('ae2:purple_smart_dense_cable'),
        [ 
          '#ae2:smart_dense_cable',
          '#forge:dyes/purple'
        ]
    ),

    event.shapeless(
        Item.of('ae2:purple_smart_dense_cable'),
        [ 
          'ae2:purple_covered_dense_cable',
          '#forge:dusts/redstone',
          '#forge:dusts/glowstone'
        ]
    )



})