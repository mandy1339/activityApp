Ext.define('ActivityApp.store.user.UserStore', {
    extend: 'Ext.data.Store',
    
    model: 'ActivityApp.model.user.UserModel',

    proxy: {
        type:   'ajax',
        url:    'api/user/userdata.json',

        reader: {
            type:           'json',
            rootProperty:   'data',
            totalProperty:  'numRows'
        }
    }
    // ,


    // proxy: {
    //     type: 'ajax',
    //     url: '/api/user/userdatastatic.json',
        
    //     reader: {
    //     type: 'json',            
    //     rootProperty: 'data',
    //     totalProperty: 'numRows'
    //     }
    // }
});