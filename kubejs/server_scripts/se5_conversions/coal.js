
ServerEvents.recipes(event => { 
    
    // Charcoal to coal

    event.shapeless(
      Item.of('minecraft:coal'),
      [ 
        'kubejs:transmutation_stone',
        '4x minecraft:charcoal'
      ]
    ),

    // Coal to Charcoal

    event.shapeless(
        Item.of('minecraft:charcoal', 4),
        [ 
          'kubejs:transmutation_stone',
          'minecraft:coal'
        ]
    )

})