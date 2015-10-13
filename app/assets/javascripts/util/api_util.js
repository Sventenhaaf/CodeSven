window.ApiUtil = {
  fetchAllSnippets: function () {
      $.ajax({
        url: "api/snippets",
        success: function (snippets) {
          ApiActions.receiveAll(snippets);
        }
      });
    },
};
