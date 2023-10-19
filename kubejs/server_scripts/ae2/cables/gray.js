
ServerEvents.recipes(event => {

    // Covered Cable

    event.shaped(
        Item.of('ae2:gray_covered_cable', 8), 
        [ 
        'AAA', 
        'ABA',
        'AAA'  
        ],
        {
        A: '#ae2:covered_cable', 
        B: '#forge:dyes/gray'
        }
    ),

    // Covered dense

    event.shaped(
        Item.of('ae2:gray_covered_dense_cable', 8), 
        [ 
        'AAA', 
        'ABA',
        'AAA'  
        ],
        {
        A: '#ae2:covered_dense_cable', 
        B: '#forge:dyes/gray'
        }
    ),

    event.shaped(
        Item.of('ae2:gray_covered_dense_cable', 8), 
        [ 
        'AA', 
        'AB'
        ],
        {
        A: '#ae2:gray_covered_cable'
        }
    ),



    // Glass

    event.shaped(
        Item.of('ae2:gray_glass_cable', 8), 
        [ 
        'AAA', 
        'ABA',
        'AAA'  
        ],
        {
        A: '#ae2:glass_cable', 
        B: '#forge:dyes/gray'
        }
    ),

    // Smart

    event.shaped(
        Item.of('ae2:gray_smart_cable', 8), 
        [ 
        'AAA', 
        'ABA',
        'AAA'  
        ],
        {
        A: '#ae2:smart_cable', 
        B: '#forge:dyes/gray'
        }
    ),

    // Smart Dense

    event.shaped(
        Item.of('ae2:gray_smart_dense_cable', 8), 
        [ 
        'AAA', 
        'ABA',
        'AAA'  
        ],
        {
        A: '#ae2:smart_dense_cable', 
        B: '#forge:dyes/gray'
        }
    ),

    event.shaped(
        Item.of('ae2:gray_smart_dense_cable', 8), 
        [ 
        'AA', 
        'AB'
        ],
        {
        A: '#ae2:gray_smart_cable'
        }
    )

})