
ServerEvents.recipes(event => { 

    event.custom({
        type: 'enderio:sag_milling',
        energy: 2400,
        input: {
            tag: 'forge:gems/quartz'
        },
        outputs: {
            item: 'enderio:silicon'
        }
    })

})