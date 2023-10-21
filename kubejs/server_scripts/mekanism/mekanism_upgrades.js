
ServerEvents.recipes(event => { 
    
    // Speed upgrade

    event.custom({
        type: 'extendedcrafting:shaped_flux_crafter',
        powerRequired: 100000,
        powerRate: 400,
        pattern: [
            ' A ',
            'BCB',
            ' A '
        ],
        key: {
            A: {
                tag: 'forge:glass'
            },
            B: {
                tag: 'forge:alloys/advanced'
            },
            C: {
                tag: 'forge:dusts/osmium'
            }
        },
        result: {
            item: 'mekanism:upgrade_speed'
        }
    })


    // Energy upgrade

    event.custom({
        type: 'extendedcrafting:shaped_flux_crafter',
        powerRequired: 100000,
        powerRate: 400,
        pattern: [
            ' A ',
            'BCB',
            ' A '
        ],
        key: {
            A: {
                tag: 'forge:glass'
            },
            B: {
                tag: 'forge:alloys/advanced'
            },
            C: {
                tag: 'forge:dusts/gold'
            }
        },
        result: {
            item: 'mekanism:upgrade_energy'
        }
    })


    // Filter upgrade

    event.custom({
        type: 'extendedcrafting:shaped_flux_crafter',
        powerRequired: 100000,
        powerRate: 400,
        pattern: [
            ' A ',
            'BCB',
            ' A '
        ],
        key: {
            A: {
                tag: 'forge:glass'
            },
            B: {
                tag: 'forge:alloys/advanced'
            },
            C: {
                tag: 'forge:dusts/tin'
            }
        },
        result: {
            item: 'mekanism:upgrade_filter'
        }
    })


    // Muffling upgrade

    event.custom({
        type: 'extendedcrafting:shaped_flux_crafter',
        powerRequired: 100000,
        powerRate: 400,
        pattern: [
            ' A ',
            'BCB',
            ' A '
        ],
        key: {
            A: {
                tag: 'forge:glass'
            },
            B: {
                tag: 'forge:alloys/advanced'
            },
            C: {
                tag: 'forge:dusts/steel'
            }
        },
        result: {
            item: 'mekanism:upgrade_muffling'
        }
    })


    // Gas upgrade

    event.custom({
        type: 'extendedcrafting:shaped_flux_crafter',
        powerRequired: 100000,
        powerRate: 400,
        pattern: [
            ' A ',
            'BCB',
            ' A '
        ],
        key: {
            A: {
                tag: 'forge:glass'
            },
            B: {
                tag: 'forge:alloys/advanced'
            },
            C: {
                tag: 'forge:dusts/iron'
            }
        },
        result: {
            item: 'mekanism:upgrade_gas'
        }
    })

    // Anchor upgrade

    event.custom({
        type: 'extendedcrafting:shaped_flux_crafter',
        powerRequired: 100000,
        powerRate: 400,
        pattern: [
            ' A ',
            'BCB',
            ' A '
        ],
        key: {
            A: {
                tag: 'forge:glass'
            },
            B: {
                tag: 'forge:alloys/advanced'
            },
            C: {
                tag: 'forge:dusts/diamond'
            }
        },
        result: {
            item: 'mekanism:upgrade_anchor'
        }
    })

    // Stone Generator upgrade

    event.custom({
        type: 'extendedcrafting:shaped_flux_crafter',
        powerRequired: 100000,
        powerRate: 400,
        pattern: [
            ' A ',
            'BCD',
            ' A '
        ],
        key: {
            A: {
                tag: 'forge:glass'
            },
            B: {
                item: 'minecraft:water_bucket'
            },
            C: {
                tag: 'forge:alloys/advanced'
            },
            D: {
                item: 'minecraft:lava_bucket'
            }
        },
        result: {
            item: 'mekanism:upgrade_stone_generator'
        }
    })
})


