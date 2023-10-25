
ServerEvents.recipes(event => {

    // Covered Cable

    event.shaped(
        Item.of('ae2:lime_covered_cable', 8), 
        [ 
        'AAA', 
        'ABA',
        'AAA'  
        ],
        {
        A: '#ae2:covered_cable', 
        B: '#forge:dyes/lime'
        }
    ),

    // Covered dense

    event.shaped(
        Item.of('ae2:lime_covered_dense_cable', 8), 
        [ 
        'AAA', 
        'ABA',
        'AAA'  
        ],
        {
        A: '#ae2:covered_dense_cable', 
        B: '#forge:dyes/lime'
        }
    ),

    // Glass

    event.shaped(
        Item.of('ae2:lime_glass_cable', 8), 
        [ 
        'AAA', 
        'ABA',
        'AAA'  
        ],
        {
        A: '#ae2:glass_cable', 
        B: '#forge:dyes/lime'
        }
    ),

    // Smart

    event.shaped(
        Item.of('ae2:lime_smart_cable', 8), 
        [ 
        'AAA', 
        'ABA',
        'AAA'  
        ],
        {
        A: '#ae2:smart_cable', 
        B: '#forge:dyes/lime'
        }
    ),

    // Smart Dense

    event.shaped(
        Item.of('ae2:lime_smart_dense_cable', 8), 
        [ 
        'AAA', 
        'ABA',
        'AAA'  
        ],
        {
        A: '#ae2:smart_dense_cable', 
        B: '#forge:dyes/lime'
        }
    )
})