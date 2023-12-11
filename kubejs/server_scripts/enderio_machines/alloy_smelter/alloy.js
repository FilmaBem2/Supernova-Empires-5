ServerEvents.recipes(event => { 

    let alloy3 = (output, input1, input2, input3) => {
        


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
       
    };

    let alloy2 = (output, input1, input2) => {
        


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
       
    };

    // Create Alloys in EnderIO Alloy Smelter

    alloy2('create:brass_ingot', 'minecraft:copper_ingot', 'create:zinc_ingot')

    // Extended Crafting Alloys in EnderIO Alloy Smelter

    alloy2('extendedcrafting:redstone_ingot', 'minecraft:iron_ingot', 'minecraft:redstone')
    alloy2('extendedcrafting:ender_ingot', 'minecraft:iron_ingot', 'minecraft:ender_pearl')
    
    // Mekanism Alloys

    alloy2('mekanism:ingot_steel', 'minecraft:iron_ingot', 'minecraft:coal')
    alloy2('mekanism:ingot_bronze', 'mekanism:ingot_tin', 'minecraft:copper_ingot')





})