
ServerEvents.recipes(event => { 

    // Custom function to make pots recipe
    
    let pots = (output1, output2, percentage, input, ticks, farmland) => {
        event.custom({
            type: 'botanypots:crop',
            seed: {
                item: input
            },
            categories: [
                farmland,
                farmland
            ],
            growthTicks: ticks,
            display: {
                type: 'botanypots:aging',
                block: input
            },
            drops: [
                {
                    chance: 1.00,
                    output: {
                        item: output1
                    },
                    minRols: 1,
                    maxRols: 2
                },
                {
                    chance: percentage,
                    output: {
                        item: output2
                    },
                    minRols: 1,
                    maxRols: 2
                }
            ]
        })
    }

    // Minecraft Ore recipes

    // Coal

    pots('minecraft:coal_block', 'minecraft:cobblestone', 0.01, 'minecraft:coal_ore', 200, 'dirt')
    pots('minecraft:coal_block', 'minecraft:cobblestone', 0.01, 'minecraft:deepslate_coal_ore', 200, 'dirt')

    // Iron

    pots('minecraft:iron_block', 'minecraft:cobblestone', 0.01, 'minecraft:iron_ore', 200, 'dirt')
    pots('minecraft:iron_block', 'minecraft:cobblestone', 0.01, 'minecraft:deepslate_iron_ore', 200, 'dirt')

    // Copper

    pots('minecraft:copper_block', 'minecraft:cobblestone', 0.01, 'minecraft:copper_ore', 200, 'dirt')
    pots('minecraft:copper_block', 'minecraft:cobblestone', 0.01, 'minecraft:deepslate_copper_ore', 200, 'dirt')

    // Gold

    pots('minecraft:gold_block', 'minecraft:cobblestone', 0.01, 'minecraft:gold_ore', 200, 'dirt')
    pots('minecraft:gold_block', 'minecraft:cobblestone', 0.01, 'minecraft:deepslate_gold_ore', 200, 'dirt')
    pots('minecraft:gold_block', 'minecraft:cobblestone', 0.01, 'minecraft:nether_gold_ore', 200, 'netherack')

    // Redstone

    pots('minecraft:redstone_block', 'minecraft:cobblestone', 0.01, 'minecraft:redstone_ore', 200, 'dirt')
    pots('minecraft:redstone_block', 'minecraft:cobblestone', 0.01, 'minecraft:deepslate_redstone_ore', 200, 'dirt')

    // Emerald

    pots('minecraft:emerald_block', 'minecraft:cobblestone', 0.01, 'minecraft:emerald_ore', 200, 'dirt')
    pots('minecraft:emerald_block', 'minecraft:cobblestone', 0.01, 'minecraft:deepslate_emerald_ore', 200, 'dirt')

    // Lapis

    pots('minecraft:lapis_block', 'minecraft:cobblestone', 0.01, 'minecraft:lapis_ore', 200, 'dirt')
    pots('minecraft:lapis_block', 'minecraft:cobblestone', 0.01, 'minecraft:deepslate_lapis_ore', 200, 'dirt')

    // Diamond

    pots('minecraft:diamond_block', 'minecraft:cobblestone', 0.01, 'minecraft:diamond_ore', 200, 'dirt')
    pots('minecraft:diamond_block', 'minecraft:cobblestone', 0.01, 'minecraft:deepslate_diamond_ore', 200, 'dirt')

    // Nether Quartz

    pots('minecraft:quartz_block', 'minecraft:cobblestone', 0.01, 'minecraft:nether_quartz_ore', 200, 'netherrack')

    // Mod Ore Recipes

    // Aluminium

    pots('immersiveengineering:storage_aluminum', 'minecraft:cobblestone', 0.01, 'immersiveengineering:ore_aluminum', 200, 'dirt')
    pots('immersiveengineering:storage_aluminum', 'minecraft:cobblestone', 0.01, 'immersiveengineering:deepslate_ore_aluminum', 200, 'dirt')

    // Lead

    pots('immersiveengineering:storage_lead', 'minecraft:cobblestone', 0.01, 'immersiveengineering:ore_lead', 200, 'dirt')
    pots('immersiveengineering:storage_lead', 'minecraft:cobblestone', 0.01, 'immersiveengineering:deepslate_ore_lead', 200, 'dirt')
    pots('mekanism:block_lead', 'minecraft:cobblestone', 0.01, 'mekanism:lead_ore', 200, 'dirt')
    pots('mekanism:block_lead', 'minecraft:cobblestone', 0.01, 'mekanism:deepslate_lead_ore', 200, 'dirt')

    // Silver

    pots('immersiveengineering:storage_silver', 'minecraft:cobblestone', 0.01, 'immersiveengineering:ore_silver', 200, 'dirt')
    pots('immersiveengineering:storage_silver', 'minecraft:cobblestone', 0.01, 'immersiveengineering:deepslate_ore_silver', 200, 'dirt')
    pots('occultism:silver_block', 'minecraft:cobblestone', 0.01, 'occultism:silver_ore', 200, 'dirt')
    pots('occultism:silver_block', 'minecraft:cobblestone', 0.01, 'occultism:silver_ore_deepslate', 200, 'dirt')


    // Nickel

    pots('immersiveengineering:storage_nickel', 'minecraft:cobblestone', 0.01, 'immersiveengineering:ore_nickel', 200, 'dirt')
    pots('immersiveengineering:storage_nickel', 'minecraft:cobblestone', 0.01, 'immersiveengineering:deepslate_ore_nickel', 200, 'dirt')

    // Uranium / Uraninite

    pots('immersiveengineering:storage_uranium', 'minecraft:cobblestone', 0.01, 'immersiveengineering:ore_uranium', 200, 'dirt')
    pots('immersiveengineering:storage_uranium', 'minecraft:cobblestone', 0.01, 'immersiveengineering:deepslate_ore_uranium', 200, 'dirt')
    pots('mekanism:block_uranium', 'minecraft:cobblestone', 0.01, 'mekanism:uranium_ore', 200, 'dirt')
    pots('mekanism:block_uranium', 'minecraft:cobblestone', 0.01, 'mekanism:deepslate_uranium_ore', 200, 'dirt')
    pots('powah:uraninite_block', 'minecraft:cobblestone', 0.01, 'powah:uraninite_ore', 200, 'dirt')
    pots('powah:uraninite_block', 'minecraft:cobblestone', 0.01, 'powah:deepslate_uraninite_ore', 200, 'dirt')
    pots('powah:uraninite_block', 'minecraft:cobblestone', 0.01, 'powah:uraninite_ore_poor', 200, 'dirt')
    pots('powah:uraninite_block', 'minecraft:cobblestone', 0.01, 'powah:deepslate_uraninite_ore_poor', 200, 'dirt')
    pots('powah:uraninite_block', 'minecraft:cobblestone', 0.01, 'powah:uraninite_ore_dense', 200, 'dirt')
    pots('powah:uraninite_block', 'minecraft:cobblestone', 0.01, 'powah:deepslate_uraninite_ore_dense', 200, 'dirt')

    // Fluorite

    pots('mekanism:block_fluorite', 'minecraft:cobblestone', 0.01, 'mekanism:fluorite_ore', 200, 'dirt')
    pots('mekanism:block_fluorite', 'minecraft:cobblestone', 0.01, 'mekanism:deepslate_fluorite_ore', 200, 'dirt')

    // Prosperity

    pots('mysticalagriculture:prosperity_block', 'minecraft:cobblestone', 0.01, 'mysticalagriculture:prosperity_ore', 200, 'dirt')
    pots('mysticalagriculture:prosperity_block', 'minecraft:cobblestone', 0.01, 'mysticalagriculture:deepslate_prosperity_ore', 200, 'dirt')
    pots('mysticalagriculture:prosperity_block', 'minecraft:cobblestone', 0.01, 'mysticalagradditions:nether_prosperity_ore', 200, 'netherack')
    pots('mysticalagriculture:prosperity_block', 'minecraft:cobblestone', 0.01, 'mysticalagradditions:end_prosperity_ore', 200, 'end_stone')

    // Inferium
    
    pots('mysticalagriculture:inferium_block', 'minecraft:cobblestone', 0.01, 'mysticalagriculture:inferium_ore', 200, 'dirt')
    pots('mysticalagriculture:inferium_block', 'minecraft:cobblestone', 0.01, 'mysticalagriculture:deepslate_inferium_ore', 200, 'dirt')
    pots('mysticalagriculture:inferium_block', 'minecraft:cobblestone', 0.01, 'mysticalagradditions:nether_inferium_ore', 200, 'netherack')
    pots('mysticalagriculture:inferium_block', 'minecraft:cobblestone', 0.01, 'mysticalagradditions:end_inferium_ore', 200, 'end_stone')

    // Soulium

    pots('mysticalagriculture:soulium_block', 'minecraft:cobblestone', 0.01, 'mysticalagriculture:soulium_ore', 200, 'netherack')

    // Iesnium

    pots('occultism:iesnium_block', 'minecraft:cobblestone', 0.01, 'occultism:iesnium_ore', 200, 'dirt')

    // Zinc

    pots('create:zinc_block', 'minecraft:cobblestone', 0.01, 'create:zinc_ore', 200, 'dirt')
    pots('create:zinc_block', 'minecraft:cobblestone', 0.01, 'create:deepslate_zinc_ore', 200, 'dirt')


})

