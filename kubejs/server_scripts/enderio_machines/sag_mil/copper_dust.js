
ServerEvents.recipes(event => { 

    event.custom({
        type: 'enderio:sag_milling',
        energy: 2400,
        input: {
            tag: 'forge:ingots/copper'
        },
        outputs: [
        {
            item: 'mekanism:dust_copper'
        },
        {
            chance: 0.8,
            item: 'mekanism:dust_copper'
        },
        {
            chance: 0.6,
            item: 'mekanism:dust_copper'
        },
        {
            chance: 0.3,
            item: 'mekanism:dust_copper'
        }

    ]
    })

})