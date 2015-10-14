
window.Index = React.createClass({
  render: function () {
    return(
      <div>
        <div className="snippets-index">
          <SnippetsIndex />
        </div>
        {this.props.children}
      </div>
    );
  }
});
