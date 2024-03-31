
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

    let basic_disk_part = (output, input) => {
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
                    item: input
                }
            },
            result: {
                item: output
            }
        })
    }

    let advanced_disk_part = (output, part, processor, type) => {
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
                    item: processor
                },
                B: {
                    item: 'refinedstorage:quartz_enriched_iron'
                },
                C: {
                    item: part
                },
                D: {
                    item: type
                }
            },
            result: {
                item: output
            }
        })
    }

    let disks = (output, part) => {
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
                    item: part
                },
                D: {
                    item: 'refinedstorage:quartz_enriched_iron'
                }
            },
            result: {
                item: output
            }
        })
    }

    // --- Disk Parts ---

    // -- Storage --

    // 1K

    basic_disk_part('refinedstorage:1k_storage_part', 'minecraft:redstone')

    // 4k

    advanced_disk_part('refinedstorage:4k_storage_part', 'refinedstorage:1k_storage_part', 'refinedstorage:basic_processor', 'minecraft:redstone')

    // 16k

    advanced_disk_part('refinedstorage:16k_storage_part', 'refinedstorage:4k_storage_part', 'refinedstorage:improved_processor', 'minecraft:redstone')

    // 64k

    advanced_disk_part('refinedstorage:64k_storage_part', 'refinedstorage:16k_storage_part', 'refinedstorage:advanced_processor', 'minecraft:redstone')
    
    // -- Fuild --

    // 64k

    basic_disk_part('refinedstorage:64k_fluid_storage_part', 'minecraft:bucket')

    // 256k

    advanced_disk_part('refinedstorage:256k_fluid_storage_part', 'refinedstorage:64k_fluid_storage_part', 'refinedstorage:basic_processor', 'minecraft:bucket')

    // 1024k

    advanced_disk_part('refinedstorage:1024k_fluid_storage_part', 'refinedstorage:256k_fluid_storage_part', 'refinedstorage:improved_processor', 'minecraft:bucket')
    
    // 4096

    advanced_disk_part('refinedstorage:4096k_fluid_storage_part', 'refinedstorage:1024k_fluid_storage_part', 'refinedstorage:advanced_processor', 'minecraft:bucket')

    // --- Disks ---

    // -- Storage --

    // 1k

    disks('refinedstorage:1k_storage_disk', 'refinedstorage:1k_storage_part')
    disk_from_housing('refinedstorage:1k_storage_disk', 'refinedstorage:storage_housing', 'refinedstorage:1k_storage_part')

    // 4k

    disks('refinedstorage:4k_storage_disk', 'refinedstorage:4k_storage_part')
    disk_from_housing('refinedstorage:4k_storage_disk', 'refinedstorage:storage_housing', 'refinedstorage:4k_storage_part')

    // 16k

    disks('refinedstorage:16k_storage_disk', 'refinedstorage:16k_storage_part')
    disk_from_housing('refinedstorage:16k_storage_disk', 'refinedstorage:storage_housing', 'refinedstorage:16k_storage_part')

    // 64k

    disks('refinedstorage:64k_storage_disk', 'refinedstorage:64k_storage_part')
    disk_from_housing('refinedstorage:64k_storage_disk', 'refinedstorage:storage_housing', 'refinedstorage:64k_storage_part')

    // -- Fluid --

    // 64k

    disks('refinedstorage:64k_fluid_storage_disk', 'refinedstorage:64k_fluid_storage_part')
    disk_from_housing('refinedstorage:64k_fluid_storage_disk', 'refinedstorage:storage_housing', 'refinedstorage:64k_fluid_storage_part')

    // 256k

    disks('refinedstorage:256k_fluid_storage_disk', 'refinedstorage:256k_fluid_storage_part')
    disk_from_housing('refinedstorage:256k_fluid_storage_disk', 'refinedstorage:storage_housing', 'refinedstorage:256k_fluid_storage_part')

    // 1024k

    disks('refinedstorage:1024k_fluid_storage_disk', 'refinedstorage:1024k_fluid_storage_part')
    disk_from_housing('refinedstorage:1024k_fluid_storage_disk', 'refinedstorage:storage_housing', 'refinedstorage:1024k_fluid_storage_part')

    // 4096k

    disks('refinedstorage:4096k_fluid_storage_disk', 'refinedstorage:4096k_fluid_storage_part')
    disk_from_housing('refinedstorage:4096k_fluid_storage_disk', 'refinedstorage:storage_housing', 'refinedstorage:4096k_fluid_storage_part')

})