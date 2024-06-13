

MoreJSEvents.villagerTrades((event) => {

    // Trades for butcher

    // Level 1 Trades

    event.addTrade("butcher", 1, [TradeItem.of("kubejs:one_dollar", 1, 8)], 'minecraft:baked_potato')
    event.addTrade("butcher", 1, [TradeItem.of("kubejs:one_dollar", 1, 8)], 'minecraft:cooked_beef')
    event.addTrade("butcher", 1, [TradeItem.of("kubejs:one_dollar", 1, 8)], 'minecraft:cooked_porkchop')
    event.addTrade("butcher", 1, [TradeItem.of("kubejs:one_dollar", 1, 8)], 'minecraft:cooked_mutton')
    event.addTrade("butcher", 1, [TradeItem.of("kubejs:one_dollar", 1, 8)], 'minecraft:cooked_chicken')
    event.addTrade("butcher", 1, [TradeItem.of("kubejs:one_dollar", 1, 8)], 'minecraft:cooked_rabbit')
    event.addTrade("butcher", 1, [TradeItem.of("kubejs:one_dollar", 1, 8)], 'minecraft:cooked_cod')
    event.addTrade("butcher", 1, [TradeItem.of("kubejs:one_dollar", 1, 8)], 'minecraft:cooked_salmon')
    event.addTrade("butcher", 1, [TradeItem.of("kubejs:one_dollar", 5, 12)], Item.of('minecraft:enchanted_book').enchant('minecraft:channeling', 1))
    event.addTrade("butcher", 1, [TradeItem.of("kubejs:one_dollar", 5, 12)], Item.of('minecraft:enchanted_book').enchant('enderio:auto_smelt', 1))


    // Level 2 Trades

    event.addTrade("butcher", 2, [TradeItem.of("kubejs:five_dollar", 5, 12)], Item.of('minecraft:enchanted_book').enchant('minecraft:knockback', 1))
    event.addTrade("butcher", 2, [TradeItem.of("kubejs:five_dollar", 8, 15)], Item.of('minecraft:enchanted_book').enchant('minecraft:knockback', 2))
    event.addTrade("butcher", 2, [TradeItem.of("kubejs:five_dollar", 5, 12)], Item.of('minecraft:enchanted_book').enchant('minecraft:fire_aspect', 1))
    event.addTrade("butcher", 2, [TradeItem.of("kubejs:five_dollar", 8, 15)], Item.of('minecraft:enchanted_book').enchant('minecraft:fire_aspect', 2))
    event.addTrade("butcher", 2, [TradeItem.of("kubejs:five_dollar", 5, 12)], Item.of('minecraft:enchanted_book').enchant('minecraft:punch', 1))
    event.addTrade("butcher", 2, [TradeItem.of("kubejs:five_dollar", 8, 15)], Item.of('minecraft:enchanted_book').enchant('minecraft:punch', 2))
    event.addTrade("butcher", 2, [TradeItem.of("kubejs:five_dollar", 8, 12)], Item.of('minecraft:enchanted_book').enchant('minecraft:looting', 2))
    event.addTrade("butcher", 2, [TradeItem.of("kubejs:five_dollar", 8, 12)], Item.of('minecraft:enchanted_book').enchant('minecraft:sweeping', 2))
    event.addTrade("butcher", 2, [TradeItem.of("kubejs:five_dollar", 8, 12)], Item.of('minecraft:enchanted_book').enchant('minecraft:riptide', 2))
    event.addTrade("butcher", 2, [TradeItem.of("kubejs:five_dollar", 8, 12)], Item.of('minecraft:enchanted_book').enchant('additionaladditions:precision', 2))

    // Level 3 trades

    event.addTrade("butcher", 3, [TradeItem.of("kubejs:ten_dollar", 5, 12)], Item.of('minecraft:enchanted_book').enchant('minecraft:looting', 3))
    event.addTrade("butcher", 3, [TradeItem.of("kubejs:ten_dollar", 5, 12)], Item.of('minecraft:enchanted_book').enchant('minecraft:sweeping', 3))
    event.addTrade("butcher", 3, [TradeItem.of("kubejs:ten_dollar", 5, 12)], Item.of('minecraft:enchanted_book').enchant('minecraft:riptide', 3))
    event.addTrade("butcher", 3, [TradeItem.of("kubejs:ten_dollar", 5, 12)], Item.of('minecraft:enchanted_book').enchant('additionaladditions:precision', 3))
    event.addTrade("butcher", 3, [TradeItem.of("kubejs:ten_dollar", 1, 8)], '32x minecraft:coal')
    event.addTrade("butcher", 3, [TradeItem.of("kubejs:ten_dollar", 1, 8)], '32x minecraft:charcoal')
    event.addTrade("butcher", 3, [TradeItem.of("kubejs:ten_dollar", 1, 8)], '64x minecraft:flint')
    event.addTrade("butcher", 3, [TradeItem.of("kubejs:ten_dollar", 1, 8)], '4x minecraft:blaze_rod')
    event.addTrade("butcher", 3, [TradeItem.of("kubejs:ten_dollar", 1, 8)], '64x minecraft:gunpowder')



    // Level 4 Trades

    event.addTrade("butcher", 4, [TradeItem.of("kubejs:twenty_dollar", 5, 18)], Item.of('minecraft:enchanted_book').enchant('minecraft:piercing', 4))
    event.addTrade("butcher", 4, [TradeItem.of("kubejs:twenty_dollar", 5, 18)], Item.of('minecraft:enchanted_book').enchant('ensorcellation:leech', 4))
    event.addTrade("butcher", 4, [TradeItem.of("kubejs:twenty_dollar", 5, 18)], 'iammusicplayer:cassette_tape')
    event.addTrade("butcher", 4, [TradeItem.of("kubejs:twenty_dollar", 5, 18)], 'artifacts:panic_necklace')
    event.addTrade("butcher", 4, [TradeItem.of("kubejs:twenty_dollar", 5, 18)], '4x rats:garbage_pile')
    event.addTrade("butcher", 4, [TradeItem.of("kubejs:twenty_dollar", 5, 18)], 'rats:trash_can')


    // Enchatment trades

    event.addTrade("butcher", 5, [TradeItem.of("kubejs:fifty_dollar", 5, 18)], Item.of('minecraft:enchanted_book').enchant('minecraft:sharpness', 5))
    event.addTrade("butcher", 5, [TradeItem.of("kubejs:fifty_dollar", 5, 18)], Item.of('minecraft:enchanted_book').enchant('minecraft:smite', 5))
    event.addTrade("butcher", 5, [TradeItem.of("kubejs:fifty_dollar", 5, 18)], Item.of('minecraft:enchanted_book').enchant('minecraft:bane_of_arthropods', 5))
    event.addTrade("butcher", 5, [TradeItem.of("kubejs:fifty_dollar", 5, 18)], Item.of('minecraft:enchanted_book').enchant('minecraft:power', 5))
    event.addTrade("butcher", 5, [TradeItem.of("kubejs:fifty_dollar", 5, 18)], Item.of('minecraft:enchanted_book').enchant('deeperdarker:sculk_smite', 5))
    event.addTrade("butcher", 5, [TradeItem.of("kubejs:fifty_dollar", 5, 18)], Item.of('minecraft:enchanted_book').enchant('ensorcellation:damage_illager', 5))
    event.addTrade("butcher", 5, [TradeItem.of("kubejs:fifty_dollar", 5, 12)], Item.of('minecraft:enchanted_book').enchant('enderio:withering', 1))



})