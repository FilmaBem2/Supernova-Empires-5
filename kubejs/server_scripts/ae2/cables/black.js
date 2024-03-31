
ServerEvents.recipes(event => {

    // Covered Cable

    event.shaped(
        Item.of('ae2:black_covered_cable', 8), 
        [ 
        'AAA', 
        'ABA',
        'AAA'  
        ],
        {
        A: '#ae2:covered_cable', 
        B: '#forge:dyes/black'
        }
    ),

    // Covered dense

    event.shaped(
        Item.of('ae2:black_covered_dense_cable', 8), 
        [ 
        'AAA', 
        'ABA',
        'AAA'  
        ],
        {
        A: '#ae2:covered_dense_cable', 
        B: '#forge:dyes/black'
        }
    ),

    // Glass

    event.shaped(
        Item.of('ae2:black_glass_cable', 8), 
        [ 
        'AAA', 
        'ABA',
        'AAA'  
        ],
        {
        A: '#ae2:glass_cable', 
        B: '#forge:dyes/black'
        }
    ),

    // Smart

    event.shaped(
        Item.of('ae2:black_smart_cable', 8), 
        [ 
        'AAA', 
        'ABA',
        'AAA'  
        ],
        {
        A: '#ae2:smart_cable', 
        B: '#forge:dyes/black'
        }
    ),

    // Smart Dense

    event.shaped(
        Item.of('ae2:black_smart_dense_cable', 8), 
        [ 
        'AAA', 
        'ABA',
        'AAA'  
        ],
        {
        A: '#ae2:smart_dense_cable', 
        B: '#forge:dyes/black'
        }
    )

})