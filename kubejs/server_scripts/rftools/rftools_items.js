
ServerEvents.recipes(event => { 
    
    // Machine Frame

    event.shaped(
        Item.of('rftoolsbase:machine_frame'),
        [ 
          'BAB', 
          'ACA',
          'BAB'  
        ],
        {
          A: '#forge:dyes/blue', 
          B: '#forge:ingots/steel',
          C: 'kubejs:machine_casing'
        }
    )

})