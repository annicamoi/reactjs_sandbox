import React, { Component } from "react";

import Form from "./Components/Form";
import View from "./Components/View";
import Popup from "./Components/Popup";
import NotesList from "./Components/NotesList";

class App extends Component {
  state = {
    notes: [],
    inputData: {
      firstname: "",
      lastname: "",
      phonenumber: "",
      message: "",
      role: "",
    },
    showPopup: false,
  };
  componentDidMount() {
    fetch("http://localhost:3001/notes")
      .then((response) => response.json())
      .then((data) => this.setState({ notes: data }));
  }

  changeHandler = (e) => {
    this.setState({
      inputData: { ...this.state.inputData, [e.target.name]: e.target.value },
    });
  };

  popupHandler = (e) => {
    this.setState({ showPopup: true });
    e.preventDefault();
  };

  sendDataHandler = () => {
    const requestOptions = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(this.state.inputData),
    };
    fetch("http://localhost:3001/notes", requestOptions);
    alert("Note is posted", window.location.reload());
  };

  //** this says that take the data from Json */

  render() {
    return (
      <div>
        <Form change={this.changeHandler} submit={this.popupHandler} />
        <View {...this.state.inputData} />
        <NotesList notes={this.state.notes} />
        {this.state.showPopup && (
          <Popup {...this.state.inputData} submit={this.sendDataHandler} />
        )}
      </div>
    );
  }
}

export default App;

