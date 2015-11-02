var SnippetBrowse = React.createClass({

  getInitialState: function(){
    return { snippets: SnippetStore.all(),
              searchString: ''};
  },

  handleChange: function(e){
    this.setState({ searchString: e.target.value });
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
    var snippets = this.state.snippets,
        searchString = this.state.searchString.trim().toLowerCase();
    if(searchString.length > 0){
      snippets = snippets.filter(function(l){
          return l.title.toLowerCase().match( searchString );
      });
    }

    return (
      <div>
        <input
          type="text"
          className="form-control"
          value={this.state.searchString}
          onChange={this.handleChange} placeholder="Search Snippet Titles" />
        <ul className="browseul">
          {snippets.map(function(snippet){
            return <SnippetItem key={snippet.id} snippet={snippet} />
          }.bind(this))}
        </ul>
      </div>
    )
  }
})
