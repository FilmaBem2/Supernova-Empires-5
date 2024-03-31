
MoreJSEvents.wandererTrades((event) => {

    // Trades for wanderer (aka scammer)

    // Base Trades

    event.addTrade(2, [TradeItem.of("minecraft:carrot", 10, 30)], "kubejs:one_dollar")
    event.addTrade(1, [TradeItem.of("kubejs:one_dollar", 1, 8)], "minecraft:carrot")

    // Special Trades

    event.addTrade(2, [TradeItem.of("minecraft:carrot", 10, 30)], "kubejs:one_dollar")
    event.addTrade(2, [TradeItem.of("kubejs:one_dollar", 1, 8)], "minecraft:carrot")

})