import React from "react";

class Home extends React.Component {
    constructor() {
      super();
      this.state = {
        input: {},
        errors: {}
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
      let input = this.state.input;
      input[event.target.name] = event.target.value;
      this.setState({
        input
      });
    }
    handleSubmit(event) {
      event.preventDefault();
      if (this.validate()) {
        console.log(this.state);
        let input = {};
        
        input["password"] = "";
        input["confirm_password"] = "";
        this.setState({ input: input });
        if(this.state.input["password"] === "AvInmeYrmSeYwTbHs"){
          alert("Digital rendering of mental scape successful. Entry point : /maelstrom");
        }else if(this.state.input["password"] === "bGuuufRDoPxXAbaUi"){
          alert("Digital rendering of mental scape successful. Entry point : /absurdity");
        }else if(this.state.input["password"] === "gtkaerpbkqwftiknp"){
          alert("Digital rendering of mental scape successful. Entry point : /watchtower");
        }else if (this.state.input["password"] === "truthandtreachery") {
          alert("Digital rendering of mental scape successful. Entry point : /thorns");
        }else if (this.state.input["password"] === "HANWMLHBBCDVNHMMB"){
          alert("Digital rendering of mental scape successful. Entry point : /narrationnotes");
        }else if (this.state.input["password"] === "NOLLNODWDDDLDOPPT"){
          alert("Digital rendering of mental scape successful. Entry point : /redactionnotes");
        }else if (this.state.input["password"] === "MarcAndreTremblay"){
          alert("Digital rendering of mental scape successful. Entry point : /melodious");
        }else if (this.state.input["password"] === "Beneath the Brine"){
          alert("Digital rendering of mental scape successful. Entry point : /fragments. Finally.");
        }  else if (this.state.input["password"] === "SilvermoonEstates"){
          alert("Digital rendering of mental scape successful. Entry point : /lunargent");
        }  else if (this.state.input["password"] === "MilliaArchambault"){
          alert("Digital rendering of mental scape successful. No entry point available. Workshop conditions not met.");
        }  else{
          alert("Mental scape rendering key invalid. Please try again. For more information, ask Quill.")
        }
       //alert("Current events incongruent with story resolution. Key errors: Millia. Closs. Quill. Faun. Story to be retold.")
      }
    }
    validate() {
      let input = this.state.input;
      let errors = {};
      let isValid = true;   
      return isValid;
    }
    render() {
      return (
        <div class="main-div">
          <form onSubmit={this.handleSubmit}>         
            <div class="form-group">
              <label for="password">Render code:</label>
              <input
                type="password"
                name="password"
                value={this.state.input.password}
                onChange={this.handleChange}
                class="form-control"
                placeholder="Enter render code"
                id="password"
              />
              <div className="text-danger">{this.state.errors.password}</div>
            </div>
            
            <input
              type="submit"
              value="Submit"
              class="btn btn-success submit_btn"
            />
          </form>
          <h6>A collaboration between The Leaden Mirror and The Silent Arrow / QC - August 2023</h6>
        </div>
      );
    }
  }
  export default Home;