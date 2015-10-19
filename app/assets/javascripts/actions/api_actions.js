
ApiActions = {
  receiveAll: function(snippets){
    AppDispatcher.dispatch({
      actionType: SnippetConstants.SNIPPETS_RECEIVED,
      snippets: snippets
    });
  },
  handleSaveError: function(errorcode){
    AppDispatcher.dispatch({
      actionType: SnippetConstants.FAILED_DB_SAVE,
      errorcode: errorcode
    });
  },
  receiveUser: function(username){
    AppDispatcher.dispatch({
      actionType: SnippetConstants.USER_RECEIVED,
      username: username
    });
  },
  loggedIn: function(username){
    AppDispatcher.dispatch({
      actionType: SnippetConstants.USER_LOGGED_IN,
      username: username
    });
  },
  loggedOut: function(){
    AppDispatcher.dispatch({
      actionType: SnippetConstants.USER_LOGGED_OUT,
      username: ""
    });
  }
};
