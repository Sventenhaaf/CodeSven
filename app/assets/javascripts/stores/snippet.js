(function(root){
  var SNIPPETS_CHANGE_EVENT = "snippetsChange";
  var SNIPPETS_ERROR_EVENT = "snippetsError";

  var _snippets = [];
  var _errors = [];

  var resetSnippets = function(snippets){
    _snippets = snippets.slice(0);
  };

  var resetErrors = function(errors){
    if (errors) {
      if (errors.responseText === "not logged in"){
        _errors = ["Please Log In or Sign Up to Save Code Snippets"];
      }
      else if (errors.responseText === "title or body were empty"){
        _errors = ["Please fill out both Title and Code Field"];
      }
    }
    else {
      _errors = ["Success"];
    }
  };

  var addLike = function(like){
    var userid = like.user_id;
    for (var i = 0; i < _snippets.length; i++) {
      if (_snippets[i].id === like.snippet_id){
        _snippets[i].likes += 1;
      }
    }
  };

  root.SnippetStore = $.extend({}, EventEmitter.prototype, {
    all: function(){
      return _snippets.slice(0);
    },
    allErrors: function(){
      return _errors.slice(0);
    },

    addChangeListener: function(callback){
      this.on(SNIPPETS_CHANGE_EVENT, callback);
    },

    addInputChangeListener: function(callback){
      this.on(SNIPPETS_ERROR_EVENT, callback);
    },

    removeChangeListener: function(callback){
      this.removeListener(SNIPPETS_CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function (payload) {
      switch(payload.actionType) {
        case SnippetConstants.SNIPPETS_RECEIVED:
          resetSnippets(payload.snippets);
          resetErrors();
          SnippetStore.emit(SNIPPETS_CHANGE_EVENT);
          SnippetStore.emit(SNIPPETS_ERROR_EVENT);
          break;
        case SnippetConstants.FAILED_DB_SAVE:
          resetErrors(payload.errorcode[0]);
          SnippetStore.emit(SNIPPETS_ERROR_EVENT);
          break;
        case SnippetConstants.ADDED_LIKE:
          addLike(payload.like);
          SnippetStore.emit(SNIPPETS_CHANGE_EVENT);
          break;
      }
    })

  });
})(this);
