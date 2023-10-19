
ServerEvents.recipes(event => {

    // Covered

    event.shapeless(
        Item.of('ae2:cyan_covered_cable'),
        [ 
          'ae2:cyan_glass_cable',
          'minecraft:cyan_wool'
        ]
    ),

    event.shapeless(
        Item.of('ae2:cyan_covered_cable'),
        [ 
          '#forge:dyes/cyan',
          '#ae2:covered_cable'
        ]
    ),

    // Covered Dense

    event.shapeless(
        Item.of('ae2:cyan_covered_dense_cable'),
        [ 
          '#ae2:covered_dense_cable',
          '#forge:dyes/cyan'
        ]
    ),

    // Glass

    event.shapeless(
        Item.of('ae2:cyan_glass_cable'),
        [ 
          '#ae2:glass_cable',
          '#forge:dyes/cyan'
        ]
    ),

    // Smart Cable

    event.shapeless(
        Item.of('ae2:cyan_smart_cable'),
        [ 
          '#ae2:covered_cable',
          '#forge:dusts/redstone',
          '#forge:dusts/glowstone',
          '#forge:dyes/cyan'
        ]
    ),

    event.shapeless(
        Item.of('ae2:cyan_smart_cable'),
        [
            'ae2:fluix_glass_cable',
            '#forge:dusts/redstone',
            '#forge:dusts/glowstone',
            'minecraft:cyan_wool'
        ]
    ),

    event.shapeless(
        Item.of('ae2:cyan_smart_cable'),
        [ 
          '#ae2:smart_cable',
          '#forge:dyes/cyan'
        ]
    )

    // Smart Dense

    event.shapeless(
        Item.of('ae2:cyan_smart_dense_cable'),
        [ 
          '#ae2:smart_dense_cable',
          '#forge:dyes/cyan'
        ]
    ),

    event.shapeless(
        Item.of('ae2:cyan_smart_dense_cable'),
        [ 
          'ae2:cyan_covered_dense_cable',
          '#forge:dusts/redstone',
          '#forge:dusts/glowstone'
        ]
    )



})