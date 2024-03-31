
ServerEvents.recipes(event => { 
    
    // Machine Casing

    event.custom({
        type: 'extendedcrafting:shaped_flux_crafter',
        powerRequired: 100000,
        powerRate: 400,
        pattern: [
            'AAA',
            'ABA',
            'AAA'
        ],
        key: {
            A: {
                item: 'refinedstorage:quartz_enriched_iron'
            },
            B: {
                item: 'kubejs:machine_casing'
            }
        },
        result: {
            item: 'refinedstorage:machine_casing'
        }
    })

})