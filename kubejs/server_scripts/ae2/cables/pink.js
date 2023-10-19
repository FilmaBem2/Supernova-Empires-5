
ServerEvents.recipes(event => {

    // Covered Cable

    event.shaped(
        Item.of('ae2:pink_covered_cable', 8), 
        [ 
        'AAA', 
        'ABA',
        'AAA'  
        ],
        {
        A: '#ae2:covered_cable', 
        B: '#forge:dyes/pink'
        }
    ),

    // Covered dense

    event.shaped(
        Item.of('ae2:pink_covered_dense_cable', 8), 
        [ 
        'AAA', 
        'ABA',
        'AAA'  
        ],
        {
        A: '#ae2:covered_dense_cable', 
        B: '#forge:dyes/pink'
        }
    ),

    event.shaped(
        Item.of('ae2:pink_covered_dense_cable', 8), 
        [ 
        'AA', 
        'AB'
        ],
        {
        A: '#ae2:pink_covered_cable'
        }
    ),



    // Glass

    event.shaped(
        Item.of('ae2:pink_glass_cable', 8), 
        [ 
        'AAA', 
        'ABA',
        'AAA'  
        ],
        {
        A: '#ae2:glass_cable', 
        B: '#forge:dyes/pink'
        }
    ),

    // Smart

    event.shaped(
        Item.of('ae2:pink_smart_cable', 8), 
        [ 
        'AAA', 
        'ABA',
        'AAA'  
        ],
        {
        A: '#ae2:smart_cable', 
        B: '#forge:dyes/pink'
        }
    ),

    // Smart Dense

    event.shaped(
        Item.of('ae2:pink_smart_dense_cable', 8), 
        [ 
        'AAA', 
        'ABA',
        'AAA'  
        ],
        {
        A: '#ae2:smart_dense_cable', 
        B: '#forge:dyes/pink'
        }
    ),

    event.shaped(
        Item.of('ae2:pink_smart_dense_cable', 8), 
        [ 
        'AA', 
        'AB'
        ],
        {
        A: '#ae2:pink_smart_cable'
        }
    )

})