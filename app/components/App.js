import React from 'react';
import PersonComponent from './Person';
import Person from '../models/Person';
import {marry} from '../actions';
import {Religions, getRandomTolerantReligion} from '../models/Religion';

const MAX_PEOPLE = 10000;

function createPeople() {
    let people = [];
    for(let i = 0; i < MAX_PEOPLE; i++) {
        people = people.concat(new Person({
            religion: (Math.random() - 0.99 > 0) ? Religions.INTOLERANT_RELIGION : getRandomTolerantReligion(),
        }));
    }

    return people;
}

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            people: createPeople(),
        };
    }

    loop() {
        let unmarried = this.state.people.slice();
        let nextGeneration = [];

        unmarried.forEach((person) => {
            if (!person.married) {
                for (let i = 0; i < unmarried.length; i++) {
                    if (person.id === unmarried[i].id) {
                        continue;
                    }

                    if (!unmarried[i].married
                        && unmarried[i].gender !== person.gender
                    ) {
                        unmarried[i].married = true;
                        person.married = true;
                        nextGeneration = nextGeneration.concat(marry(person, unmarried[i]));
                        break;
                    }
                }
            }
        });

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
                {this.state.people.map((person) => {
                    return(
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
