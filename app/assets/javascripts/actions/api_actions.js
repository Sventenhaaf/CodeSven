
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
  }
};
