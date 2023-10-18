
ServerEvents.recipes(event => {

    // Covered Cable

    event.shaped(
        Item.of('ae2:blue_covered_cable', 8), 
        [ 
        'AAA', 
        'ABA',
        'AAA'  
        ],
        {
        A: '#ae2:covered_cable', 
        B: '#forge:dyes/blue'
        }
    ),

    // Covered dense

    event.shaped(
        Item.of('ae2:blue_covered_dense_cable', 8), 
        [ 
        'AAA', 
        'ABA',
        'AAA'  
        ],
        {
        A: '#ae2:covered_dense_cable', 
        B: '#forge:dyes/blue'
        }
    ),

    event.shaped(
        Item.of('ae2:blue_covered_dense_cable', 8), 
        [ 
        'AA', 
        'AB'
        ],
        {
        A: '#ae2:blue_covered_cable'
        }
    ),



    // Glass

    event.shaped(
        Item.of('ae2:blue_glass_cable', 8), 
        [ 
        'AAA', 
        'ABA',
        'AAA'  
        ],
        {
        A: '#ae2:glass_cable', 
        B: '#forge:dyes/blue'
        }
    ),

    // Smart

    event.shaped(
        Item.of('ae2:blue_smart_cable', 8), 
        [ 
        'AAA', 
        'ABA',
        'AAA'  
        ],
        {
        A: '#ae2:smart_cable', 
        B: '#forge:dyes/blue'
        }
    ),

    // Smart Dense

    event.shaped(
        Item.of('ae2:blue_smart_dense_cable', 8), 
        [ 
        'AAA', 
        'ABA',
        'AAA'  
        ],
        {
        A: '#ae2:smart_dense_cable', 
        B: '#forge:dyes/blue'
        }
    ),

    event.shaped(
        Item.of('ae2:blue_smart_dense_cable', 8), 
        [ 
        'AA', 
        'AB'
        ],
        {
        A: '#ae2:blue_smart_cable'
        }
    )

})