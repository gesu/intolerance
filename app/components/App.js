import React from "react";
import PersonComponent from "./Person";
import Person from "../models/Person";
import { marry } from "../actions";
import { Religions, getRandomTolerantReligion } from "../models/Religion";

const MAX_PEOPLE = 10000;

function createPeople() {
  let people = [];
  for (let i = 0; i < MAX_PEOPLE; i++) {
    people = people.concat(
      new Person({
        religion:
          Math.random() - 0.99 > 0
            ? Religions.INTOLERANT_RELIGION
            : getRandomTolerantReligion()
      })
    );
  }

  return people;
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      people: createPeople()
    };
  }

  loop() {
    let people = this.state.people;
    let nextGeneration = [];

    for (let i = 0; i < people.length; i++) {
      for (let j = 0; j < people.length; j++) {
        if (i === j || people[i].married || people[j].married) {
          continue;
        }

        if (people[i].gender !== people[j].gender) {
          nextGeneration = nextGeneration.concat(marry(people[i], people[j]));
          people[i].married = true;
          people[j].married = true;
          break;
        }
      }
    }

    this.setState({
      people: nextGeneration
    });

    setTimeout(() => {
      this.loop();
    }, 1000);
  }

  componentDidMount() {
    this.loop();
  }

  render() {
    return (
      <div>
        {this.state.people.map(person => {
          return (
            <PersonComponent
              key={person.id}
              gender={person.gender}
              religion={person.religion}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
