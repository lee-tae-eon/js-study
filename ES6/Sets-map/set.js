const weakSet = new WeakSet([]);

const obj = { lee: true };

weakSet.add(obj);

console.log(weakSet);

console.log(weakSet.has(obj));

weakSet.add({ tae: true });

console.log(weakSet);
