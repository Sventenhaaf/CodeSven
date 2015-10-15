var SnippetItem = React.createClass({
  render: function (){
    var title = this.props.snippet.title;
    var body = this.props.snippet.body;
    return (
      <ul>
        <li>{title}:&nbsp;&nbsp;&nbsp;<span className="code">{body}</span></li>
      </ul>
    )
  }
})
