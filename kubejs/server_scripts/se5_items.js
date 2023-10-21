
ServerEvents.recipes(event => { 
    
    // Transmutation Stone

    event.shaped(
        Item.of('kubejs:transmutation_stone'),
        [ 
          'ABA', 
          'BCB',
          'ABA'  
        ],
        {
          A: 'minecraft:glowstone_dust', 
          B: 'minecraft:redstone',
          C: 'minecraft:diamond'
        }
    ),

    event.shaped(
        Item.of('kubejs:transmutation_stone'),
        [ 
          'ABA', 
          'BCB',
          'ABA'  
        ],
        {
          A: 'minecraft:redstone', 
          B: 'minecraft:glowstone_dust',
          C: 'minecraft:diamond'
        }
    ),

    // Machine Casing

    event.shaped(
        Item.of('kubejs:machine_casing'),
        [ 
          'ABA', 
          'BCB',
          'ABA'  
        ],
        {
          A: '#forge:ingots/steel', 
          B: '#forge:ingots/osmium',
          C: '#forge:ingots/iron'
        }
    )

    // Universal Upgrade Cover

    event.custom({
      type: 'extendedcrafting:shaped_ender_crafter',
      pattern: [
        'ABA',
        'CDC',
        'ABA'
      ],
      key: {
        A: {
          tag: 'forge:ingots/redstone_alloy'
        },
        B: {
          tag: 'forge:ingots/steel'
        },
        C: {
          tag: 'forge:ingots/dark_steel'
        },
        D: {
          tag: 'forge:ingots/osmium'
        }
      },
      result: {
        item: 'kubejs:universal_upgrade_cover'
      }
    })

    // Universal Upgrade Core

    event.custom({
      type: 'extendedcrafting:shaped_ender_crafter',
      pattern: [
        'ABA',
        'CDE',
        'ABA'
      ],
      key: {
        A: {
          item: 'extendedcrafting:the_ultimate_ingot'
        },
        B: {
          tag: 'forge:gems/certus_quartz'
        },
        C: {
          item: 'extendedcrafting:flux_star'
        },
        D: {
          item: 'mysticalagradditions:insanium_ingot'
        },
        E: {
          item: 'extendedcrafting:ender_star'
        }
      },
      result: {
        item: 'kubejs:universal_upgrade_core',
        count: 16
      }
    })

    // Universal Upgrade

    event.custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'AAAAAAAAA',
        'ABBBBBBBA',
        'ABBBBBBBA',
        'ABBCCCBBA',
        'ABBCBCBBA',
        'ABBCCCBBA',
        'ABBBBBBBA',
        'ABBBBBBBA',
        'AAAAAAAAA'
      ],
      key: {
        A: {
          item: 'kubejs:universal_upgrade_cover'
        },
        B: {
          item: 'kubejs:fbmodium_ingot'
        },
        C: {
          item: 'kubejs:universal_upgrade_core'
        }
      },
      result: {
        item: 'kubejs:universal_upgrade'
      }
    })

    

})
