if (Meteor.isClient) {

  Template.navigation.helpers({
    displayName: function() {
      var user = Meteor.user();
      return (user.profile && user.profile.name) || user.username;
    }
  });

  Template.navigation.events({
    'click .login' : function() {
       Session.set('overlay', 'loginForm');
       Router.navigate('login');
       return false;
    },

    'click .logout' : function() {
       Meteor.logout();
       Router.navigate('');
       return false;
    },

    'click .home' : function() {
       Router.navigate('');
       return false;
    },

    'click .budgets' : function() {
       Router.navigate('budgets');
       return false;
    },

    'click .help' : function() {
      Router.navigate('help');
      return false;
    }

  });

  function addClass() {
    $('#overlay').addClass('active');
  }

  Template.overlay.rendered = function() {
    if (Session.get('overlay')) {
      _.defer(addClass);
    }
  };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}