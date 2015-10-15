window.ApiUtil = {
  fetchAllSnippets: function () {
      $.ajax({
        url: "api/snippets",
        success: function (snippets) {
          ApiActions.receiveAll(snippets);
        }
      });
    },

  saveSnippet: function(data){
    $.post('api/snippets', {snippet: data}, function(snippet) {
      ApiActions.receiveAll([snippet]);
    });
  }
};


//
// createBench: function(data){
//     $.post('api/benches', { bench: data }, function(bench) {
//       ApiActions.receiveAll([bench]);
//     });
//   },
