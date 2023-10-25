
ServerEvents.recipes(event => {

    // Custom Function specific for this modpack

    let se5_toolarmor = (orename) => {

        var helmet = 'kubejs:' + orename + '_helmet'
        var chestplate = 'kubejs:' + orename + '_chestplate'
        var leggings = 'kubejs:' + orename + '_leggings'
        var boots = 'kubejs:' + orename + '_boots'
        var sword = 'kubejs:' + orename + '_sword'
        var pickaxe = 'kubejs:' + orename + '_pickaxe'
        var axe = 'kubejs:' + orename + '_axe'
        var shovel = 'kubejs:' + orename + '_shovel'
        var hoe = 'kubejs:' + orename + '_hoe'
        var oretag = '#forge:ingots/' + orename

        // Armor Recipes

        event.shaped(
            Item.of(helmet),
            [
                'AAA',
                'A A'
            ],
            {
                A: oretag
            }
        ),

        event.shaped(
            Item.of(chestplate),
            [
                'A A',
                'AAA',
                'AAA'
            ],
            {
                A: oretag
            }
        ),

        event.shaped(
            Item.of(leggings),
            [
                'AAA',
                'A A',
                'A A'
            ],
            {
                A: oretag
            }
        ),

        event.shaped(
            Item.of(boots),
            [
                'A A',
                'A A'
            ],
            {
                A: oretag
            }
        ),

        // Tool recipes

        event.shaped(
            Item.of(pickaxe),
            [
                'AAA',
                ' B ',
                ' B '
            ],
            {
                A: oretag,
                B: '#forge:rods/wooden'
            }
        ),

        event.shaped(
            Item.of(shovel),
            [
                ' A ',
                ' B ',
                ' B '
            ],
            {
                A: oretag,
                B: '#forge:rods/wooden'
            }
        ),

        event.shaped(
            Item.of(axe),
            [
                ' AA',
                ' BA',
                ' B '
            ],
            {
                A: oretag,
                B: '#forge:rods/wooden'
            }
        ),

        event.shaped(
            Item.of(hoe),
            [
                ' AA',
                ' B ',
                ' B '
            ],
            {
                A: oretag,
                B: '#forge:rods/wooden'
            }
        ),

        event.shaped(
            Item.of(sword),
            [
                ' A ',
                ' A ',
                ' B '
            ],
            {
                A: oretag,
                B: '#forge:rods/wooden'
            }
        )
    }

    // Recipes
    
    se5_toolarmor('fbmodium')
    se5_toolarmor('nether_infused_fbmodium')
    se5_toolarmor('end_infused_fbmodium')
    se5_toolarmor('ultimate_infused_fbmodium')

})
