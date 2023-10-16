

StartupEvents.registry('item', event => {

    // Items to use in craftings

    event.create('machine_casing').displayName('Machine Casing')
    event.create('universal_upgrade_core').displayName('Universal Upgrade Core')
    event.create('universal_upgrade_cover').displayName('Universal Upgrade Cover')
    event.create('universal_upgrade').displayName('Universal Upgrade')
    event.create('transmutation_stone').displayName('Transmutation Stone').maxDamage(5000)

})
