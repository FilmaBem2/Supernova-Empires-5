
ServerEvents.recipes(event => { 

    let disk_from_housing = (output, housing, part) => {
        event.custom({
            type: 'extendedcrafting:shapeless_flux_crafter',
            powerRequired: 100000,
            powerRate: 400,
            ingredients: [
                {
                    item: housing
                },
                {
                    item: part
                }
            ],
            result: {
                item: output
            }
        })
    }

    let housing_recipe = (output, input) => {
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
                    tag: input
                },
            },
            result: {
                item: output
            }
        })
    }

    let disks = (output, input, type) => {
        event.custom({
            type: 'extendedcrafting:shaped_flux_crafter',
            powerRequired: 100000,
            powerRate: 400,
            pattern: [
                'ABA',
                'BCB',
                'DDD'
            ],
            key: {
                A: {
                    item: 'ae2:quartz_glass'
                },
                B: {
                    item: 'minecraft:redstone'
                },
                C: {
                    item: input
                },
                D: {
                    tag: type
                }
            },
            result: {
                item: output
            }
        })
    
    }

    // Housings

    housing_recipe('ae2:item_cell_housing', 'forge:ingots/iron')
    housing_recipe('ae2:fluid_cell_housing', 'forge:ingots/copper')
    housing_recipe('appmek:chemical_cell_housing', 'forge:ingots/osmium')

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

    // 1k

    disks('ae2:item_storage_cell_1k', 'ae2:cell_component_1k', 'forge:ingots/iron')
    disk_from_housing('ae2:item_storage_cell_1k', 'ae2:item_cell_housing', 'ae2:cell_component_1k')

    // 4k

    disks('ae2:item_storage_cell_4k', 'ae2:cell_component_4k', 'forge:ingots/iron')
    disk_from_housing('ae2:item_storage_cell_4k', 'ae2:item_cell_housing', 'ae2:cell_component_4k')

    // 16k

    disks('ae2:item_storage_cell_16k', 'ae2:cell_component_16k', 'forge:ingots/iron')
    disk_from_housing('ae2:item_storage_cell_16k', 'ae2:item_cell_housing', 'ae2:cell_component_16k')

    // 64k

    disks('ae2:item_storage_cell_64k', 'ae2:cell_component_64k', 'forge:ingots/iron')
    disk_from_housing('ae2:item_storage_cell_64k', 'ae2:item_cell_housing', 'ae2:cell_component_64k')

    // 256k

    disks('ae2:item_storage_cell_256k', 'ae2:cell_component_256k', 'forge:ingots/iron')
    disk_from_housing('ae2:item_storage_cell_256k', 'ae2:item_cell_housing', 'ae2:cell_component_256k')

    // Fluid Storage

    // 1k

    disks('ae2:fluid_storage_cell_1k', 'ae2:cell_component_1k', 'forge:ingots/copper')
    disk_from_housing('ae2:fluid_storage_cell_1k', 'ae2:fluid_cell_housing', 'ae2:cell_component_1k')

    // 4k

    disks('ae2:fluid_storage_cell_4k', 'ae2:cell_component_4k', 'forge:ingots/copper')
    disk_from_housing('ae2:fluid_storage_cell_4k', 'ae2:fluid_cell_housing', 'ae2:cell_component_4k')

    // 16k

    disks('ae2:fluid_storage_cell_16k', 'ae2:cell_component_16k', 'forge:ingots/copper')
    disk_from_housing('ae2:fluid_storage_cell_16k', 'ae2:fluid_cell_housing', 'ae2:cell_component_16k')

    // 64k

    disks('ae2:fluid_storage_cell_64k', 'ae2:cell_component_64k', 'forge:ingots/copper')
    disk_from_housing('ae2:fluid_storage_cell_64k', 'ae2:fluid_cell_housing', 'ae2:cell_component_64k')

    // 256k

    disks('ae2:fluid_storage_cell_256k', 'ae2:cell_component_256k', 'forge:ingots/copper')
    disk_from_housing('ae2:fluid_storage_cell_256k', 'ae2:fluid_cell_housing', 'ae2:cell_component_256k')

    // Chemical Storage

    // 1k

    disks('appmek:chemical_storage_cell_1k', 'ae2:cell_component_1k', 'forge:ingots/osmium')
    disk_from_housing('appmek:chemical_storage_cell_1k', 'appmek:chemical_cell_housing', 'ae2:cell_component_1k')

    // 4k

    disks('appmek:chemical_storage_cell_4k', 'ae2:cell_component_4k', 'forge:ingots/osmium')
    disk_from_housing('appmek:chemical_storage_cell_4k', 'appmek:chemical_cell_housing', 'ae2:cell_component_4k')

    // 16k

    disks('appmek:chemical_storage_cell_16k', 'ae2:cell_component_16k', 'forge:ingots/osmium')
    disk_from_housing('appmek:chemical_storage_cell_16k', 'appmek:chemical_cell_housing', 'ae2:cell_component_16k')

    // 64k

    disks('appmek:chemical_storage_cell_64k', 'ae2:cell_component_64k', 'forge:ingots/osmium')
    disk_from_housing('appmek:chemical_storage_cell_64k', 'appmek:chemical_cell_housing', 'ae2:cell_component_64k')

    // 256k

    disks('appmek:chemical_storage_cell_256k', 'ae2:cell_component_256k', 'forge:ingots/osmium')
    disk_from_housing('appmek:chemical_storage_cell_256k', 'appmek:chemical_cell_housing', 'ae2:cell_component_256k')

})