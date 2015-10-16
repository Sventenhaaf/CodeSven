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
    },




  // saveSnippet: function(data){
  //
  //   $.post('api/snippets', {snippet: data}, function(snippet) {
  //     debugger;
  //     ApiActions.receiveAll([snippet]);
  //   });
  // }
};


//
// createBench: function(data){
//     $.post('api/benches', { bench: data }, function(bench) {
//       ApiActions.receiveAll([bench]);
//     });
//   },
