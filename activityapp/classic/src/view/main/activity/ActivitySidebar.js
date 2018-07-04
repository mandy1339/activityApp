Ext.define('ActivityApp.view.main.activity.ActivitySidebar.js', {
    extend: 'Ext.tab.Panel',
    xtype: 'activitysidebar',
    controller: 'activitysidebarcontroller',
    model: 'activitysidebarviewmodel',

    ui: 'navigation',
    tabPosition: 'left',
    tabRotation: 0,

    tabBar: {
        border: false
    },

    defaults: {
        textAlign: 'left',
        // bodyPadding: 0
    },

    items: [
        {
            title: 'see activities',
            xtype: "activitygrid",

        }, {
            title: 'new activity',
            xtype: 'createactivityform'
        }],
});