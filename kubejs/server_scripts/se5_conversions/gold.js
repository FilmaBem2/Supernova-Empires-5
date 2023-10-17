
ServerEvents.recipes(event => { 
    
    // Gold to Diamond

    event.shapeless(
      Item.of('minecraft:diamond'),
      [ 
        'kubejs:transmutation_stone',
        '4x #forge:ingots/gold'
      ]
    ),

    // Diamond to Gold

    event.shapeless(
        Item.of('minecraft:gold_ingot', 8),
        [ 
          'kubejs:transmutation_stone',
          '#forge:gems/diamond'
        ]
    )

})