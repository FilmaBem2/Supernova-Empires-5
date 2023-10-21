
ServerEvents.recipes(event => { 

    event.custom({
        type: 'enderio:sag_milling',
        energy: 2400,
        input: {
            tag: 'forge:gems/lapis'
        },
        outputs: [
        {
            item: 'mekanism:dust_lapis_lazuli'
        },
        {
            chance: 0.8,
            item: 'mekanism:dust_lapis_lazuli'
        },
        {
            chance: 0.6,
            item: 'mekanism:dust_lapis_lazuli'
        },
        {
            chance: 0.3,
            item: 'mekanism:dust_lapis_lazuli'
        }

    ]
    })

})