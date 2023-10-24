
ServerEvents.recipes(event => { 

    // Housings

    event.custom({
        type: 'extendedcrafting:shaped_flux_crafter',
        powerRequired: 100000,
        powerRate: 400,
        pattern: [
            'ABA',
            'B B',
            'CCC'
        ],
        key: {
            A: {
                item: 'ae2:quartz_glass'
            },
            B: {
                item: 'minecraft:redstone'
            },
            C: {
                tag: 'forge:ingots/iron'
            }
        },
        result: {
            item: 'ae2:item_cell_housing'
        }
    })

    event.custom({
        type: 'extendedcrafting:shaped_flux_crafter',
        powerRequired: 100000,
        powerRate: 400,
        pattern: [
            'ABA',
            'B B',
            'CCC'
        ],
        key: {
            A: {
                item: 'ae2:quartz_glass'
            },
            B: {
                item: 'minecraft:redstone'
            },
            C: {
                tag: 'forge:ingots/copper'
            }
        },
        result: {
            item: 'ae2:fluid_cell_housing'
        }
    })

    event.custom({
        type: 'extendedcrafting:shaped_flux_crafter',
        powerRequired: 100000,
        powerRate: 400,
        pattern: [
            'ABA',
            'B B',
            'CCC'
        ],
        key: {
            A: {
                item: 'ae2:quartz_glass'
            },
            B: {
                item: 'minecraft:redstone'
            },
            C: {
                tag: 'forge:ingots/osmium'
            }
        },
        result: {
            item: 'appmek:chemical_cell_housing'
        }
    })

    // Storage Components

    // 1k

    event.custom({

        type: 'extendedcrafting:shaped_flux_crafter',
        powerRequired: 100000,
        powerRate: 400,
        pattern: [
            'ABA',
            'BCB',
            'ABA'
        ],
        key: {
            A: {
                item: 'minecraft:redstone'
            },
            B: {
                tag: 'forge:gems/certus_quartz'
            },
            C: {
                item: 'ae2:logic_processor'
            }
        },
        result: {
            item: 'ae2:cell_component_1k'
        }
        
    })

    // 4k

    event.custom({
        type: 'extendedcrafting:shaped_flux_crafter',
        powerRequired: 100000,
        powerRate: 400,
        pattern: [
            'ABA',
            'CDC',
            'ACA'
        ],
        key: {
            A: {
                item: 'minecraft:redstone'
            },
            B: {
                item: 'ae2:calculation_processor'
            },
            C: {
                item: 'ae2:cell_component_1k'
            },
            D: {
                item: 'ae2:quartz_glass'
            }
        },
        result: {
            item: 'ae2:cell_component_4k'
        }
    })

    // 16k

    event.custom({
        type: 'extendedcrafting:shaped_flux_crafter',
        powerRequired: 100000,
        powerRate: 400,
        pattern: [
            'ABA',
            'CDC',
            'ACA'
        ],
        key: {
            A: {
                item: 'minecraft:glowstone_dust'
            },
            B: {
                item: 'ae2:calculation_processor'
            },
            C: {
                item: 'ae2:cell_component_4k'
            },
            D: {
                item: 'ae2:quartz_glass'
            }
        },
        result: {
            item: 'ae2:cell_component_16k'
        }
    })

    // 64k

    event.custom({
        type: 'extendedcrafting:shaped_flux_crafter',
        powerRequired: 100000,
        powerRate: 400,
        pattern: [
            'ABA',
            'CDC',
            'ACA'
        ],
        key: {
            A: {
                item: 'minecraft:glowstone_dust'
            },
            B: {
                item: 'ae2:calculation_processor'
            },
            C: {
                item: 'ae2:cell_component_16k'
            },
            D: {
                item: 'ae2:quartz_glass'
            }
        },
        result: {
            item: 'ae2:cell_component_64k'
        }
    })

    // 256k

    event.custom({
        type: 'extendedcrafting:shaped_flux_crafter',
        powerRequired: 100000,
        powerRate: 400,
        pattern: [
            'ABA',
            'CDC',
            'ACA'
        ],
        key: {
            A: {
                item: 'ae2:sky_dust'
            },
            B: {
                item: 'ae2:calculation_processor'
            },
            C: {
                item: 'ae2:cell_component_64k'
            },
            D: {
                item: 'ae2:quartz_glass'
            }
        },
        result: {
            item: 'ae2:cell_component_256k'
        }
    })
    

    // Item Storage

    // Fluid Storage

    // Chemical Storage


})