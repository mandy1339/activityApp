Ext.define('ActivityApp.view.main.user.UserPanelController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.userpanelcontroller',

    onUserSelected: function(sender, record) {
        debugger;
        var vm = this.getViewModel();
        var me = this;
        var v  = this.getView();
        vm.set('selectedusername', record.data.username);
        var testvar = vm.get('selectedusername');
        debugger;
    }



});