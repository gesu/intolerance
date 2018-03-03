import {Religions, getRandomReligion} from './models/Religion';
import Person from './models/Person';

export function marry(person_1, person_2) {
    const numberOfChildren = Math.floor(Math.random() * 6);
    let children = [];

    for (let i = 0; i < numberOfChildren; i++) {
        let childReligion;

        if (person_1.religion === Religions.INTOLERANT_RELIGION
            || person_2.religion === Religions.INTOLERANT_RELIGION
        ) {
            childReligion = Religions.INTOLERANT_RELIGION;
        } else {
            const roll = Math.random();

            if (roll < 0.25) {
                childReligion = person_1.religion;
            } else if (roll > 0.25 && roll < 0.50) {
                childReligion = person_2.religion;
            } else if (roll > 0.50 && roll < 0.75) {
                childReligion = getRandomReligion();
            } else {
                childReligion = Religions.ATHEIST;
            }
        }

        children = children.concat(new Person({
            religion: childReligion,
        }));
    }

    return children;
}
