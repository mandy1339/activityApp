Ext.define('ActivityApp.view.main.user.UserPanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.userpanelcontroller',

    onUserSelected: function(sender, record) {
        var vm = this.getViewModel();
        var me = this;
        var v  = this.getView();
        vm.set('selectedusername', record.data.username);
        var testvar = vm.get('selectedusername');
    },

    onUserSelected2: function(sender, record) {
        // debugger;
        var v = this.getView();
        var panelCenter = this.lookupReference('panelCenter');
        panelCenter.update(record.data);
    }
});