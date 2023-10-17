
ServerEvents.recipes(event => { 
    
    // Transmutation Stone

    event.shaped(
        Item.of('kubejs:transmutation_stone'),
        [ 
          'ABA', 
          'BCB',
          'ABA'  
        ],
        {
          A: 'minecraft:glowstone_dust', 
          B: 'minecraft:redstone',
          C: 'minecraft:diamond'
        }
    ),

    event.shaped(
        Item.of('kubejs:transmutation_stone'),
        [ 
          'ABA', 
          'BCB',
          'ABA'  
        ],
        {
          A: 'minecraft:redstone', 
          B: 'minecraft:glowstone_dust',
          C: 'minecraft:diamond'
        }
    ),

    // Machine Casing

    event.shaped(
        Item.of('kubejs:machine_casing'),
        [ 
          'ABA', 
          'BCB',
          'ABA'  
        ],
        {
          A: '#forge:ingots/steel', 
          B: '#forge:ingots/osmium',
          C: '#forge:ingots/iron'
        }
    )

})