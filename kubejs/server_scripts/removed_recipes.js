
ServerEvents.recipes(event => {

    // Minecraft

    event.remove({ id: 'minecraft:flint_and_steel' })
    
    // Mekanism
    
    event.remove({ id: 'mekanism:steel_casing' })
    event.remove({ id: 'mekanism:module_base' })
    event.remove({ id: 'mekanismadditions:obsidian_tnt' })
    event.remove({ id: 'mekanism:induction/cell/basic' })

    // RF Tools
    
    event.remove({ id: 'rftoolsbase:machine_frame' })

    // Extended Crafting

    event.remove({ id: 'extendedcrafting:black_iron_ingot'})

    // AE2

    event.remove({ id: 'ae2:network/crafting/patterns_blank'})

})