
ServerEvents.tags('item', event => {

    // Forge global ingots
    
    event.add('forge:ingots', 'kubejs:fbmodium_ingot')
    event.add('forge:ingots', 'kubejs:nether_infused_fbmodium_ingot')
    event.add('forge:ingots', 'kubejs:end_infused_fbmodium_ingot')
    event.add('forge:ingots', 'kubejs:ultimate_infused_fbmodium_ingot')

    // Forge Specific Ingots

    event.add('forge:ingots/fbmodium', 'kubejs:fbmodium_ingot')
    event.add('forge:ingots/nether_fbmodium', 'kubejs:nether_infused_fbmodium_ingot')
    event.add('forge:ingots/end_fbmodium', 'kubejs:end_infused_fbmodium_ingot')
    event.add('forge:ingots/ultimate_fbmodium', 'kubejs:ultimate_infused_fbmodium_ingot')
    event.add('forge:ingots/nether_infused_fbmodium', 'kubejs:nether_infused_fbmodium_ingot')
    event.add('forge:ingots/end_infused_fbmodium', 'kubejs:end_infused_fbmodium_ingot')
    event.add('forge:ingots/ultimate_infused_fbmodium', 'kubejs:ultimate_infused_fbmodium_ingot')

  })