
ServerEvents.recipes(event => { 

    // Grains of infinity

    event.custom({
        type: 'enderio:fire_crafting',
        base_blocks: [
            {
                block: 'minecraft:bedrock'
            }
        ],
        dimensions: [
            'minecraft:nether',
            'minecraft:the_end'
        ],
        loot_table: 'enderio:fire_crafting/infinity',
        max_item_drops: '2'
    })

    // Luminessence

    event.custom({
        type: 'enderio:fire_crafting',
        base_blocks: [
            {
                block: 'minecraft:obsidian'
            }
        ],
        dimensions: [
            'minecraft:overworld',
            'minecraft:nether',
            'minecraft:the_end'
        ],
        loot_table: 'se5:fire_crafting/luminessence',
        max_item_drops: '5'
    })

})