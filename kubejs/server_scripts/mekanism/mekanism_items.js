
ServerEvents.recipes(event => { 
    
    // Steel Casing

    event.shaped(
        Item.of('mekanism:steel_casing'),
        [ 
          'BAB', 
          'ACA',
          'BAB'  
        ],
        {
          A: '#forge:glass', 
          B: '#forge:ingots/steel',
          C: 'kubejs:machine_casing'
        }
    )

})