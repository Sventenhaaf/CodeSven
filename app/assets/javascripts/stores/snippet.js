(function(root){
  var SNIPPETS_CHANGE_EVENT = "snippetsChange";

  var _snippets = [];

  var resetSnippets = function(snippets){
    _snippets = snippets.slice(0);
  };

  root.SnippetStore = $.extend({}, EventEmitter.prototype, {
    all: function(){
      return _snippets.slice(0);
    },

    addChangeListener: function(callback){
      this.on(SNIPPETS_CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback){
      this.removeListener(SNIPPETS_CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function (payload) {
      switch(payload.actionType) {
        case SnippetConstants.SNIPPETS_RECEIVED:
          resetSnippets(payload.snippets);
          SnippetStore.emit(SNIPPETS_CHANGE_EVENT);
          break;
      }
    })

  });
})(this);
