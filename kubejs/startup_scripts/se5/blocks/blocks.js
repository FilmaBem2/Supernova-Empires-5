
StartupEvents.registry("block", event => {

    // Fbmodium

    event.create('fbmodium_block').soundType('glass').hardness(8.0).displayName('Fbmodium Block').requiresTool(true).tagBlock('minecraft:minerable/pickaxe')
    event.create('nether_infused_fbmodium_block').soundType('glass').hardness(8.0).displayName('Nether Infused Fbmodium Block').requiresTool(true).tagBlock('minecraft:minerable/pickaxe')
    event.create('end_infused_fbmodium_block').soundType('glass').hardness(8.0).displayName('End Infused Fbmodium Block').requiresTool(true).tagBlock('minecraft:minerable/pickaxe')
    event.create('ultimate_infused_fbmodium_block').soundType('glass').hardness(8.0).displayName('Ultimate Infused Fbmodium Block').requiresTool(true).tagBlock('minecraft:minerable/pickaxe')

  })