
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
    // --- Disk Parts ---

    // -- Storage --

    // 1K

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
                tag: 'forge:silicon'
            },
            B: {
                item: 'refinedstorage:quartz_enriched_iron'
            },
            C: {
                tag: 'forge:glass'
            },
            D: {
                item: 'minecraft:redstone'
            }
        },
        result: {
            item: 'refinedstorage:1k_storage_part'
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
                item: 'refinedstorage:basic_processor'
            },
            B: {
                item: 'refinedstorage:quartz_enriched_iron'
            },
            C: {
                item: 'refinedstorage:1k_storage_part'
            },
            D: {
                item: 'minecraft:redstone'
            }
        },
        result: {
            item: 'refinedstorage:4k_storage_part'
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
                item: 'refinedstorage:improved_processor'
            },
            B: {
                item: 'refinedstorage:quartz_enriched_iron'
            },
            C: {
                item: 'refinedstorage:4k_storage_part'
            },
            D: {
                item: 'minecraft:redstone'
            }
        },
        result: {
            item: 'refinedstorage:16k_storage_part'
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
                item: 'refinedstorage:advanced_processor'
            },
            B: {
                item: 'refinedstorage:quartz_enriched_iron'
            },
            C: {
                item: 'refinedstorage:16k_storage_part'
            },
            D: {
                item: 'minecraft:redstone'
            }
        },
        result: {
            item: 'refinedstorage:64k_storage_part'
        }
    })


    // -- Fuild --

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
                tag: 'forge:silicon'
            },
            B: {
                item: 'refinedstorage:quartz_enriched_iron'
            },
            C: {
                tag: 'forge:glass'
            },
            D: {
                item: 'minecraft:bucket'
            }
        },
        result: {
            item: 'refinedstorage:64k_fluid_storage_part'
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
                item: 'refinedstoragen:basic_processor'
            },
            B: {
                item: 'refinedstorage:quartz_enriched_iron'
            },
            C: {
                item: 'refinedstorage:64k_fluid_storage_part'
            },
            D: {
                item: 'minecraft:bucket'
            }
        },
        result: {
            item: 'refinedstorage:256k_fluid_part'
        }
    })

    // 1024k

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
                item: 'refinedstoragen:improved_processor'
            },
            B: {
                item: 'refinedstorage:quartz_enriched_iron'
            },
            C: {
                item: 'refinedstorage:256k_fluid_storage_part'
            },
            D: {
                item: 'minecraft:bucket'
            }
        },
        result: {
            item: 'refinedstorage:1024k_fluid_part'
        }
    })

    // 4096

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
                item: 'refinedstoragen:advanced_processor'
            },
            B: {
                item: 'refinedstorage:quartz_enriched_iron'
            },
            C: {
                item: 'refinedstorage:1024k_fluid_storage_part'
            },
            D: {
                item: 'minecraft:bucket'
            }
        },
        result: {
            item: 'refinedstorage:4096k_fluid_part'
        }
    })

    // --- Disks ---

    // -- Storage --

    // 1k

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
                tag: 'forge:glass'
            },
            B: {
                item: 'minecraft:redstone'
            },
            C: {
                item: 'refinedstorage:1k_storage_part'
            },
            D: {
                item: 'refinedstorage:quartz_enriched_iron'
            }
        },
        result: {
            item: 'refinedstorage:1k_storage_disk'
        }
    })

    disk_from_housing('refinedstorage:1k_storage_disk', 'refinedstorage:storage_housing', 'refinedstorage:1k_storage_part')

    // 4k

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
                tag: 'forge:glass'
            },
            B: {
                item: 'minecraft:redstone'
            },
            C: {
                item: 'refinedstorage:4k_storage_part'
            },
            D: {
                item: 'refinedstorage:quartz_enriched_iron'
            }
        },
        result: {
            item: 'refinedstorage:4k_storage_disk'
        }
    })

    disk_from_housing('refinedstorage:4k_storage_disk', 'refinedstorage:storage_housing', 'refinedstorage:4k_storage_part')

    // 16k

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
                tag: 'forge:glass'
            },
            B: {
                item: 'minecraft:redstone'
            },
            C: {
                item: 'refinedstorage:16k_storage_part'
            },
            D: {
                item: 'refinedstorage:quartz_enriched_iron'
            }
        },
        result: {
            item: 'refinedstorage:16k_storage_disk'
        }
    })

    disk_from_housing('refinedstorage:16k_storage_disk', 'refinedstorage:storage_housing', 'refinedstorage:16k_storage_part')

    // 64k

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
                tag: 'forge:glass'
            },
            B: {
                item: 'minecraft:redstone'
            },
            C: {
                item: 'refinedstorage:64k_storage_part'
            },
            D: {
                item: 'refinedstorage:quartz_enriched_iron'
            }
        },
        result: {
            item: 'refinedstorage:64k_storage_disk'
        }
    })

    disk_from_housing('refinedstorage:64k_storage_disk', 'refinedstorage:storage_housing', 'refinedstorage:64k_storage_part')

    // -- Fluid --

    // 64k

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
                tag: 'forge:glass'
            },
            B: {
                item: 'minecraft:redstone'
            },
            C: {
                item: 'refinedstorage:64k_fluid_storage_part'
            },
            D: {
                item: 'refinedstorage:quartz_enriched_iron'
            }
        },
        result: {
            item: 'refinedstorage:64k_fluid_storage_disk'
        }
    })

    disk_from_housing('refinedstorage:64k_storage_disk', 'refinedstorage:storage_housing', 'refinedstorage:64k_storage_part')

    // 256k

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
                tag: 'forge:glass'
            },
            B: {
                item: 'minecraft:redstone'
            },
            C: {
                item: 'refinedstorage:256k_fluid_storage_part'
            },
            D: {
                item: 'refinedstorage:quartz_enriched_iron'
            }
        },
        result: {
            item: 'refinedstorage:256k_fluid_storage_disk'
        }
    })

    disk_from_housing('refinedstorage:256k_fluid_storage_disk', 'refinedstorage:storage_housing', 'refinedstorage:256k_fluid_storage_part')

    // 1024k

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
                tag: 'forge:glass'
            },
            B: {
                item: 'minecraft:redstone'
            },
            C: {
                item: 'refinedstorage:1024k_fluid_storage_part'
            },
            D: {
                item: 'refinedstorage:quartz_enriched_iron'
            }
        },
        result: {
            item: 'refinedstorage:1024k_fluid_storage_disk'
        }
    })

    disk_from_housing('refinedstorage:1024k_fluid_storage_disk', 'refinedstorage:storage_housing', 'refinedstorage:1024k_fluid_storage_part')

    // 4096k

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
                tag: 'forge:glass'
            },
            B: {
                item: 'minecraft:redstone'
            },
            C: {
                item: 'refinedstorage:4096k_fluid_storage_part'
            },
            D: {
                item: 'refinedstorage:quartz_enriched_iron'
            }
        },
        result: {
            item: 'refinedstorage:4096k_fluid_storage_disk'
        }
    })

    disk_from_housing('refinedstorage:4096k_fluid_storage_disk', 'refinedstorage:storage_housing', 'refinedstorage:4096k_fluid_storage_part')

})