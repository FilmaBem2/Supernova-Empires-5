
ServerEvents.recipes(event => {

    // Covered

    event.shapeless(
        Item.of('ae2:pink_covered_cable'),
        [ 
          'ae2:pink_glass_cable',
          'minecraft:pink_wool'
        ]
    ),

    event.shapeless(
        Item.of('ae2:pink_covered_cable'),
        [ 
          '#forge:dyes/pink',
          '#ae2:covered_cable'
        ]
    ),

    // Covered Dense

    event.shapeless(
        Item.of('ae2:pink_covered_dense_cable'),
        [ 
          '#ae2:covered_dense_cable',
          '#forge:dyes/pink'
        ]
    ),

    // Glass

    event.shapeless(
        Item.of('ae2:pink_glass_cable'),
        [ 
          '#ae2:glass_cable',
          '#forge:dyes/pink'
        ]
    ),

    // Smart Cable

    event.shapeless(
        Item.of('ae2:pink_smart_cable'),
        [ 
          '#ae2:covered_cable',
          '#forge:dusts/redstone',
          '#forge:dusts/glowstone',
          '#forge:dyes/pink'
        ]
    ),

    event.shapeless(
        Item.of('ae2:pink_smart_cable'),
        [
            'ae2:fluix_glass_cable',
            '#forge:dusts/redstone',
            '#forge:dusts/glowstone',
            'minecraft:pink_wool'
        ]
    ),

    event.shapeless(
        Item.of('ae2:pink_smart_cable'),
        [ 
          '#ae2:smart_cable',
          '#forge:dyes/pink'
        ]
    )

    // Smart Dense

    event.shapeless(
        Item.of('ae2:pink_smart_dense_cable'),
        [ 
          '#ae2:smart_dense_cable',
          '#forge:dyes/pink'
        ]
    ),

    event.shapeless(
        Item.of('ae2:pink_smart_dense_cable'),
        [ 
          'ae2:pink_covered_dense_cable',
          '#forge:dusts/redstone',
          '#forge:dusts/glowstone'
        ]
    )



})