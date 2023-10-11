
// Funciones 

// Funciones tradicionales

function greeting() {
    console.log("Hola !!!")
}

greeting();

// Funciones con parámetro

function greetingAPerson( name ) {
    console.log(`Hola ${name}`)
}

greetingAPerson("Yuri");

// Recibir un objeto por parámetro

const object = {
    name: "Martillo",
    property: "Martillo que martilla"
}

function showObject({name, property}) {
    console.log(name)
    console.log(property)
}

showObject(object)

// Funciones con retorno

function sum(n1, n2) {
    return n1 + n2
}

const resultSum = sum(10, 5);
console.log(resultSum);

// Funciones flecha

const showName = (name, lastName) => {
    const message = `Hola ${name} ${lastName}`
    // console.log(message)
    return message;
}

const fullName = showName("Gonzalo", "Perez");

console.log(fullName);

// Spreed Operator

const person = {
    name: "Juan",
    age: 22,
    address: "Avenida Falsa 123"
};

console.log(person)

const personFullName = {
    ...person,
    lastName: "Perez"
}

console.log(personFullName)

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1, ...arr2];

console.log(arr3)

// Método de array 

const products = [
    {
      id:1,
      title: "Pantalón",
      price: 200,
    },
    {
      id: 2,
      title: "Camisa",
      price: 100,
    },
    {
      id: 3,
      title: "Corbata",
      price: 30,
    },
    {
      id: 4,
      title: "Zapato",
      price: 340,
    },
  ];

  console.log(products)

  const newProducts = products.map( product => {
    const newProduct = {
        ...product,
        stock: 0
    }

    return newProduct;
  });
  
  console.log(newProducts)

  // Filter

  const productsFilter = products.filter( product => product.price >= 100);

  console.log(productsFilter);