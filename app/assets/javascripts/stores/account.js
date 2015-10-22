(function(root){
  var USER_CHANGE_EVENT = "userChange";

  var _username = "";
  var _error = "";

  var resetUsername = function(username){
    _username = username;
  };

  var resetError = function(errorcode){
    _error = errorcode;
  };

  root.UserStore = $.extend({}, EventEmitter.prototype, {
    username: function(){
      return _username;
    },
    errorcode: function(){
      return _error;
    },
    addChangeListener: function(callback){
      this.on(USER_CHANGE_EVENT, callback);
    },
    dispatcherID: AppDispatcher.register(function (payload) {
      switch(payload.actionType) {
        case SnippetConstants.USER_LOGGED_IN:
          resetUsername(payload.username.username);
          UserStore.emit(USER_CHANGE_EVENT);
          break;
        case SnippetConstants.USER_LOGGED_OUT:
          resetUsername(payload.username);
          break;
        case SnippetConstants.FAILED_LOGIN:
          resetError(payload.errorcode);
          UserStore.emit(USER_CHANGE_EVENT);
      }
    })
  });
})(this);
