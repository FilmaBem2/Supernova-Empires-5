
LootJS.modifiers((event) => {

   
    // Skeleton / 1$

    event.addEntityLootModifier("mekanismadditions:baby_skeleton").randomChance(0.3).addLoot("kubejs:one_dollar");
    event.addEntityLootModifier("mekanismadditions:baby_stray").randomChance(0.3).addLoot("kubejs:one_dollar");
    event.addEntityLootModifier("mekanismadditions:baby_wither_skeleton").randomChance(0.3).addLoot("kubejs:one_dollar");


    // Creeper / 1$
    
    event.addEntityLootModifier("mekanismadditions:baby_creeper").randomChance(0.3).addLoot("kubejs:one_dollar");

    // Enderman / 1$

    event.addEntityLootModifier("mekanismadditions:baby_enderman").randomChance(0.3).addLoot("kubejs:one_dollar");

    
});