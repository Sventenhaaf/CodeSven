var SnippetBrowse = React.createClass({
  getInitialState: function(){
    return { snippets: SnippetStore.all() };
  },

  componentDidMount: function () {
    SnippetStore.addChangeListener(this._onChange);
    ApiUtil.fetchAllSnippets();
  },

  componentWillUnmount: function(){
    SnippetStore.removeChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({ snippets: SnippetStore.all() });
  },

  render: function (){

    return (
      <div>
        <ul>All snippets index
          {this.state.snippets.map(function(snippet){
            return <SnippetItem snippet={snippet}/>
          })}
        </ul>
      </div>
    )
  }
})
