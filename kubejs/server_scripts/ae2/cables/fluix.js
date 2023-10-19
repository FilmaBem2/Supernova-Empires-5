
ServerEvents.recipes(event => {

    // Covered Cable

    event.shaped(
        Item.of('ae2:fluix_covered_cable', 8), 
        [ 
        'AAA', 
        'ABA',
        'AAA'  
        ],
        {
        A: '#ae2:covered_cable', 
        B: '#ae2:can_remove_color'
        }
    ),

    // Dense Covered

    event.shaped(
        Item.of('ae2:fluix_covered_dense_cable', 8), 
        [ 
        'AAA', 
        'ABA',
        'AAA'  
        ],
        {
        A: '#ae2:covered_dense_cable', 
        B: '#ae2:can_remove_color'
        }
    ),

    // Smart Dense

    event.shaped(
        Item.of('ae2:fluix_smart_dense_cable', 8), 
        [ 
        'AAA', 
        'ABA',
        'AAA'  
        ],
        {
        A: '#ae2:smart_dense_cable', 
        B: '#ae2:can_remove_color'
        }
    ),

    // Glass

    event.shaped(
        Item.of('ae2:fluix_glass_cable', 8), 
        [ 
        'AAA', 
        'ABA',
        'AAA'  
        ],
        {
        A: '#ae2:glass_cable', 
        B: '#ae2:can_remove_color'
        }
    ),

    // Smart

    event.shaped(
        Item.of('ae2:fluix_smart_cable', 8), 
        [ 
        'AAA', 
        'ABA',
        'AAA'  
        ],
        {
        A: '#ae2:smart_cable', 
        B: '#ae2:can_remove_color'
        }
    )

})