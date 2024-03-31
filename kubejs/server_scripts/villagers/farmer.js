
MoreJSEvents.villagerTrades((event) => {

    // Trades for farmer

    // Carrot Trades

    event.addTrade("farmer", 1, [TradeItem.of("minecraft:carrot", 10, 30)], "kubejs:one_dollar")
    event.addTrade("farmer", 1, [TradeItem.of("kubejs:one_dollar", 1, 8)], "minecraft:carrot")

    event.addTrade("farmer", 2, [TradeItem.of("minecraft:golden_carrot", 1, 8)], "kubejs:ten_dollar")
    event.addTrade("farmer", 2, [TradeItem.of("kubejs:ten_dollar", 1, 8)], "minecraft:golden_carrot")

    // Potato Trades

    event.addTrade("farmer", 1, [TradeItem.of("minecraft:potato", 10, 30)], "kubejs:one_dollar")
    event.addTrade("farmer", 1, [TradeItem.of("kubejs:one_dollar", 1, 8)], "minecraft:potato")

    event.addTrade("farmer", 1, [TradeItem.of("minecraft:baked_potato", 10, 30)], "kubejs:one_dollar")
    event.addTrade("farmer", 1, [TradeItem.of("kubejs:one_dollar", 1, 8)], "minecraft:baked_potato")

    event.addTrade("farmer", 1, [TradeItem.of("minecraft:poisonous_potato", 10, 30)], "kubejs:one_dollar")
    event.addTrade("farmer", 1, [TradeItem.of("kubejs:one_dollar", 1, 8)], "minecraft:poisonous_potato")

    // Wheat Trades
    
    event.addTrade("farmer", 1, [TradeItem.of("minecraft:wheat", 1, 3)], "kubejs:one_dollar")
    event.addTrade("farmer", 1, [TradeItem.of("kubejs:one_dollar", 3, 5)], "minecraft:bread")

    // Apple Trades

    event.addTrade("farmer", 1, [TradeItem.of("minecraft:apple", 10, 15)], "kubejs:one_dollar")
    event.addTrade("farmer", 1, [TradeItem.of("kubejs:one_dollar", 1, 3)], "minecraft:apple")

    event.addTrade("farmer", 2, [TradeItem.of("minecraft:golden_apple", 1, 8)], "kubejs:ten_dollar")
    event.addTrade("farmer", 2, [TradeItem.of("kubejs:ten_dollar", 1, 8)], "minecraft:golden_apple")

    event.addTrade("farmer", 2, [TradeItem.of("minecraft:golden_apple", 1, 8)], "kubejs:ten_dollar")
    event.addTrade("farmer", 2, [TradeItem.of("kubejs:ten_dollar", 1, 8)], "minecraft:golden_apple")

    // Beetroot Trades

    event.addTrade("farmer", 1, [TradeItem.of("minecraft:beetroot", 10, 30)], "kubejs:one_dollar")
    event.addTrade("farmer", 1, [TradeItem.of("kubejs:one_dollar", 1, 8)], "minecraft:beetroot")

    // Chorus Trades

    event.addTrade("farmer", 3, [TradeItem.of("minecraft:chorus_fruit", 10, 30)], "kubejs:one_dollar")
    event.addTrade("farmer", 3, [TradeItem.of("kubejs:one_dollar", 1, 8)], "minecraft:chorus_fruit")

    // Rotten Flesh

    event.addTrade("farmer", 3, [TradeItem.of("minecraft:rotten_flesh", 60, 64)], "kubejs:twenty_dollar")

    // Corn Trades

    event.addTrade("farmer", 1, [TradeItem.of("thermal:corn", 8, 20)], "kubejs:one_dollar")
    event.addTrade("farmer", 1, [TradeItem.of("kubejs:one_dollar", 1, 8)], "thermal:corn")

    // Flax Trades

    event.addTrade("farmer", 1, [TradeItem.of("thermal:flax", 8, 20)], "kubejs:one_dollar")
    event.addTrade("farmer", 1, [TradeItem.of("kubejs:one_dollar", 1, 8)], "thermal:flax")

    // Onion Trades

    event.addTrade("farmer", 1, [TradeItem.of("thermal:onion", 8, 20)], "kubejs:one_dollar")
    event.addTrade("farmer", 1, [TradeItem.of("kubejs:one_dollar", 1, 8)], "thermal:corn")

    // Radish Trades

    event.addTrade("farmer", 1, [TradeItem.of("thermal:radish", 8, 20)], "kubejs:one_dollar")
    event.addTrade("farmer", 1, [TradeItem.of("kubejs:one_dollar", 1, 8)], "thermal:radish")

    // Bell Pepper Trades

    event.addTrade("farmer", 1, [TradeItem.of("thermal:bell_pepper", 8, 20)], "kubejs:one_dollar")
    event.addTrade("farmer", 1, [TradeItem.of("kubejs:one_dollar", 1, 8)], "thermal:bell_pepper")

    // Eggplant Trades

    event.addTrade("farmer", 1, [TradeItem.of("thermal:eggplant", 8, 20)], "kubejs:one_dollar")
    event.addTrade("farmer", 1, [TradeItem.of("kubejs:one_dollar", 1, 8)], "thermal:eggplant")

    // Peanut Trades

    event.addTrade("farmer", 1, [TradeItem.of("thermal:peanut", 8, 20)], "kubejs:one_dollar")
    event.addTrade("farmer", 1, [TradeItem.of("kubejs:one_dollar", 1, 8)], "thermal:peanut")

    // Tomato Trades

    event.addTrade("farmer", 1, [TradeItem.of("thermal:tomato", 8, 20)], "kubejs:one_dollar")
    event.addTrade("farmer", 1, [TradeItem.of("kubejs:one_dollar", 1, 8)], "thermal:tomato")

    // Cheese Trades

    event.addTrade("farmer", 4, [TradeItem.of("thermal:cheese_wedge", 8, 20)], "kubejs:five_dollar")
    event.addTrade("farmer", 4, [TradeItem.of("kubejs:five_dollar", 1, 8)], "thermal:cheese_wedge")
    event.addTrade("farmer", 4, [TradeItem.of("rats:cheese", 8, 20)], "kubejs:five_dollar")
    event.addTrade("farmer", 4, [TradeItem.of("kubejs:five_dollar", 1, 8)], "rats:cheese")
    event.addTrade("farmer", 4, [TradeItem.of("rats:blue_cheese", 10, 30)], "kubejs:five_dollar")
    event.addTrade("farmer", 4, [TradeItem.of("kubejs:five_dollar", 8, 20)], "rats:blue_cheese")
    event.addTrade("farmer", 4, [TradeItem.of("rats:nether_cheese", 10, 30)], "kubejs:five_dollar")
    event.addTrade("farmer", 4, [TradeItem.of("kubejs:five_dollar", 8, 20)], "rats:nether_cheese")

    // Green Bean Pie Trades

    event.addTrade("farmer", 4, [TradeItem.of("thermal:green_bean_pie", 8, 20)], "kubejs:five_dollar")
    event.addTrade("farmer", 4, [TradeItem.of("kubejs:five_dollar", 1, 8)], "thermal:green_bean_pie")

    // PBJ Sandwich Trades

    event.addTrade("farmer", 4, [TradeItem.of("thermal:pbj_sandwich", 8, 20)], "kubejs:five_dollar")
    event.addTrade("farmer", 4, [TradeItem.of("kubejs:five_dollar", 1, 8)], "thermal:pbj_sandwich")

    // Stuffed Pepper Trades

    event.addTrade("farmer", 4, [TradeItem.of("thermal:stuffed_pepper", 8, 20)], "kubejs:five_dollar")
    event.addTrade("farmer", 4, [TradeItem.of("kubejs:five_dollar", 1, 8)], "thermal:stuffed_pepper")

    // Spring Salad Trades

    event.addTrade("farmer", 4, [TradeItem.of("thermal:spring_salad", 8, 20)], "kubejs:five_dollar")
    event.addTrade("farmer", 4, [TradeItem.of("kubejs:five_dollar", 1, 8)], "thermal:spring_salad")

    // Rat Burger Trades

    event.addTrade("farmer", 4, [TradeItem.of("rats:rat_burger", 8, 20)], "kubejs:five_dollar")
    event.addTrade("farmer", 4, [TradeItem.of("kubejs:five_dollar", 1, 8)], "rats:rat_burger")

    // Honeyed Apple Trades

    event.addTrade("farmer", 4, [TradeItem.of("additionaladditions:honeyed_apple", 8, 20)], "kubejs:five_dollar")
    event.addTrade("farmer", 4, [TradeItem.of("kubejs:one_dollar", 1, 8)], "additionaladditions:honeyed_apple")

    // Fried Egg

    event.addTrade("farmer", 4, [TradeItem.of("additionaladditions:fried_egg", 8, 20)], "kubejs:five_dollar")
    event.addTrade("farmer", 4, [TradeItem.of("kubejs:one_dollar", 1, 8)], "additionaladditions:fried_egg")

    // Chicken Nugget

    event.addTrade("farmer", 4, [TradeItem.of("additionaladditions:chicken_nugget", 8, 20)], "kubejs:five_dollar")
    event.addTrade("farmer", 4, [TradeItem.of("kubejs:one_dollar", 1, 8)], "additionaladditions:chicken_nugget")

    // Ultimate Stew Trades

    event.addTrade("farmer", 5, [TradeItem.of("kubejs:one_hundred_dollar", 1, 8)], "avaritia:ultimate_stew")

    // Steak Trades

    event.addTrade("farmer", 5, [TradeItem.of("kubejs:one_dollar", 1, 8)], "minecraft:beef")
    event.addTrade("farmer", 5, [TradeItem.of("kubejs:one_dollar", 1, 8)], "minecraft:cooked_beef")

    // Porkchop Trades

    event.addTrade("farmer", 5, [TradeItem.of("kubejs:one_dollar", 1, 8)], "minecraft:porkchop")
    event.addTrade("farmer", 5, [TradeItem.of("kubejs:one_dollar", 1, 8)], "minecraft:cooked_porkchop")

    // Mutton Trades

    event.addTrade("farmer", 5, [TradeItem.of("kubejs:one_dollar", 1, 8)], "minecraft:mutton")
    event.addTrade("farmer", 5, [TradeItem.of("kubejs:one_dollar", 1, 8)], "minecraft:cooked_mutton")

    // Chicken Trades

    event.addTrade("farmer", 5, [TradeItem.of("kubejs:one_dollar", 1, 8)], "minecraft:chicken")
    event.addTrade("farmer", 5, [TradeItem.of("kubejs:one_dollar", 1, 8)], "minecraft:cooked_chicken")

    // Rabbit Trades

    event.addTrade("farmer", 5, [TradeItem.of("kubejs:one_dollar", 1, 8)], "minecraft:rabbit")
    event.addTrade("farmer", 5, [TradeItem.of("kubejs:one_dollar", 1, 8)], "minecraft:cooked_rabbit")

    // Cod Trades

    event.addTrade("farmer", 5, [TradeItem.of("kubejs:one_dollar", 1, 8)], "minecraft:cod")
    event.addTrade("farmer", 5, [TradeItem.of("kubejs:one_dollar", 1, 8)], "minecraft:cooked_cod")

    // Salmon Trades

    event.addTrade("farmer", 5, [TradeItem.of("kubejs:one_dollar", 1, 8)], "minecraft:salmon")
    event.addTrade("farmer", 5, [TradeItem.of("kubejs:one_dollar", 1, 8)], "minecraft:cooked_salmon")

    // Tropical Fish Trades

    event.addTrade("farmer", 5, [TradeItem.of("kubejs:one_dollar", 1, 8)], "minecraft:tropical_fish")

    // Cake

    event.addTrade("farmer", 5, [TradeItem.of("kubejs:one_dollar", 1, 8)], "minecraft:cake")


    // 4 //5

})