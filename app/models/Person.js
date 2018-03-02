import {getRandomReligion} from './Religion';

let LAST_UNIQUE_ID = 1000;
function getUniqueId() {
    return LAST_UNIQUE_ID++;
}

class Person {
    constructor({id, religion, gender, spouse}) {
        this.id = id || getUniqueId();
        this.religion = religion || getRandomReligion();
        this.gender = gender || (Math.random() - 0.5 > 0 ? 'male' : 'female');
        this.married = false;
    }
}

export default Person;
