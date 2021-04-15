import React, { Component } from "react";
import SearchBox from "./src/Components/SearchBox/SearchBox";
import AnimalCard from "./src/Components/Animals/AnimalCard";

import { animals } from "./src/Components/Animals/animals";

class AnimalsList extends Component {
  state = {
    animals: animals,
    searchfield: "",
  };

  clickHandler = (name) => {
    alert("Hello, I am " + name);
  };

  onSearchChange = (e) => {
    this.setState({
      searchfield: e.target.value,
    });
  };

  render() {
    const animalFilter = this.state.animals.filter((animal) => {
      return animal.name
        .toLocaleLowerCase()
        .includes(this.state.searchfield.toLocaleLowerCase());
    });

    const animals = animalFilter.map((animal) => {
      return (
        <AnimalCard
          name={animal.name}
          key={animal.name}
          click={() => this.clickHandler(animal.name)}
        />
      );
    });

    return (
      <div>
        <SearchBox search={this.onSearchChange} />
        <div className="animalList">{animals}</div>
      </div>
    );
  }
}

export default AnimalsList;