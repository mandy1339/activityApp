Ext.define('ActivityApp.view.main.activity.CreateActivityForm', {
    extend: "Ext.panel.Panel",
    xtype: 'createactivityform',
    controller: 'createactivityformcontroller',
    model: 'createactivityformviewmodel',

    items: [{
        xtype: 'form',
        reference: 'createactivityform',
        fieldDefaults: {
            allowBlank: false,
            labelAlign: 'right',
            anchor: '100%',
            msgTarget: 'under',
            labelWidth: 120
        },
        items: [{
                xtype: 'textfield',
                fieldLabel: 'activity id',
                name: 'activityid',
                hidden: true,                   // hidden id field
                allowBlank: true,
            },{
                xtype: 'textfield',
                fieldLabel: 'name',
                name: 'name'
            }, {
                xtype: 'textarea',
                fieldLabel: 'description',
                height: 80,
                allowBlank: true,
                name: 'description'
            }, {
                xtype: 'datefield',
                fieldLabel: 'date',
                format: 'Y-m-d',
                name: 'date'
            }, {
                xtype: 'radiogroup',
                fieldLabel: 'indoor?',
                items: [
                    {boxLabel: 'yes', name: 'indoor', inputValue: '1'},
                    {boxLabel: 'no', name: 'indoor', inputValue: '0', checked: true}
                ]
            }, {
                xtype: 'radiogroup',
                fieldLabel: 'in house?',
                items: [
                    {boxLabel: 'yes', name: 'inhouse', inputValue: '1'},
                    {boxLabel: 'no', name: 'inhouse', inputValue: '0', checked: true}
                ]
            }, {
                xtype: 'radiogroup',
                fieldLabel: 'daytime?',
                items: [
                    {boxLabel: 'yes', name: 'daytime', inputValue: '1'},
                    {boxLabel: 'no', name: 'daytime', inputValue: '0', checked: true},
                    {boxLabel: 'both', name: 'daytime', inputValue: '3'}
                ]
            },
            {
                xtype: 'radiogroup',
                fieldLabel: 'long distance?',
                tooltip: 'over 30 miles?',              // TODO FIX
                items: [
                    {boxLabel: 'yes', name: 'longdist', inputValue: '1'},
                    {boxLabel: 'no', name: 'longdist', inputValue: '0', checked: true}
                ]
            }

        ]
    }],

    bbar: [
        '->',
        {
            text: 'add',
            handler: 'onClickAdd'
        }, {
            text: 'reset'                   // TODO CLEAR
        }
    ]

});