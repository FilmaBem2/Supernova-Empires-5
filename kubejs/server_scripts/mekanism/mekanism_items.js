
ServerEvents.recipes(event => { 
    
    // Steel Casing

    event.shaped(
        Item.of('mekanism:steel_casing'),
        [ 
          'BAB', 
          'ACA',
          'BAB'  
        ],
        {
          A: '#forge:glass', 
          B: '#forge:ingots/steel',
          C: 'kubejs:machine_casing'
        }
    ),

    // Module base

    event.custom({
      type: "extendedcrafting:shaped_ender_crafter",
      pattern: [
        "ABC",
        "DED",
        "CBA"
      ],
      key: {
        A: {
          tag: "forge:ingots/bronze"
        },
        B: {
          tag: "forge:ingots/copper_alloy"
        },
        C: {
          tag: "forge:ingots/tin"
        },
        D: {
          tag: "forge:ingots/osmium"
        },
        E: {
          item: "mekanism:hdpe_sheet"
        }
      },
      result: {
        item: "mekanism:module_base",
        count: 2
      }
    }),

    // Obsidian TNT

    event.custom({
      type: 'extendedcrafting:shaped_flux_crafter',
      powerRequired: 50000,
      powerRate: 400,
      pattern: [
        "AAA",
        "BBB",
        "AAA"
      ],
      key: {
        A: {
          item: 'minecraft:obsidian'
        },
        B: {
          item: 'minecraft:tnt'
        }
      },
      result: {
        item: 'mekanismadditions:obsidian_tnt'
      }
    })

    // Basic Induction Cell

    event.custom({
      type: 'extendedcrafting:combination',
      powerCost: 1000000,
      input: {
        item: 'mekanism:basic_energy_cube'
      },
      ingredients: [
        {
          tag: "forge:dusts/lithium"
        },
        {
          tag: "forge:dusts/lithium"
        },
        {
          tag: "forge:dusts/lithium"
        },
        {
          tag: "forge:dusts/lithium"
        },
        {
          tag: "forge:dusts/lithium"
        },
        {
          tag: "forge:dusts/lithium"
        },
        {
          tag: "forge:dusts/lithium"
        },
        {
          tag: "forge:dusts/lithium"
        },
        {
          tag: "forge:dusts/lithium"
        },
        {
          tag: "forge:dusts/lithium"
        },
        {
          tag: "forge:dusts/lithium"
        },
        {
          item: "kubejs:universal_upgrade_cover"
        },
        {
          item: "kubejs:universal_upgrade_cover"
        },
        {
          item: "kubejs:universal_upgrade_cover"
        },
        {
          item: "kubejs:universal_upgrade_cover"
        },
        {
          item: "kubejs:universal_upgrade_cover"
        },
        {
          item: "kubejs:universal_upgrade_cover"
        },
        {
          item: "kubejs:universal_upgrade_cover"
        },
        {
          item: "kubejs:universal_upgrade_cover"
        },
        {
          item: "mekanism:energy_tablet"
        },
        {
          item: "mekanism:energy_tablet"
        },
        {
          item: "mekanism:energy_tablet"
        },
        {
          item: "mekanism:energy_tablet"
        }
      ],
      result: {
        item: 'mekanism:basic_induction_cell'
      }

    })

})