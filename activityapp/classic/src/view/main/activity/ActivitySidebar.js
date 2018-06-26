Ext.define('ActivityApp.view.main.activity.ActivitySidebar.js', {
    extend: 'Ext.tab.Panel',
    xtype: 'activitysidebar',

    ui: 'navigation',
    tabPosition: 'left',
    tabRotation: 0,

    tabBar: {
        border: false
    },

    defaults: {
        textAlign: 'left',
        bodyPadding: 15
    },

    items: [
        {
            title: 'see activities',
            items: [
                {
                    xtype: "activitygrid"
                }
            ]
        },
        {
            title: 'create new',
            bind: {
                html: '{loremIpsum}'
            }
        }
    ]

});