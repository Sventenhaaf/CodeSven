window.SnippetsIndex = React.createClass({
  getInitialState: function(){
    return { snippets: SnippetStore.all() };
  },

  componentDidMount: function () {
    SnippetStore.addChangeListener(this._fetchChanged);
    ApiUtil.fetchAllSnippets();   
  },

  render: function(){
    return (
      <ul>hello
        {this.state.snippets.map(function(snippet){
          return <SnippetItem snippet={snippet}/>
        })}
      </ul>
    );
  }
});
