

StartupEvents.registry("block", event => {

    // Overworld

    event.create('fbmodium_ore').material('stone').hardness(8.0).displayName('Fbmodium Ore').requiresTool(true)
    event.create('nether_infused_fbmodium_ore').material('stone').hardness(8.0).displayName('Nether Infused Fbmodium Ore').requiresTool(true)
    event.create('end_infused_fbmodium_ore').material('stone').hardness(8.0).displayName('End Infused Fbmodium Ore').requiresTool(true)
    event.create('ultimate_infused_fbmodium_ore').material('stone').hardness(8.0).displayName('Ultimate Infused Fbmodium Ore').requiresTool(true)

})