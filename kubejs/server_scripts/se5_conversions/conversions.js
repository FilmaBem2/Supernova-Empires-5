
ServerEvents.recipes(event => { 
    
    // Function to make converions easier

    let convert = (material1, itemnumber, material2) => {
        let ingredient = itemnumber + 'x ' + material2;
    
        event.shapeless(
            Item.of(material1),
            ['kubejs:transmutation_stone', ingredient]
        ).keepIngredient('kubejs:transmutation_stone');
    
        event.shapeless(
            Item.of(material2, itemnumber),
            ['kubejs:transmutation_stone', material1]
        ).keepIngredient('kubejs:transmutation_stone');
    };

    // 4 Charcoals = 1 Coal / 1 Coal = 4 Charcoals
    
    convert('minecraft:coal', 4, 'minecraft:charcoal')

    // 2 Diamonds = 1 Emerald / 1 Emerald = 2 Diamonds

    convert('minecraft:emerald', 2, 'minecraft:diamond')

    // 4 Irons = 1 Ender Pearl / 1 Ender Pearl = 4 Irons

    convert('minecraft:ender_pearl', 4, 'minecraft:iron_ingot')
    
    // 8 Golds = 1 Diamond / 1 Diamond = 8 Golds

    convert('minecraft:diamond', 8, 'minecraft:gold_ingot')
    
    // 8 Irons = 1 Gold / 1 Gold = 8 Irons
    
    convert('minecraft:gold_ingot', 8, 'minecraft:iron_ingot')

    // 8 Lapis = 1 Redstone / 1 Redstone = Lapis

    convert('minecraft:redstone', 8, 'minecraft:lapis_lazuli')

    // 4 Osmiums = 1 Copper / 1 Copper = 4 Osmium

    convert('minecraft:copper_ingot', 4, 'mekanism:ingot_osmium')

    // 8 Tins = 1 Silver / 1 Silver = 8 Tins

    convert('occultism:silver_ingot', 8, 'mekanism:ingot_tin')
    convert('immersiveengineering:ingot_silver', 8, 'mekanism:ingot_tin')

    // 4 Leads = 1 Uranium / 1 Uranium = 4 Leads

    convert('mekanism:ingot_uranium', 4, 'mekanism:ingot_lead')
    convert('immersiveengineering:ingot_uranium', 4, 'immersiveengineering:ingot_lead')

    // 8 Silvers = 1 Iesnium / 1 Iesnium = 8 Silvers

    convert('occultism:iesnium_ingot', 8, 'occultism:silver_ingot')

})