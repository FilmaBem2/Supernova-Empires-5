
ServerEvents.recipes(event => { 
    
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

    // Advanced Tier

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
                tag: 'forge:alloys/advanced'
            },
            B: {
                tag: 'forge:circuits/advanced'
            },
            C: {
                tag: 'forge:ingots/osmium'
            },
            D: {
                tag: 'minecraft:planks'
            }
        },
        result: {
            item: 'mekanism:advanced_tier_installer'
        }
    })

    // Elite Tier

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
                tag: 'forge:alloys/elite'
            },
            B: {
                tag: 'forge:circuits/elite'
            },
            C: {
                tag: 'forge:ingots/gold'
            },
            D: {
                tag: 'minecraft:planks'
            }
        },
        result: {
            item: 'mekanism:elite_tier_installer'
        }
    })

    // Ultimate

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
                tag: 'forge:alloys/ultimate'
            },
            B: {
                tag: 'forge:circuits/ultimate'
            },
            C: {
                tag: 'forge:gems/diamond'
            },
            D: {
                tag: 'minecraft:planks'
            }
        },
        result: {
            item: 'mekanism:ultimate_tier_installer'
        }
    })
})

