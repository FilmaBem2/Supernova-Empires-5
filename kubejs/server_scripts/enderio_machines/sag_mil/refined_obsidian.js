
ServerEvents.recipes(event => { 

    event.custom({
        type: 'enderio:sag_milling',
        energy: 2400,
        input: {
            tag: 'forge:dusts/obsidian'
        },
        outputs: [
            {
                chance: 0.8,
                item: 'mekanism:ingot_refined_obsidian'
            }
        ]
    })

})