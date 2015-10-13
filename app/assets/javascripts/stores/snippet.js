(function(root){
  var _snippets = [];

  root.SnippetStore = $.extend({}, EventEmitter.prototype, {
    all: function(){
      return _snippets.slice(0);
    }
  });
})(this);
