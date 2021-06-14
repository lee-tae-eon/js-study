class ObjectUtilities {
  static mergeObjects = (a, b) => {
    const objectA = a;
    const objectB = b;
    return { ...objectA, ...objectB };
  };
  static removePassword = ({ password, ...rest }) => rest;

  static freezeObj = (clean) => Object.freeze(clean);

  static getOnlyValues = (freezed) => Object.values(freezed);

  static getOnlyProperties = (freezed) => Object.keys(freezed);
}

const objA = {
  name: "Nicolas",
  favFood: "Kimchi",
};

const objB = {
  password: "12345",
};

// const user = ObjectUtilities.mergeObjects(objA, objB);
const user = ObjectUtilities.mergeObjects(objA, objB);
console.log("user:", user);

const cleanUser = ObjectUtilities.removePassword(user);
console.log(cleanUser);

const frozenUser = ObjectUtilities.freezeObj(cleanUser);
console.log(Object.isFrozen(frozenUser));

const onlyValues = ObjectUtilities.getOnlyValues(frozenUser);
console.log(onlyValues);

const onlyProperties = ObjectUtilities.getOnlyProperties(frozenUser);
console.log(onlyProperties);

// const cleanUser = ObjectUtilities.removePassword(user);
// console.log("cleanUser:", cleanUser);
