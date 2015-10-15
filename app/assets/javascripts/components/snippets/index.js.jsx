window.SnippetsIndex = React.createClass({
  getInitialState: function(){
    return { snippets: SnippetStore.all() };
  },

  componentDidMount: function () {
    SnippetStore.addChangeListener(this._onChange);
    ApiUtil.fetchAllSnippets();
  },

  _onChange: function () {
    this.setState({ snippets: SnippetStore.all() });
  },

  handleCreate: function(){

  },

  render: function(){
    // debugger;
    return (
      <div>snippetsindex
        <SnippetCreate />
        <SnippetBrowse snippets={this.state.snippets}/>
        <button onClick={this.handleCreate}>Create</button>
      </div>

    );
  }
});
