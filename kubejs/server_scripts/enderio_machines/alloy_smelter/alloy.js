ServerEvents.recipes(event => { 

    // This function checks if all 3 inputs have been passed and if they do make the recipe in that format, if only 2 inputs are passed it does the same but only for the 2 input ingredients
    

    let alloy = (output, input1, input2, input3) => {

        if (input3 !== undefined) {
            event.custom({
                type: 'enderio:alloy_smelting',
                energy: 3200,
                experience: 0.3,
                inputs: [
                    {
                        count: 1,
                        ingredient: {
                            item: input1
                        }
                    },
                    {
                        count: 1,
                        ingredient: {
                            item: input2
                        }
                    },
                    {
                        count: 1,
                        ingredient: {
                            item: input3
                        }
                    }
                ],
                result: {
                    item: output
                }
            })
        } else {
            event.custom({
                type: 'enderio:alloy_smelting',
                energy: 3200,
                experience: 0.3,
                inputs: [
                    {
                        count: 1,
                        ingredient: {
                            item: input1
                        }
                    },
                    {
                        count: 1,
                        ingredient: {
                            item: input2
                        }
                    }
                ],
                result: {
                    item: output
                }
            })
        }
    }

    // Create Alloys in EnderIO Alloy Smelter

    alloy('create:brass_ingot', 'minecraft:copper_ingot', 'create:zinc_ingot')

    // Extended Crafting Alloys in EnderIO Alloy Smelter

    alloy('extendedcrafting:redstone_ingot', 'minecraft:iron_ingot', 'minecraft:redstone')
    alloy('extendedcrafting:ender_ingot', 'minecraft:iron_ingot', 'minecraft:ender_pearl')
    
    // Mekanism Alloys

    alloy('mekanism:ingot_steel', 'minecraft:iron_ingot', 'minecraft:coal')
    alloy('mekanism:ingot_bronze', 'mekanism:ingot_tin', 'minecraft:copper_ingot')



})