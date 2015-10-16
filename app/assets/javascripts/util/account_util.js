window.AccountUtil = {
  logOutUser: function(){
    $.ajax({
      type: "DELETE",
      url: "session",
      success: function(){
        window.location = "/";
      },
    });
  }
};
