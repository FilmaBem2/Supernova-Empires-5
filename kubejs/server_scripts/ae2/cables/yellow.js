
ServerEvents.recipes(event => {

    // Covered Cable

    event.shaped(
        Item.of('ae2:yellow_covered_cable', 8), 
        [ 
        'AAA', 
        'ABA',
        'AAA'  
        ],
        {
        A: '#ae2:covered_cable', 
        B: '#forge:dyes/yellow'
        }
    ),

    // Covered dense

    event.shaped(
        Item.of('ae2:yellow_covered_dense_cable', 8), 
        [ 
        'AAA', 
        'ABA',
        'AAA'  
        ],
        {
        A: '#ae2:covered_dense_cable', 
        B: '#forge:dyes/yellow'
        }
    )

    // Glass

    event.shaped(
        Item.of('ae2:yellow_glass_cable', 8), 
        [ 
        'AAA', 
        'ABA',
        'AAA'  
        ],
        {
        A: '#ae2:glass_cable', 
        B: '#forge:dyes/yellow'
        }
    ),

    // Smart

    event.shaped(
        Item.of('ae2:yellow_smart_cable', 8), 
        [ 
        'AAA', 
        'ABA',
        'AAA'  
        ],
        {
        A: '#ae2:smart_cable', 
        B: '#forge:dyes/yellow'
        }
    ),

    // Smart Dense

    event.shaped(
        Item.of('ae2:yellow_smart_dense_cable', 8), 
        [ 
        'AAA', 
        'ABA',
        'AAA'  
        ],
        {
        A: '#ae2:smart_dense_cable', 
        B: '#forge:dyes/yellow'
        }
    )
})