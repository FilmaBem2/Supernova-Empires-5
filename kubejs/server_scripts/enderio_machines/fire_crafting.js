
ServerEvents.recipes(event => { 

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

})