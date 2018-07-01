Ext.define('ActivityApp.view.main.activity.ActivityGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.activitygridcontroller',

    onDeleteIconClick: function() {
        debugger;
        var x = 2
        var y = x + 5;
    },


    onRefreshActivitiesEvent: function() {
        // debugger;
        var v = this.getView();
        var store = v.getStore();
        console.log('REFRESH DETECTED');
        console.log('xXXxxxXXXxxxxXXXX');
        store.load();
    },

    fireRefreshEvents: function(){
        // console.log('clicked refresh');
        var v = this.getView();
        // debugger;
        v.fireEvent('refreshactivities', v.up('toolbar'));
        v.fireEvent('refreshactivities', v.up('activitygrid'));
        v.fireEvent('refreshactivities', v);
        v.fireEvent('refreshactivities', v.up('activitysidebar'));
    }
});