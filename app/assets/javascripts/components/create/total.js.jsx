var TotalCreate = React.createClass({
  getInitialState: function(){
    return ({ codestring: "" });
  },

  componentDidMount: function(){
    var editor = CodeMirror.fromTextArea(document.getElementById("totalcodemirror"), {
      lineNumbers: true,
      matchBrackets: true,
      continueComments: "Enter",
      extraKeys: {"Ctrl-Q": "toggleComment"},

    });

    var that = this;
    var ert = editor;

    editor.on("change", function(cm, change) {
      var letter = change.text[0];
      // debugger
      // console.log(change.text[0]);
      that.handleChange(cm.getValue());
    });
  },

  // onChangezz: function (cm, change) {
  //   debugger
  //    document.getElementById("interpreter_textarea").value = editor.getValue();
  // },

  handleChange: function(letter){
    this.setState({codestring: letter});
    console.log(this.state.codestring);
  },

  render: function(){
    return (
      <div className="row">
          <div className="col-md-1" id="totalleftmost">margin left</div>
          <div className="col-md-10" id="totalinterpreter">
            <div className="col-md-3">
              <textarea id="totalcodemirror"></textarea>
            </div>
            <form id="interpreter_form" autocomplete="off">
                <div id="multiline" className="col-md-2">
                  <textarea id="interpreter_textarea" name="input_textarea" type="text" className="textbox form-control" rows="10" value={this.state.codestring}>

                  </textarea>
                  <button type="submit" form="interpreter_form" value="Submit">Submit</button>
                </div>
                <div className="col-md-2" id="totalmiddle">this is blank space</div>
                <div id="interpreter_area" className="col-md-5">
                    <div id="interpreter_output" value="hello"></div>
                </div>
            </form>
        </div>
        <div className="col-md-1" id="totalrightmost">margin right</div>
      </div>
    );
  }
});
