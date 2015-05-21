if (Meteor.isClient) {

  Template.application.helpers({
    homeView: function() {
      return Session.equals('currentView', 'homeView');
    },

    budgetsView: function() {
      return Session.equals('currentView', 'budgetsView');
    },

    helpView: function() {
      return Session.equals('currentView', 'helpView');
    }
  });
  
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}



