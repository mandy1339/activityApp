Ext.define('ActivityApp.view.main.activity.ActivityGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.activitygridcontroller',

    onDeleteIconClick: function() {
        debugger;
        var x = 2
        var y = x + 5;
    },


    onRefreshActivitiesEvent: function(component, p1, p2, p3, p4) {
        debugger;
        var v = this.getView();
        var store = v.getStore();
        console.log('REFRESH DETECTED');
        console.log('xXXxxxXXXxxxxXXXX ' + component.type);
        store.load();
    },

    fireRefreshEvents: function(){
        // console.log('clicked refresh');
        var v = this.getView();
        // debugger;
        v.fireEvent('refreshactivities', this, 95, 105, 125, 135);
        v.fireEvent('refreshactivities', 26);
        v.fireEvent('refreshactivities', 27);
        v.fireEvent('refreshactivities', 28);
    }
});