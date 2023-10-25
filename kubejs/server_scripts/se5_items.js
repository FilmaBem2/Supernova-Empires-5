
ServerEvents.recipes(event => { 
    
    let ts_style = (output, input1, input2, input3) => {
      event.shaped(
        Item.of(output),
        [
          'ABA',
          'BCB',
          'ABA'
        ],
        {
          A: input1,
          B: input2,
          C: input3
        }
      )
    }
    // Transmutation Stone

    ts_style('kubejs:transmutation_stone', 'minecraft:glowstone_dust', 'minecraft:redstone', 'minecraft:diamond')
    ts_style('kubejs:transmutation_stone', 'minecraft:redstone', 'minecraft:glowstone_dust', 'minecraft:diamond')

    // Machine Casing

    ts_style('kubejs:machine_casing', '#forge:ingots/steel', '#forge:ingots/osmium', '#forge:ingots/iron')
    
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

    // Ore conversions

    event.shapeless(
      Item.of('kubejs:fbmodium_ingot', 9),
      [ 
        'kubejs:fbmodium_block'
      ]
    )

    event.shapeless(
      Item.of('kubejs:fbmodium_block'),
      [ 
        '9x kubejs:fbmodium_ingot'
      ]
    )

    event.shapeless(
      Item.of('kubejs:nether_infused_fbmodium_ingot', 9),
      [ 
        'kubejs:nether_infused_fbmodium_block'
      ]
    )

    event.shapeless(
      Item.of('kubejs:nether_infused_fbmodium_block'),
      [ 
        '9x kubejs:nether_infused_fbmodium_ingot'
      ]
    )

    event.shapeless(
      Item.of('kubejs:end_infused_fbmodium_ingot', 9),
      [ 
        'kubejs:end_infused_fbmodium_block'
      ]
    )

    event.shapeless(
      Item.of('kubejs:end_infused_fbmodium_block'),
      [ 
        '9x kubejs:end_infused_fbmodium_ingot'
      ]
    )

    event.shapeless(
      Item.of('kubejs:ultimate_infused_fbmodium_ingot', 9),
      [ 
        'kubejs:ultimate_infused_fbmodium_block'
      ]
    )

    event.shapeless(
      Item.of('kubejs:ultimate_infused_fbmodium_block'),
      [ 
        '9x kubejs:ultimate_infused_fbmodium_ingot'
      ]
    )

    event.smelting('kubejs:fbmodium_ingot', 'kubejs:fbmodium_ore')
    event.blasting('kubejs:fbmodium_ingot', 'kubejs:fbmodium_ore')
    event.smelting('kubejs:fbmodium_ingot', 'kubejs:deepslate_fbmodium_ore')
    event.blasting('kubejs:fbmodium_ingot', 'kubejs:deepslate_fbmodium_ore')
    event.smelting('kubejs:nether_infused_fbmodium_ingot', 'kubejs:nether_infused_fbmodium_ore')
    event.blasting('kubejs:nether_infused_fbmodium_ingot', 'kubejs:nether_infused_fbmodium_ore')
    event.smelting('kubejs:nether_infused_fbmodium_ingot', 'kubejs:deepslate_nether_infused_fbmodium_ore')
    event.blasting('kubejs:nether_infused_fbmodium_ingot', 'kubejs:deepslate_nether_infused_fbmodium_ore')
    event.smelting('kubejs:end_infused_fbmodium_ingot', 'kubejs:end_infused_fbmodium_ore')
    event.blasting('kubejs:end_infused_fbmodium_ingot', 'kubejs:end_infused_fbmodium_ore')
    event.smelting('kubejs:end_infused_fbmodium_ingot', 'kubejs:deepslate_end_infused_fbmodium_ore')
    event.blasting('kubejs:end_infused_fbmodium_ingot', 'kubejs:deepslate_end_infused_fbmodium_ore')
    event.smelting('kubejs:ultimate_infused_fbmodium_ingot', 'kubejs:ultimate_infused_fbmodium_ore')
    event.blasting('kubejs:ultimate_infused_fbmodium_ingot', 'kubejs:ultimate_infused_fbmodium_ore')
    event.smelting('kubejs:ultimate_infused_fbmodium_ingot', 'kubejs:deepslate_ultimate_infused_fbmodium_ore')
    event.blasting('kubejs:ultimate_infused_fbmodium_ingot', 'kubejs:deepslate_ultimate_infused_fbmodium_ore')

})
