
ServerEvents.recipes(event => { 
    
    let tiers = (output, alloy, circuit, ore) =>{
        event.custom({
            type: 'extendedcrafting:shaped_flux_crafter',
            powerRequired: 100000,
            powerRate: 400,
            pattern: [
                'ABA',
                'CDC',
                'ABA'
            ],
            key: {
                A: {
                    tag: alloy
                },
                B: {
                    tag: circuit
                },
                C: {
                    tag: ore
                },
                D: {
                    tag: 'minecraft:planks'
                }
            },
            result: {
                item: output
            }
        })
    }

    // Basic Tier

    event.custom({

        type: 'extendedcrafting:shaped_flux_crafter',
        powerRequired: 100000,
        powerRate: 400,
        pattern: [
            'ABA',
            'CDC',
            'ABA'
        ],
        key: {
            A: {
                item: 'minecraft:redstone'
            },
            B: {
                tag: 'forge:circuits/basic'
            },
            C: {
                tag: 'forge:ingots/iron'
            },
            D: {
                tag: 'minecraft:planks'
            }
        },
        result: {
            item: 'mekanism:basic_tier_installer'
        }
    })

    tiers('mekanism:advanced_tier_installer', 'forge:alloys/advanced', 'forge:circuits/advanced', 'forge:ingots/osmium')
    tiers('mekanism:elite_tier_installer', 'forge:alloys/elite', 'forge:circuits/elite', 'forge:ingots/gold')
    tiers('mekanism:ultimate_tier_installer', 'forge:alloys/ultimate', 'forge:circuits/ultimate', 'forge:gems/diamond')
    
})

