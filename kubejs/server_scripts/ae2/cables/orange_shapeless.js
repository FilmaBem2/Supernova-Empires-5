
ServerEvents.recipes(event => {

    // Covered

    event.shapeless(
        Item.of('ae2:orange_covered_cable'),
        [ 
          'ae2:orange_glass_cable',
          'minecraft:orange_wool'
        ]
    ),

    event.shapeless(
        Item.of('ae2:orange_covered_cable'),
        [ 
          '#forge:dyes/orange',
          '#ae2:covered_cable'
        ]
    ),

    // Covered Dense

    event.shapeless(
        Item.of('ae2:orange_covered_dense_cable'),
        [ 
          '#ae2:covered_dense_cable',
          '#forge:dyes/orange'
        ]
    ),

    // Glass

    event.shapeless(
        Item.of('ae2:orange_glass_cable'),
        [ 
          '#ae2:glass_cable',
          '#forge:dyes/orange'
        ]
    ),

    // Smart Cable

    event.shapeless(
        Item.of('ae2:orange_smart_cable'),
        [ 
          '#ae2:covered_cable',
          '#forge:dusts/redstone',
          '#forge:dusts/glowstone',
          '#forge:dyes/orange'
        ]
    ),

    event.shapeless(
        Item.of('ae2:orange_smart_cable'),
        [
            'ae2:fluix_glass_cable',
            '#forge:dusts/redstone',
            '#forge:dusts/glowstone',
            'minecraft:orange_wool'
        ]
    ),

    event.shapeless(
        Item.of('ae2:orange_smart_cable'),
        [ 
          '#ae2:smart_cable',
          '#forge:dyes/orange'
        ]
    )

    // Smart Dense

    event.shapeless(
        Item.of('ae2:orange_smart_dense_cable'),
        [ 
          '#ae2:smart_dense_cable',
          '#forge:dyes/orange'
        ]
    ),

    event.shapeless(
        Item.of('ae2:orange_smart_dense_cable'),
        [ 
          'ae2:orange_covered_dense_cable',
          '#forge:dusts/redstone',
          '#forge:dusts/glowstone'
        ]
    )



})