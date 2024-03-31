
ServerEvents.recipes(event => {

    // Covered Cable

    event.shaped(
        Item.of('ae2:green_covered_cable', 8), 
        [ 
        'AAA', 
        'ABA',
        'AAA'  
        ],
        {
        A: '#ae2:covered_cable', 
        B: '#forge:dyes/green'
        }
    ),

    // Covered dense

    event.shaped(
        Item.of('ae2:green_covered_dense_cable', 8), 
        [ 
        'AAA', 
        'ABA',
        'AAA'  
        ],
        {
        A: '#ae2:covered_dense_cable', 
        B: '#forge:dyes/green'
        }
    ),

    // Glass

    event.shaped(
        Item.of('ae2:green_glass_cable', 8), 
        [ 
        'AAA', 
        'ABA',
        'AAA'  
        ],
        {
        A: '#ae2:glass_cable', 
        B: '#forge:dyes/green'
        }
    ),

    // Smart

    event.shaped(
        Item.of('ae2:green_smart_cable', 8), 
        [ 
        'AAA', 
        'ABA',
        'AAA'  
        ],
        {
        A: '#ae2:smart_cable', 
        B: '#forge:dyes/green'
        }
    ),

    // Smart Dense

    event.shaped(
        Item.of('ae2:green_smart_dense_cable', 8), 
        [ 
        'AAA', 
        'ABA',
        'AAA'  
        ],
        {
        A: '#ae2:smart_dense_cable', 
        B: '#forge:dyes/green'
        }
    )
})