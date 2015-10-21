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

  handleClick: function (id) {
    this.props.history.pushState(null, "edit/" + id);
  },

  render: function (){
    return (
      <div>
        <input type="text" className="form-control" placeholder="Snippet Title"></input>
        <ul>
          {this.state.snippets.map(function(snippet){
            return <SnippetItem snippet={snippet} clicks={this.handleClick}/>
          }.bind(this))}
        </ul>
      </div>
    )
  }
})
