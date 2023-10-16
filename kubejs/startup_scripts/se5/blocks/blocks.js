
StartupEvents.registry("block", event => {

    // Fbmodium

    event.create('fbmodium_block').material('glass').hardness(8.0).displayName('Fbmodium Block').requiresTool(true)
    event.create('nether_infused_fbmodium_block').material('glass').hardness(8.0).displayName('Nether Infused Fbmodium Block').requiresTool(true)
    event.create('end_infused_fbmodium_block').material('glass').hardness(8.0).displayName('End Infused Fbmodium Block').requiresTool(true)
    event.create('ultimate_infused_fbmodium_block').material('glass').hardness(8.0).displayName('Ultimate Infused Fbmodium Block').requiresTool(true)

  })