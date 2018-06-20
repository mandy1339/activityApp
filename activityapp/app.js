/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'ActivityApp.Application',

    name: 'ActivityApp',

    requires: [
        // This will automatically load all classes in the ActivityApp namespace
        // so that application classes do not need to require each other.
        'ActivityApp.*'
    ],

    // The name of the initial view to create.
    mainView: 'ActivityApp.view.main.Main'
});
