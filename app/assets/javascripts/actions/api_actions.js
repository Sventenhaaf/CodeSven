
ApiActions = {
  receiveAll: function(snippets){
    AppDispatcher.dispatch({
      actionType: SnippetConstants.SNIPPETS_RECEIVED,
      snippets: snippets
    });
  }
};
