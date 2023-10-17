
ItemEvents.modification(event => {

    // Ender Pearl

    event.modify('minecraft:ender_pearl', item => {
      item.maxStackSize = 64
    })

    // Egg

    event.modify('minecraft:egg', item => {
        item.maxStackSize = 64
    })

    // Banners 

    event.modify('minecraft:banners', item => {
        item.maxStackSize = 64
    })

    // Minecrats 

    event.modify('minecraft:minecart', item => {
        item.maxStackSize = 64
    })
    event.modify('minecraft:hopper_minecart', item => {
        item.maxStackSize = 64
    })
    event.modify('minecraft:chest_minecart', item => {
        item.maxStackSize = 64
    })
    event.modify('minecraft:furnace_minecart', item => {
        item.maxStackSize = 64
    })
    event.modify('minecraft:tnt_minecart', item => {
        item.maxStackSize = 64
    })

    // Snowball

    event.modify('minecraft:snowball', item => {
        item.maxStackSize = 64
    })

    // Totem of undying

    event.modify('minecraft:totem_of_undying', item => {
        item.maxStackSize = 64
    })

})