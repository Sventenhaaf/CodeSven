(function(root){
  var USER_CHANGE_EVENT = "userChange";

  var _username = "";

  var resetUsername = function(username){
    _username = username;
  };

  root.UserStore = $.extend({}, EventEmitter.prototype, {
    username: function(){
      return _username;
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
          debugger
          resetUsername(payload.username);
      }
    })
  });
})(this);
