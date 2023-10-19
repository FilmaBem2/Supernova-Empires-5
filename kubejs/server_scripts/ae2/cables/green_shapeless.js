
ServerEvents.recipes(event => {

    // Covered

    event.shapeless(
        Item.of('ae2:green_covered_cable'),
        [ 
          'ae2:green_glass_cable',
          'minecraft:green_wool'
        ]
    ),

    event.shapeless(
        Item.of('ae2:green_covered_cable'),
        [ 
          '#forge:dyes/green',
          '#ae2:covered_cable'
        ]
    ),

    // Covered Dense

    event.shapeless(
        Item.of('ae2:green_covered_dense_cable'),
        [ 
          '#ae2:covered_dense_cable',
          '#forge:dyes/green'
        ]
    ),

    // Glass

    event.shapeless(
        Item.of('ae2:green_glass_cable'),
        [ 
          '#ae2:glass_cable',
          '#forge:dyes/green'
        ]
    ),

    // Smart Cable

    event.shapeless(
        Item.of('ae2:green_smart_cable'),
        [ 
          '#ae2:covered_cable',
          '#forge:dusts/redstone',
          '#forge:dusts/glowstone',
          '#forge:dyes/green'
        ]
    ),

    event.shapeless(
        Item.of('ae2:green_smart_cable'),
        [
            'ae2:fluix_glass_cable',
            '#forge:dusts/redstone',
            '#forge:dusts/glowstone',
            'minecraft:green_wool'
        ]
    ),

    event.shapeless(
        Item.of('ae2:green_smart_cable'),
        [ 
          '#ae2:smart_cable',
          '#forge:dyes/green'
        ]
    )

    // Smart Dense

    event.shapeless(
        Item.of('ae2:green_smart_dense_cable'),
        [ 
          '#ae2:smart_dense_cable',
          '#forge:dyes/green'
        ]
    ),

    event.shapeless(
        Item.of('ae2:green_smart_dense_cable'),
        [ 
          'ae2:green_covered_dense_cable',
          '#forge:dusts/redstone',
          '#forge:dusts/glowstone'
        ]
    )



})