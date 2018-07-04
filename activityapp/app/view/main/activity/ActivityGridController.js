Ext.define('ActivityApp.view.main.activity.ActivityGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.activitygridcontroller',

    onDeleteIconClick: function(grid, rowIndex, colIndex) {
        var v  = this.getView();
        var vm = this.getViewModel();
        var me = this;
        vm.set('selectedRow', rowIndex);
        vm.set('selectedCol', colIndex);
        Ext.Msg.confirm('Delete Confirmation', 'Are you sure you want to delete this entry?',
                        'onConfirmDelete', me);
    },



    onConfirmDelete: function(choice) {
        var me = this;
        if (choice === 'yes') {
            me.onDeleteYes();
        }
    },



    onDeleteYes: function() {
        //call procedure on grid record at rowIndex passing activityid
        var vm          = this.getViewModel(),
            rowIndex    = vm.get('selectedRow'),
            v           = this.getView(),
            actId       = v.getSelectionModel().getSelection()[0].data.activityid;

        Ext.Ajax.request({
            url: 'api/activity/delactivity.json',
            params: {activityid: actId},

            success: function(response, opts) {
                console.log('success on deletion')
                v.fireEvent('refreshactivities', 'delete button');
            },

            failure: function(response, opts) {
                console.log('server-side failure');
            }
        });
    },



    onRefreshActivitiesEvent: function(msg) {
        var v = this.getView();
        var store = v.getStore();
        console.log('Refresh detected sent from: ' + msg);
        store.load();
    },



    fireRefreshEvent: function(){
        var v = this.getView();
        v.fireEvent('refreshactivities', 'grid');
    },
});