
ServerEvents.recipes(event => { 

    let mekanism_upgrades = (output, dust, sides) => {
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
                    tag: sides
                },
                C: {
                    tag: dust
                }
            },
            result: {
                item: output
            }
        })
    }
    
    // Most of mekanism upgrades

    mekanism_upgrades('mekanism:upgrade_speed', 'forge:dusts/osmium', 'forge:alloys/advanced')
    mekanism_upgrades('mekanism:upgrade_energy', 'forge:dusts/gold', 'forge:alloys/advanced')
    mekanism_upgrades('mekanism:upgrade_filter', 'forge:dusts/tin', 'forge:alloys/advanced')
    mekanism_upgrades('mekanism:upgrade_muffling', 'forge:dusts/steel', 'forge:alloys/advanced')
    mekanism_upgrades('mekanism:upgrade_gas', 'forge:dusts/iron', 'forge:alloys/advanced')
    mekanism_upgrades('mekanism:upgrade_anchor', 'forge:dusts/diamond', 'forge:alloys/advanced')

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


