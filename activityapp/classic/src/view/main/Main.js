/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ActivityApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'ActivityApp.view.main.MainController',
        'ActivityApp.view.main.MainViewModel',
        'ActivityApp.view.main.user.UserPanel'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa fa-car'
    },

    tabBar: {
        layout: {
            pack: 'center'
        },
        boder: false
    },

    defaults: {
        bodyPadding: 15,
        iconAlign: 'top'   
    },

    items: [{
        title: 'Activities',
        layout: 'fit',
        iconCls: 'fa fa-soccer-ball-o',
        items: [{
                xtype: "activitysidebar",
            }]
    },{
        title: 'User',
        iconCls: 'fa fa-id-badge',
        // The following grid shares a store with the classic version's grid as well!
        items: [{
            xtype: 'userpanel'
        }]
    }, 
     
    // {
    //     title: 'Groups',
    //     iconCls: 'fa-users',
    //     bind: {
    //         html: '{loremIpsum}'
    //     }
    // }, {
    //     title: 'Settings',
    //     iconCls: 'fa-cog',
    //     bind: {
    //         html: '{loremIpsum}'
    //     }
    // }
]
});
