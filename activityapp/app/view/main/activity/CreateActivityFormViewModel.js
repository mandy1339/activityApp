Ext.define('ActivityApp.view.main.activity.CreateActivityFormViewController', {
    extend: 'Ext.app.ViewModel',
    alias:  'viewmodel.createactivityformviewmodel',

    onClickAdd: function() {
        debugger;
        var form = this.lookupReference();
    }
    
    
    
    
    // {
    //     var formulario = this.lookupReference('add-client-form').getForm();
    //     formulario.submit({
    //         clientValidation: true,
    //         url: 'server/client/addclient.json',
    //         success: function(form, action) {
    //             Ext.Msg.alert('SUCCESS', action.result.msg);
    //             console.log(action.result.success);
    //         },
    //         failure: function(form, action) {
    //             switch (action.failureType) {
    //                 case Ext.form.action.Action.CLIENT_INVALID:
    //                     Ext.Msg.alert('Failure', 'Form fields may not be submitted with invalid values');
    //                     break;
    //                 case Ext.form.action.Action.CONNECT_FAILURE:
    //                     Ext.Msg.alert('Failure', 'Ajax communication failed');
    //                     break;
    //                 case Ext.form.action.Action.SERVER_INVALID:
    //                     Ext.Msg.alert('Failure', action.result.msg);
    //                     console.log('FAILED CUZ OF JSON FILE SAYS FALSE');
    //                     console.log(action.result.success);
    //                     console.log(form);
    //            }
    //         }
    //     })
    // }
});