Ext.define('ActivityApp.store.activity.ActivityStore', {
    extend: 'Ext.data.Store',

    model: 'ActivityApp.model.activity.ActivityModel',
    autoLoad: true,
    proxy: {
        type:   'ajax',
        url:    'api/activity/getactivities.json',

        reader: {
            type:           'json',
            rootProperty:   'data',
            totalProperty:  'numRows'
        }
    }
});