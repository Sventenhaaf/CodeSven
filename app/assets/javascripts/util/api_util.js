window.ApiUtil = {
  fetchAllSnippets: function () {
      $.ajax({
        url: "api/snippets",
        success: function (snippets) {
          ApiActions.receiveAll(snippets);
        }
      });
    },

    saveSnippet: function(data) {
      $.ajax({
        type: "POST",
        url: "api/snippets",
        data: {snippet: data},
        success: function(snippet){
          ApiActions.receiveAll([snippet]);
        },
        error: function(errorcode) {
          ApiActions.handleSaveError([errorcode]);
        }
      });
    }

};
