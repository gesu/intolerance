import React from "react";
import { Religions } from "../models/Religion";

function getClassForReligion(religion) {
  if (religion === Religions.ATHEIST) {
    return "religion-atheist";
  } else if (religion === Religions.INTOLERANT_RELIGION) {
    return "religion-intolerant";
  } else if (religion === Religions.TOLERANT_RELIGION) {
    return "religion-tolerant";
  } else if (religion === Religions.STRICT_RELIGION) {
    return "religion-strict";
  }
}

class Person extends React.Component {
  render() {
    const { gender, religion } = this.props;

    return (
      <div className={`person ${gender} ${getClassForReligion(religion)}`} />
    );
  }
}

export default Person;
