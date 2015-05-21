Template.overlay.helpers({

  overlay: function(){
    return Session.get('overlay');
  },

  loginForm: function(){
    return Session.equals('overlay', 'loginForm');
  }

});

// Overlay Events
Template.overlay.events({

  'click .close' : function(e, t){

    if (!Session.get('currentView')) {
      Router.navigate('/');
    }

    $('#overlay').removeClass('active');
    Meteor.setTimeout(function(){
      Session.set('overlay', null);
    }, 400);
    
    return false; 
  }

});

//Template.overlay.preserve['#panel'];