Ext.define('ActivityApp.view.main.activity.CreateActivityFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.createactivityformcontroller',

    onClickAdd: function() {
        var form = this.lookupReference('createactivityform').getForm();

        form.submit({
            clientValidation: true,
            url: 'api/activity/addactivity.json',
            // params: {activityid: null},
            success: function(form, response) {
                debugger;
                console.log('success');
                Ext.Msg.alert('Success', 'successfully inserted ' + response.result.data.affectedRows + ' activity');
            },
            failure: function(form, response) {
                console.log('failure');
                console.log(response);
                debugger;
                Ext.MessageBox.show({
                    title: 'FAILURE',
                    msg: response.errorMessage,
                    icon: Ext.MessageBox.ERROR,
                    buttons: Ext.Msg.OK
                });
            }
        });
    }
    
    
    
    
    // {
    //     var formulario = this.lookupReference('add-client-form').getForm();
    //     formulario.submit({
    //         clientValidation: true,
    //         url: 'server/client/addclient.json',
    //         params: {activityid: null},
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