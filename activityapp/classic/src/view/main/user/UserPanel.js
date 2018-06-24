/**
 * This view is an example list of people.
 */
Ext.define('ActivityApp.view.main.user.UserPanel', {
    extend: 'Ext.Panel',
    xtype: 'userpanel',
    layout: 'border',

    requires: [],

    controller: 'userpanelcontroller',
    model:      'userpanelmodel',


    title: 'USER',
    height: 500,

    items: [
        {
            layout: 'fit',
            region: 'center',
            bodyStyle: 'background-color: yellow; color: black',
            items: [
                {
                    xtype: 'displayfield',
                    bind: {
                        value: '{selectedusername}'
                    },
                }
            ]
        }
    ],

    tbar: [
        '->', {
            xtype: 'combobox',
            emptyText: 'users',
            width: 300,
            store: Ext.create('ActivityApp.store.user.UserStore'),
            displayField: 'username',
            valueField: 'webuserkey',
            tpl: '<tpl for="."><div class="x-boundlist-item" ><b>{webuserkey}:</b> {username}, pw: {userpassword}</div></tpl>', 
            listeners: {
                select: 'onUserSelected'
            }
        }],
    
    


});
