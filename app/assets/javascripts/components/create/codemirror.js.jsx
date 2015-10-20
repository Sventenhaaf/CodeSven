var CodeMirrorInput = React.createClass({
  componentDidMount: function(){
    var editor = CodeMirror.fromTextArea(document.getElementById("codemirrorcode"), {
      lineNumbers: true,
      matchBrackets: true,
      continueComments: "Enter",
      extraKeys: {"Ctrl-Q": "toggleComment"}
    });
  },

  render: function(){
    
    return (
      <div class="container">
          <div class="row">
              <div id="cminputfield" class="col-md-5">
                <textarea id="codemirrorcode" name="code" >
                  //comments
                </textarea>
              </div>
              <div id="cminputfield" class="col-md-5">
                  Body content
              </div>
          </div>
      </div>




      );
  }
});
