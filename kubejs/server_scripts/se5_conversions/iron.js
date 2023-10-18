
ServerEvents.recipes(event => { 
    
    // Iron to gold

    event.shapeless(
      Item.of('minecraft:gold_ingot'),
      [ 
        'kubejs:transmutation_stone',
        '8x #forge:ingots/iron'
      ]
    ).keepIngredient('kubejs:transmutation_stone'),

    // Gold to iron

    event.shapeless(
        Item.of('minecraft:iron_ingot', 8),
        [ 
          'kubejs:transmutation_stone',
          '#forge:ingots/gold'
        ]
    ).keepIngredient('kubejs:transmutation_stone')

})