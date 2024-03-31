
ServerEvents.recipes(event => { 
    
    // Ender Pearl

    event.shapeless(
      Item.of('minecraft:ender_pearl'),
      [ 
        'kubejs:transmutation_stone',
        '4x #forge:ingots/iron'
      ]
  ).keepIngredient('kubejs:transmutation_stone')

})