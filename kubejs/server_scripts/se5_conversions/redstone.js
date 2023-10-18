
ServerEvents.recipes(event => { 
    
    // Redstone to lapis

    event.shapeless(
      Item.of('minecraft:lapis_lazuli', 8),
      [ 
        'kubejs:transmutation_stone',
        '#forge:dusts/redstone'
      ]
    ).keepIngredient('kubejs:transmutation_stone'),

    // Lapis to Redstone

    event.shapeless(
        Item.of('minecraft:redstone'),
        [ 
          'kubejs:transmutation_stone',
          '8x #forge:gems/lapis'
        ]
    ).keepIngredient('kubejs:transmutation_stone')

})