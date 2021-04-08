import React, { Component } from "react";
import BoxCard from "./BoxCard";
 
class BoxesList extends Component {
  state = {
    persons: [
      {
        name: "Annika",
        age: 32,
        title: "CEO",
      },
      {
        name: "Kati",
        age: 42,
        title: "designer",
      },
      {
        name: "Sammy",
        age: 29,
        title: "scrum",
      },
    ],
  };
  handleClick = () => {
    this.setState({
      persons: [
        {
          name: "Marika",
          age: 31,
          title: "CEO",
        },
        {
          name: "Boss",
          age: 35,
          title: "designer",
        },
        {
          name: "YES",
          age: 32,
          title: "scrum",
        },
      ],
    });
  };
  render() {
    return (
      <main>
        <button onClick={this.handleClick}>Click me from main</button>
        <BoxCard
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          title={this.state.persons[0].title}
        />
        <BoxCard
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          title={this.state.persons[1].title}
        />
        <BoxCard
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          title={this.state.persons[2].title}
        />
      </main>
    );
  }
}

export default BoxesList;