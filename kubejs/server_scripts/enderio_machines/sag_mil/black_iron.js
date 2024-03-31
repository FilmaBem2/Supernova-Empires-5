
ServerEvents.recipes(event => { 

    event.custom({
        type: 'enderio:sag_milling',
        energy: 2400,
        input: {
            item: 'minecraft:iron_block'
        },
        outputs: [
            {
                item: 'minecraft:iron_ingot',
                count: 8
            },
            {
                chance: 0.3,
                item: 'extendedcrafting:black_iron_ingot'
            }
        ]
    })

})