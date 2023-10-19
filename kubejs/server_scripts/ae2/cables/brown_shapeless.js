
ServerEvents.recipes(event => {

    // Covered

    event.shapeless(
        Item.of('ae2:brown_covered_cable'),
        [ 
          'ae2:brown_glass_cable',
          'minecraft:brown_wool'
        ]
    ),

    event.shapeless(
        Item.of('ae2:brown_covered_cable'),
        [ 
          '#forge:dyes/brown',
          '#ae2:covered_cable'
        ]
    ),

    // Covered Dense

    event.shapeless(
        Item.of('ae2:brown_covered_dense_cable'),
        [ 
          '#ae2:covered_dense_cable',
          '#forge:dyes/brown'
        ]
    ),

    // Glass

    event.shapeless(
        Item.of('ae2:brown_glass_cable'),
        [ 
          '#ae2:glass_cable',
          '#forge:dyes/brown'
        ]
    ),

    // Smart Cable

    event.shapeless(
        Item.of('ae2:brown_smart_cable'),
        [ 
          '#ae2:covered_cable',
          '#forge:dusts/redstone',
          '#forge:dusts/glowstone',
          '#forge:dyes/brown'
        ]
    ),

    event.shapeless(
        Item.of('ae2:brown_smart_cable'),
        [
            'ae2:fluix_glass_cable',
            '#forge:dusts/redstone',
            '#forge:dusts/glowstone',
            'minecraft:brown_wool'
        ]
    ),

    event.shapeless(
        Item.of('ae2:brown_smart_cable'),
        [ 
          '#ae2:smart_cable',
          '#forge:dyes/brown'
        ]
    )

    // Smart Dense

    event.shapeless(
        Item.of('ae2:brown_smart_dense_cable'),
        [ 
          '#ae2:smart_dense_cable',
          '#forge:dyes/brown'
        ]
    ),

    event.shapeless(
        Item.of('ae2:brown_smart_dense_cable'),
        [ 
          'ae2:brown_covered_dense_cable',
          '#forge:dusts/redstone',
          '#forge:dusts/glowstone'
        ]
    )



})