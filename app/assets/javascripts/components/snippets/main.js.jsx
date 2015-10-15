var MainView = React.createClass({

  render: function(){
    console.log("main");
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});
