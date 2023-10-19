
ServerEvents.recipes(event => {

    // Covered

    event.shapeless(
        Item.of('ae2:yellow_covered_cable'),
        [ 
          'ae2:yellow_glass_cable',
          'minecraft:yellow_wool'
        ]
    ),

    event.shapeless(
        Item.of('ae2:yellow_covered_cable'),
        [ 
          '#forge:dyes/yellow',
          '#ae2:covered_cable'
        ]
    ),

    // Covered Dense

    event.shapeless(
        Item.of('ae2:yellow_covered_dense_cable'),
        [ 
          '#ae2:covered_dense_cable',
          '#forge:dyes/yellow'
        ]
    ),

    // Glass

    event.shapeless(
        Item.of('ae2:yellow_glass_cable'),
        [ 
          '#ae2:glass_cable',
          '#forge:dyes/yellow'
        ]
    ),

    // Smart Cable

    event.shapeless(
        Item.of('ae2:yellow_smart_cable'),
        [ 
          '#ae2:covered_cable',
          '#forge:dusts/redstone',
          '#forge:dusts/glowstone',
          '#forge:dyes/yellow'
        ]
    ),

    event.shapeless(
        Item.of('ae2:yellow_smart_cable'),
        [
            'ae2:fluix_glass_cable',
            '#forge:dusts/redstone',
            '#forge:dusts/glowstone',
            'minecraft:yellow_wool'
        ]
    ),

    event.shapeless(
        Item.of('ae2:yellow_smart_cable'),
        [ 
          '#ae2:smart_cable',
          '#forge:dyes/yellow'
        ]
    )

    // Smart Dense

    event.shapeless(
        Item.of('ae2:yellow_smart_dense_cable'),
        [ 
          '#ae2:smart_dense_cable',
          '#forge:dyes/yellow'
        ]
    ),

    event.shapeless(
        Item.of('ae2:yellow_smart_dense_cable'),
        [ 
          'ae2:yellow_covered_dense_cable',
          '#forge:dusts/redstone',
          '#forge:dusts/glowstone'
        ]
    )



})