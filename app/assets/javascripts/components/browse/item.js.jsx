var SnippetItem = React.createClass({
  render: function (){
    var title = this.props.snippet.title;
    var body = this.props.snippet.body;
    var author = this.props.snippet.author_id;
    return (
      <div class="container">
        <div>{title}</div>
        <div><pre>{body}</pre></div>
        <div>Written By: {author}</div>
      </div>
    )
  }
})
