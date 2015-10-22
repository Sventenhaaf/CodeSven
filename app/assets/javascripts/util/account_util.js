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
      success: function(feedback){
        if (feedback.username) {
          ApiActions.loggedIn(feedback);
        }
        else {
          ApiActions.failedLogin(feedback.errorcode);
        }
      },
      error: function(errorcode){
      }
    });
  }
};
