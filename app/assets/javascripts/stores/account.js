(function(root){
  var ACCOUNT_CHANGE_EVENT = "accountChange";

  var _username = "";

  var resetUserName = function(username){
    _username = username;
  };

  root.AccountStore = $.extend({}, EventEmitter.prototype, {
    user: function(){
      return _username;
    },

    addChangeListener: function(callback){
      this.on(ACCOUNT_CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback){
      this.removeListener(ACCOUNT_CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function(payload) {

      switch(payload.actionType) {
        case SnippetConstants.USER_RECEIVED:

          resetUserName(payload.username);
          AccountStore.emit(ACCOUNT_CHANGE_EVENT);
          break;
      }
    })
  });

})(this);
