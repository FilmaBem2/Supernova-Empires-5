
ServerEvents.recipes(event => {

    // Covered Cable

    event.shaped(
        Item.of('ae2:brown_covered_cable', 8), 
        [ 
        'AAA', 
        'ABA',
        'AAA'  
        ],
        {
        A: '#ae2:covered_cable', 
        B: '#forge:dyes/brown'
        }
    ),

    // Covered dense

    event.shaped(
        Item.of('ae2:brown_covered_dense_cable', 8), 
        [ 
        'AAA', 
        'ABA',
        'AAA'  
        ],
        {
        A: '#ae2:covered_dense_cable', 
        B: '#forge:dyes/brown'
        }
    ),


    // Glass

    event.shaped(
        Item.of('ae2:brown_glass_cable', 8), 
        [ 
        'AAA', 
        'ABA',
        'AAA'  
        ],
        {
        A: '#ae2:glass_cable', 
        B: '#forge:dyes/brown'
        }
    ),

    // Smart

    event.shaped(
        Item.of('ae2:brown_smart_cable', 8), 
        [ 
        'AAA', 
        'ABA',
        'AAA'  
        ],
        {
        A: '#ae2:smart_cable', 
        B: '#forge:dyes/brown'
        }
    ),

    // Smart Dense

    event.shaped(
        Item.of('ae2:brown_smart_dense_cable', 8), 
        [ 
        'AAA', 
        'ABA',
        'AAA'  
        ],
        {
        A: '#ae2:smart_dense_cable', 
        B: '#forge:dyes/brown'
        }
    )
})