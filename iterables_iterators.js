
//CREANDO UNA FUNCION QUE TOME EL METODO SYMBOL.ITERATOR QUE ITERE CUALQUIER VALOR ITERABLE
// const iteradorVar = iterable[Symbol.iterator]();

// console.log(iterable);
// console.log(iteradorVar);
const iterable = [1, 2, 3, 4, 5];
const iterador = (value) => {
    iter = value[Symbol.iterator]();
    let next = iter.next();
    while (!next.done) {
        next = iter.next()
        console.log(next.value)
    }
};
iterador(iterable);

//la forma obvia que no pude ver xd
const printIterator = (value) => {
  for (const element of value[Symbol.iterator]()) {
    console.log(element);
  }
}

printIterator(iterable)