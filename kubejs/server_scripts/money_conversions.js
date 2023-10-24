
ServerEvents.recipes(event => { 

    // 1$

    event.shapeless(
        Item.of('kubejs:one_dollar', 5),
        [ 
          'kubejs:five_dollar'
        ]
    ),

    // 5$

    event.shapeless(
        Item.of('kubejs:five_dollar'),
        [ 
          '5x kubejs:one_dollar'
        ]
    ),

    event.shapeless(
        Item.of('kubejs:five_dollar', 2),
        [ 
          'kubejs:ten_dollar'
        ]
    ),

    // 10$

    event.shapeless(
        Item.of('kubejs:ten_dollar'),
        [ 
          '2x kubejs:five_dollar'
        ]
    ),

    event.shapeless(
        Item.of('kubejs:ten_dollar', 2),
        [ 
          'kubejs:twenty_dollar'
        ]
    ),

    // 20$

    event.shapeless(
        Item.of('kubejs:twenty_dollar'),
        [ 
          '4x kubejs:five_dollar'
        ]
    ),

    event.shapeless(
        Item.of('kubejs:twenty_dollar'),
        [ 
          '2x kubejs:ten_dollar'
        ]
    ),

    event.shapeless(
        Item.of('kubejs:twenty_dollar', 4),
        [ 
          'kubejs:one_hundred_dollar'
        ]
    ),

    // 50$

    event.shapeless(
        Item.of('kubejs:fifty_dollar'),
        [ 
          '5x kubejs:ten_dollar'
        ]
    ),

    event.shapeless(
        Item.of('kubejs:fifty_dollar'),
        [ 
          '2x kubejs:twenty_dollar',
          'kubejs:ten_dollar'
        ]
    ),

    event.shapeless(
        Item.of('kubejs:fifty_dollar', 2),
        [ 
          'kubejs:one_hundred_dollar'
        ]
    ),

    event.shapeless(
        Item.of('kubejs:fifty_dollar', 10),
        [ 
          'kubejs:five_hundred_dollar'
        ]
    ),

    // 100$

    event.shapeless(
        Item.of('kubejs:one_hundred_dollar'),
        [ 
          '2x kubejs:fifty_dollar'
        ]
    ),

    event.shapeless(
        Item.of('kubejs:one_hundred_dollar'),
        [ 
          '4x kubejs:twenty_dollar'
        ]
    ),

    event.shapeless(
        Item.of('kubejs:one_hundred_dollar', 5),
        [ 
          'kubejs:five_hundred_dollar'
        ]
    ),

    // 500$

    event.shapeless(
        Item.of('kubejs:five_hundred_dollar'),
        [ 
          '5x kubejs:one_hundred_dollar'
        ]
    ),

    event.shapeless(
        Item.of('kubejs:five_hundred_dollar', 2),
        [ 
          'kubejs:one_thousand_dollar'
        ]
    ),

    event.shapeless(
        Item.of('kubejs:five_hundred_dollar'),
        [ 
            '3x kubejs:one_hundred_dollar',
            '4x kubejs:fifty_dollar'
        ]
    ),

    event.shapeless(
        Item.of('kubejs:five_hundred_dollar'),
        [ 
            '4x kubejs:one_hundred_dollar',
            '2x kubejs:fifty_dollar'
        ]
    )

    // 1000$

    event.shapeless(
        Item.of('kubejs:one_thousand_dollar'),
        [ 
          '2x kubejs:five_hundred_dollar'
        ]
    ),

    event.shapeless(
        Item.of('kubejs:one_thousand_dollar', 2),
        [ 
          'kubejs:five_thousand_dollar'
        ]
    ),

    event.shapeless(
        Item.of('kubejs:one_thousand_dollar', 1),
        [ 
          'kubejs:five_hundred_dollar',
          '5x kubejs:one_hundred_dollar'
        ]
    ),

    // 5000$

    event.shapeless(
        Item.of('kubejs:five_thousand_dollar'),
        [ 
          '5x kubejs:one_thousand_dollar'
        ]
    ),

    event.shapeless(
        Item.of('kubejs:five_thousand_dollar', 2),
        [ 
          'kubejs:ten_thousand_dollar'
        ]
    ),

    // 10000$

    event.shapeless(
        Item.of('kubejs:ten_thousand_dollar'),
        [ 
          '2x kubejs:five_thousand_dollar'
        ]
    )

})