Ext.define('ActivityApp.view.main.activity.ActivityGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'activitygrid',
    reference: 'activitygrid',
    controller: 'activitygridcontroller',
    model: 'activitygridviewmodel',

    initComponent: function() {
        var vm = this.up('app-main').getViewModel();
        var activityStore = Ext.create('ActivityApp.store.activity.ActivityStore');
        vm.set('vmActivityStore', activityStore);
        // activityStore.load();
        Ext.apply(this, {
            store: activityStore,
            columns: [
                {text: 'id', dataIndex: 'activityid'},
                {text: 'name', dataIndex: 'name', flex:1},
                {text: 'description', dataIndex: 'description', flex: 3},
                {text: 'date', dataIndex: 'date', renderer: Ext.util.Format.dateRenderer('d F, Y')},
                {text: 'long dist', dataIndex: 'longdist', renderer: function(val, meta, rec) {
                                                                        return rec.longdistToYN();}},
                {text: 'indoor', dataIndex: 'indoor', renderer: function(val, meta, rec){
                                                                    return rec.indoorToYN();}},
                {text: 'inhouse', dataIndex: 'inhouse', renderer: function(val, meta, rec){
                                                                    return rec.inhouseToYN();}},
                {text: 'daytime', dataIndex: 'daytime', renderer: function(val, meta, rec){
                                                                    return rec.daytimeToYN();}},
                {
                    xtype: 'actioncolumn',
                    width: 50,
                    items: [{
                        icon: 'resources/images/del-icon.png',
                        tooltip: 'Delete',
                        handler: 'onDeleteIconClick'
                    }],
                    stopSelection: false        // Allows use of getSelectionModel().getSelection()
                }
                
            ],
            scrollable: true
        });
        this.callParent();
    },

    bbar: [
        '->',
    {
        xtype: 'button',
        text: 'Refresh',
        iconCls: 'fa fa-refresh',
        handler: 'fireRefreshEvent',
    }],

    listeners: {
        refreshactivities: 'onRefreshActivitiesEvent',
    },
});