Ext.define('ActivityApp.view.main.activity.ActivityGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'activitygrid',

    initComponent: function() {
        debugger;
        var vm = this.up('app-main').getViewModel();
        var activityStore = Ext.create('ActivityApp.store.activity.ActivityStore');
        vm.set('vmActivityStore', activityStore);
        // activityStore.load();
        Ext.apply(this, {
            store: activityStore,
            columns: [
                {text: 'name', dataIndex: 'name', flex:1},
                {text: 'description', dataIndex: 'description', flex: 3},
            ]
        });
        this.callParent();
    }

});