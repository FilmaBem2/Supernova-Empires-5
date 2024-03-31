
ServerEvents.recipes(event => {

    // Covered Cable

    event.shaped(
        Item.of('ae2:orange_covered_cable', 8), 
        [ 
        'AAA', 
        'ABA',
        'AAA'  
        ],
        {
        A: '#ae2:covered_cable', 
        B: '#forge:dyes/orange'
        }
    ),

    // Covered dense

    event.shaped(
        Item.of('ae2:orange_covered_dense_cable', 8), 
        [ 
        'AAA', 
        'ABA',
        'AAA'  
        ],
        {
        A: '#ae2:covered_dense_cable', 
        B: '#forge:dyes/orange'
        }
    ),

    // Glass

    event.shaped(
        Item.of('ae2:orange_glass_cable', 8), 
        [ 
        'AAA', 
        'ABA',
        'AAA'  
        ],
        {
        A: '#ae2:glass_cable', 
        B: '#forge:dyes/orange'
        }
    ),

    // Smart

    event.shaped(
        Item.of('ae2:orange_smart_cable', 8), 
        [ 
        'AAA', 
        'ABA',
        'AAA'  
        ],
        {
        A: '#ae2:smart_cable', 
        B: '#forge:dyes/orange'
        }
    ),

    // Smart Dense

    event.shaped(
        Item.of('ae2:orange_smart_dense_cable', 8), 
        [ 
        'AAA', 
        'ABA',
        'AAA'  
        ],
        {
        A: '#ae2:smart_dense_cable', 
        B: '#forge:dyes/orange'
        }
    )
})