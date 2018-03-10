class Religion {
  constructor({ name }) {
    this.name = name;
  }
}

export function getRandomReligion() {
  const religions = Object.keys(Religions);
  return Religions[religions[~~(Math.random() * religions.length)]];
}

export function getRandomTolerantReligion() {
  const religions = Object.keys(Religions).filter(religion => {
    return religion !== INTOLERANT_RELIGION;
  });

  return Religions[religions[~~(Math.random() * religions.length)]];
}

export const ATHEIST = "ATHEIST";
export const INTOLERANT_RELIGION = "INTOLERANT_RELIGION";
export const TOLERANT_RELIGION = "TOLERANT_RELIGION";
export const STRICT_RELIGION = "STRICT_RELIGION";

export const Religions = {
  ATHEIST: new Religion({
    name: "Atheist"
  }),

  INTOLERANT_RELIGION: new Religion({
    name: "Intolerant Minority Religion"
  }),

  TOLERANT_RELIGION: new Religion({
    name: "Tolerant Majority Religion"
  }),

  STRICT_RELIGION: new Religion({
    name: "Strict Minority Religion"
  })
};
