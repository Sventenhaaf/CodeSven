window.AccountUtil = {
  logOutUser: function(){
    $.ajax({
      type: "DELETE",
      url: "session",
      success: function(){
        window.location = "/";
      },
    });
  },

  loginUser: function(username, password){
    $.ajax({
      type: "POST",
      url: "session",
      data: { user: { username: username, password: password}},
      success: function(username){
        ApiActions.loggedIn(username);
      },
      error: function(errorcode){
      }
    });
  }
};
