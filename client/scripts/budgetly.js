// Declare collections.
// ...

// for password stuff
// Session.set('overlay', 'loginView');
// Session.set('formView', 'passwordRecoveryForm');
// Session.set('resetPassword', Accounts._resetPasswordToken);

(function() {

  var showReset = true;

  var root = this;

  // Backbone Router.
  var Router = Backbone.Router.extend({

    routes : {
      '': 'home',
      'login' : 'login',
      'budgets' : 'budgets',
      'help' : 'help'
    },

    home : function() {
      if (Accounts._resetPasswordToken && showReset) {
        showReset = false;
        return;
      }
      
      Session.set('overlay', null);
    },

    login: function() {
      Session.set('overlay', 'loginForm');
    },

    budgets : function() {
      Session.set('overlay', null);
      Session.set('currentView', 'budgets');
    },

    help : function() {
      Session.set('overlay', null);
      Session.set('currentView', 'helpView');
    }
    
  });

  // Create our Router.
  root.Router = new Router();

  // Session Variables.
  Session.setDefault('currentView', 'homeView');
  Session.setDefault('overlay', null);

  // Handle the presence of a resetToken separately, since
  // this doesn't work well with Backbone's router.

  if (Accounts._resetPasswordToken) {
    Session.set('overlay', 'loginForm');
    Session.set('resetPassword', Accounts._resetPasswordToken);
    Session.set('formView', 'passwordRecoveryForm');
  }

  Meteor.startup(function () {
    Backbone.history.start({ pushState : true });
  });
}).call(this);
