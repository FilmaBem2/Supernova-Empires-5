
ServerEvents.recipes(event => {

    // Covered Cable

    event.shaped(
        Item.of('ae2:white_covered_cable', 8), 
        [ 
        'AAA', 
        'ABA',
        'AAA'  
        ],
        {
        A: '#ae2:covered_cable', 
        B: '#forge:dyes/white'
        }
    ),

    // Covered dense

    event.shaped(
        Item.of('ae2:white_covered_dense_cable', 8), 
        [ 
        'AAA', 
        'ABA',
        'AAA'  
        ],
        {
        A: '#ae2:covered_dense_cable', 
        B: '#forge:dyes/white'
        }
    ),

    // Glass

    event.shaped(
        Item.of('ae2:white_glass_cable', 8), 
        [ 
        'AAA', 
        'ABA',
        'AAA'  
        ],
        {
        A: '#ae2:glass_cable', 
        B: '#forge:dyes/white'
        }
    ),

    // Smart

    event.shaped(
        Item.of('ae2:white_smart_cable', 8), 
        [ 
        'AAA', 
        'ABA',
        'AAA'  
        ],
        {
        A: '#ae2:smart_cable', 
        B: '#forge:dyes/white'
        }
    ),

    // Smart Dense

    event.shaped(
        Item.of('ae2:white_smart_dense_cable', 8), 
        [ 
        'AAA', 
        'ABA',
        'AAA'  
        ],
        {
        A: '#ae2:smart_dense_cable', 
        B: '#forge:dyes/white'
        }
    )
})