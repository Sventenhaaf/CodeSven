var TotalCreate = React.createClass({
  // componentDidMount: function(){
  //   var editor = CodeMirror.fromTextArea(document.getElementById("interpreter_textarea"), {
  //     lineNumbers: true,
  //     matchBrackets: true,
  //     continueComments: "Enter",
  //     extraKeys: {"Ctrl-Q": "toggleComment"}
  //   });
  // },

  render: function(){
    return (
      <div className="row">
          <div className="col-md-1" id="totalleftmost">margin left</div>
          <div className="col-md-10" id="totalinterpreter">
            <form id="interpreter_form" autocomplete="off">
                <div id="multiline" className="col-md-5">
                    <textarea id="interpreter_textarea" name="input_textarea" type="text" className="textbox form-control" rows="10">

                    </textarea>
                </div>
                <div className="col-md-2" id="totalmiddle">this is blank space</div>
                <div id="interpreter_area" className="col-md-5">
                    <div id="interpreter_output" value="hello"></div>
                </div>
                <button type="submit" form="interpreter_form" value="Submit">Submit</button>
            </form>
        </div>
        <div className="col-md-1" id="totalrightmost">margin right</div>
      </div>
    );
  }
});
