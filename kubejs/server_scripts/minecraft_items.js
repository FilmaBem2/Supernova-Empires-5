
ServerEvents.recipes(event => { 
    
    // Sculk Shrieker

    event.shaped(
        Item.of('minecraft:sculk_shrieker', 4),
        [ 
          'B B', 
          'B B',
          'AAA'  
        ],
        {
          A: 'minecraft:sculk', 
          B: 'minecraft:end_rod'
        }
    ),

    // Sculk Sensor

    event.shaped(
        Item.of('minecraft:sculk_sensor', 2),
        [  
          'B B',
          'AAA'  
        ],
        {
          A: 'minecraft:sculk', 
          B: 'minecraft:kelp'
        }
    ),

    // Name Tag

    event.shapeless(
        Item.of('minecraft:name_tag'),
        [ 
          '4x minecraft:paper',
          'minecraft:stick'
        ]
    ),

    // Saddle

    event.shaped(
        Item.of('minecraft:saddle'),
        [  
          'AAA'  
        ],
        {
          A: 'minecraft:leather'
        }
    )

})