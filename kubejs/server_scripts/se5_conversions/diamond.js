
ServerEvents.recipes(event => { 
    
    // Diamond to Emerald

    event.shapeless(
      Item.of('minecraft:emerald'),
      [ 
        'kubejs:transmutation_stone',
        '2x #forge:gems/diamond'
      ]
    ).keepIngredient('kubejs:transmutation_stone'),

    // Emerald to Diamond

    event.shapeless(
        Item.of('minecraft:diamond', 2),
        [ 
          'kubejs:transmutation_stone',
          '#forge:gems/emerald'
        ]
    ).keepIngredient('kubejs:transmutation_stone')

})