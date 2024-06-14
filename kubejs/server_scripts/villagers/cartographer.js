

MoreJSEvents.villagerTrades((event) => {

    // Trades for butcher

    // Level 1 Trades

    event.addTrade("cartographer", 1, [TradeItem.of("kubejs:one_dollar", 1, 8)], 'minecraft:map')
    event.addTrade("cartographer", 1, [TradeItem.of("kubejs:one_dollar", 1, 8)], 'minecraft:paper')
    event.addTrade("cartographer", 1, [TradeItem.of("kubejs:one_dollar", 1, 8)], 'enderio:black_paper')
    event.addTrade("cartographer", 1, [TradeItem.of("kubejs:one_dollar", 1, 8)], 'rats:rat_papers')
    
    // Level 2

    event.addTrade("cartographer", 2, [TradeItem.of("kubejs:five_dollar", 1, 2)], 'minecraft:item_frame')
    event.addTrade("cartographer", 2, [TradeItem.of("kubejs:five_dollar", 1, 2)], 'minecraft:compass')
    event.addTrade("cartographer", 2, [TradeItem.of("kubejs:five_dollar", 1, 2)], 'minecraft:recovery_compass')
    event.addTrade("cartographer", 2, [TradeItem.of("kubejs:five_dollar", 1, 2)], 'minecraft:clock')
    event.addTrade("cartographer", 2, [TradeItem.of("kubejs:five_dollar", 1, 2)], 'additionaladditions:depth_meter')
    event.addTrade("cartographer", 2, [TradeItem.of("kubejs:five_dollar", 1, 2)], 'minecraft:spyglass')

    // Level 3

    event.addTrade("cartographer", 3, [TradeItem.of("kubejs:five_dollar", 6, 8)], 'minecraft:glass_bottle')
    event.addTrade("cartographer", 3, [TradeItem.of("kubejs:five_dollar", 6, 8)], 'minecraft:book')
    event.addTrade("cartographer", 3, [TradeItem.of("kubejs:five_dollar", 6, 8)], 'dummmmmmy:target_dummy')
    event.addTrade("cartographer", 3, [TradeItem.of("kubejs:five_dollar", 6, 8)], 'camera:image_frame')
    event.addTrade("cartographer", 3, [TradeItem.of("kubejs:five_dollar", 6, 8)], 'minecraft:writable_book')

    // Level 4

    event.addTrade("cartographer", 4, [TradeItem.of("kubejs:ten_dollar", 2, 5)], 'securitycraft:sc_manual')
    event.addTrade("cartographer", 4, [TradeItem.of("kubejs:ten_dollar", 2, 5)], 'powah:book')
    event.addTrade("cartographer", 4, [TradeItem.of("kubejs:ten_dollar", 2, 5)], 'occultism:taboo_book')
    event.addTrade("cartographer", 4, [TradeItem.of("kubejs:ten_dollar", 2, 5)], 'mahoutsukai:guidebook')
    event.addTrade("cartographer", 4, [TradeItem.of("kubejs:ten_dollar", 2, 5)], 'iceandfire:manuscript')
    event.addTrade("cartographer", 4, [TradeItem.of("kubejs:ten_dollar", 2, 5)], Item.of('patchouli:guide_book', '{"patchouli:book":"industrialforegoing:industrial_foregoing"}'))
    event.addTrade("cartographer", 4, [TradeItem.of("kubejs:ten_dollar", 2, 5)], Item.of('iceandfire:bestiary', '{Pages:[I;0]}'))
    event.addTrade("cartographer", 4, [TradeItem.of("kubejs:ten_dollar", 2, 5)], Item.of('patchouli:guide_book', '{"patchouli:book":"bigreactors:erguide"}'))
    
    // Level 5

    event.addTrade("cartographer", 5, [TradeItem.of("kubejs:fifty_dollar", 5, 12)], Item.of('patchouli:guide_book', '{"patchouli:book":"extendedcrafting:guide"}'))
    event.addTrade("cartographer", 5, [TradeItem.of("kubejs:fifty_dollar", 5, 12)], Item.of('modonomicon:modonomicon', '{"modonomicon:book_id":"modonomicon:demo"}'))
    
})