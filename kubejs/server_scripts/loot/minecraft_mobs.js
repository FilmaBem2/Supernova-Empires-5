
LootJS.modifiers((event) => {

    // Zombie / 1$

    event.addEntityLootModifier("minecraft:zombie").randomChance(0.3).addLoot("kubejs:one_dollar");
    event.addEntityLootModifier("minecraft:zombie_horse").randomChance(0.3).addLoot("kubejs:one_dollar");
    event.addEntityLootModifier("minecraft:zombie_villager").randomChance(0.3).addLoot("kubejs:one_dollar");
    event.addEntityLootModifier("minecraft:drowned").randomChance(0.3).addLoot("kubejs:one_dollar");
    event.addEntityLootModifier("minecraft:husk").randomChance(0.3).addLoot("kubejs:one_dollar");

    // Skeleton / 1$

    event.addEntityLootModifier("minecraft:skeleton").randomChance(0.3).addLoot("kubejs:one_dollar");
    event.addEntityLootModifier("minecraft:skeleton_horse").randomChance(0.3).addLoot("kubejs:one_dollar");
    event.addEntityLootModifier("minecraft:wither_skeleton").randomChance(0.3).addLoot("kubejs:one_dollar");
    event.addEntityLootModifier("minecraft:stray").randomChance(0.3).addLoot("kubejs:one_dollar");

    // Bee / 1$

    event.addEntityLootModifier("minecraft:bee").randomChance(0.3).addLoot("kubejs:one_dollar");

    // Allay / 1$

    event.addEntityLootModifier("minecraft:allay").randomChance(0.3).addLoot("kubejs:one_dollar");

    // Blaze / 5$
    
    event.addEntityLootModifier("minecraft:blaze").randomChance(0.3).addLoot("kubejs:five_dollar");

    // Spider / 1$

    event.addEntityLootModifier("minecraft:spider").randomChance(0.3).addLoot("kubejs:one_dollar");
    event.addEntityLootModifier("minecraft:cave_spider").randomChance(0.3).addLoot("kubejs:one_dollar");

    // Camel / 1$

    event.addEntityLootModifier("minecraft:camel").randomChance(0.3).addLoot("kubejs:one_dollar");

    // Creeper / 1$
    
    event.addEntityLootModifier("minecraft:creeper").randomChance(0.3).addLoot("kubejs:one_dollar");

    // Chicken / 1$

    event.addEntityLootModifier("minecraft:chicken").randomChance(0.3).addLoot("kubejs:one_dollar");

    // Cow / 1$

    event.addEntityLootModifier("minecraft:cow").randomChance(0.3).addLoot("kubejs:one_dollar");

    // Horse / 1$

    event.addEntityLootModifier("minecraft:horse").randomChance(0.3).addLoot("kubejs:one_dollar");
    event.addEntityLootModifier("minecraft:donkey").randomChance(0.3).addLoot("kubejs:one_dollar");
    event.addEntityLootModifier("minecraft:mule").randomChance(0.3).addLoot("kubejs:one_dollar");
    
    // Guardian / 5$-10$

    event.addEntityLootModifier("minecraft:guardian").randomChance(0.3).addLoot("kubejs:five_dollar");
    event.addEntityLootModifier("minecraft:elder_guardian").randomChance(0.3).addLoot("kubejs:ten_dollar");

    // Enderman / 5$

    event.addEntityLootModifier("minecraft:enderman").randomChance(0.3).addLoot("kubejs:five_dollar");

    // Endermite / 1$

    event.addEntityLootModifier("minecraft:endermite").randomChance(0.3).addLoot("kubejs:one_dollar");

    // Evoker / 1$

    event.addEntityLootModifier("minecraft:evoker").randomChance(0.3).addLoot("kubejs:one_dollar");
    event.addEntityLootModifier("minecraft:vex").randomChance(0.3).addLoot("kubejs:one_dollar");
    event.addEntityLootModifier("minecraft:vindicator").randomChance(0.3).addLoot("kubejs:one_dollar");

    // Ghast / 5$

    event.addEntityLootModifier("minecraft:ghast").randomChance(0.3).addLoot("kubejs:five_dollar");

    // Hoglin / 1$

    event.addEntityLootModifier("minecraft:hoglin").randomChance(0.3).addLoot("kubejs:one_dollar");
    event.addEntityLootModifier("minecraft:zoglin").randomChance(0.3).addLoot("kubejs:one_dollar");

    // Magma Cube / 5$

    event.addEntityLootModifier("minecraft:magma_cube").randomChance(0.3).addLoot("kubejs:five_dollar");

    // Phantom / 1$

    event.addEntityLootModifier("minecraft:phantom").randomChance(0.3).addLoot("kubejs:one_dollar");

    // Piglin / 1$

    event.addEntityLootModifier("minecraft:piglin").randomChance(0.3).addLoot("kubejs:one_dollar");
    event.addEntityLootModifier("minecraft:piglin_brute").randomChance(0.3).addLoot("kubejs:one_dollar");
    event.addEntityLootModifier("minecraft:zombified_piglin").randomChance(0.3).addLoot("kubejs:one_dollar");

    // Pillager / 1$-5$

    event.addEntityLootModifier("minecraft:pillager").randomChance(0.3).addLoot("kubejs:one_dollar");
    event.addEntityLootModifier("minecraft:pillager").randomChance(0.01).addLoot("kubejs:five_dollar");

    // Shulker / 1$

    event.addEntityLootModifier("minecraft:shulker").randomChance(0.3).addLoot("kubejs:one_dollar");

    // Slime / 1$

    event.addEntityLootModifier("minecraft:slime").randomChance(0.3).addLoot("kubejs:one_dollar");

    // Warden / 50$

    event.addEntityLootModifier("minecraft:warden").randomChance(0.3).addLoot("kubejs:fifty_dollar");

    // Witch / 1$

    event.addEntityLootModifier("minecraft:witch").randomChance(0.3).addLoot("kubejs:one_dollar");

    // Wither Boss / 20$

    event.addEntityLootModifier("minecraft:wither").randomChance(0.3).addLoot("kubejs:twenty_dollar");

    // Ender Dragon / 20$

    event.addEntityLootModifier("minecraft:ender_dragon").randomChance(0.3).addLoot("kubejs:twenty_dollar");

    

});