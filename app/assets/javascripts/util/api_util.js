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

    likeSnippet: function(snippet_id){
      $.ajax({
        type: "POST",
        url: "api/likes",
        data: {like: {snippet_id: snippet_id}},
        success: function(like){
          ApiActions.handleAddedLike(like);
        },
        error: function(errorcode){
        }
      });
    },

    unlikeSnippet: function(like_id){
      $.ajax({
        type: "DELETE",
        url: "api/likes/" + like_id,
        data: {like_id: like_id},
        success: function(like){
          ApiActions.handleUnlike(like);
        },
        error: function(errorcode){
        }
      });
    }

};
