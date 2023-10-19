
ServerEvents.recipes(event => { 

    event.custom({
        type: 'enderio:alloy_smelting',
        energy: 6400000,
        experience: 0.3,
        inputs: [
            {
                count: 4,
                ingredient: {
                    tag: 'forge:dusts/glowstone'
                }
            },
            {
                count: 4,
                ingredient: {
                  tag: 'forge:ingots/iron'
                }
            },
            {
                count: 4,
                ingredient: {
                    tag: 'forge:gems/certus_quartz'
                }
            }
        ],
        result: {
            item: 'ae2:blank_pattern',
            count: 2
        }
    })

})