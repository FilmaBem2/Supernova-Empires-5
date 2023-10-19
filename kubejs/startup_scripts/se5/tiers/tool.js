
ItemEvents.toolTierRegistry (event => {

    event.add('fbmodium', tier => {
      tier.uses = 50000
      tier.speed = 50.0
      tier.attackDamageBonus = 50
      tier.level = 25
      tier.enchantmentValue = 14
      tier.repairIngredient = '#forge:ingots/fbmodium'
    }),

    event.add('nether_infused_fbmodium', tier => {
        tier.uses = 100000
        tier.speed = 7.0
        tier.attackDamageBonus = 100
        tier.level = 26
        tier.enchantmentValue = 14
        tier.repairIngredient = '#forge:ingots/nether_infused_fbmodium'
    }),

    event.add('end_infused_fbmodium', tier => {
        tier.uses = 400000
        tier.speed = 8.0
        tier.attackDamageBonus = 400
        tier.level = 27
        tier.enchantmentValue = 14
        tier.repairIngredient = '#forge:ingots/end_infused_fbmodium'
    }),

    event.add('ultimate_infused_fbmodium', tier => {
        tier.uses = 4000000
        tier.speed = 9.0
        tier.attackDamageBonus = 4000
        tier.level = 28
        tier.enchantmentValue = 14
        tier.repairIngredient = '#forge:ingots/ultimate_infused_fbmodium'
    })
  })