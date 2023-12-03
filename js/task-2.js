// короткий запис звернення до індексу
//  останнього елемента масиву

// let fruits = ["Apple", "Orange", "Plum"];
// console.log(fruits.at(-1));
// console.log(fruits.length);
// замість console.log(fruits[fruits.length-1]);


// let count = 0;

// while (count < 10) {  
//   count += 1;
//   console.log(`Count: ${count}`);
// }

// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }



// let count = 0;

// do {
// 	console.log(`Count: ${count}`);
// 	count += 1;
// } while (count < 5);


// function calculateTotal(number) {
//   let sum = 0;
//   for (let i = 1; i <= number; i++) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(calculateTotal(1));


// function getOrderQuantity(order) {
//   return order.length;
// }
// console.log(getOrderQuantity(["apple", "peach", "pear", "banana"]));


// function createArrayOfNumbers(min, max) {
//     let result  = [];
//       for (let i = min; i <= max; i++) {
//     result.push(i);
//   }
//   return result;
// }
// console.log(createArrayOfNumbers(14, 17));


// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i++) {
//     total += order[i];
//   }
//   return total;
// }

// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));


// function checkStorage(storage, item) {
//   item = item.toLowerCase();
//   for (let i = 0; i < storage.length; i++) {
//     if (storage[i].toLowerCase() === item) {
//       return `${storage[i]} is available to order!`;
//     }
//   }
//   return "Sorry! We are out of stock!";
// }

// console.log(checkStorage(["apple", "plum", "pear"], "1"));

// const planets = ["Earth", "Mars", "Venus"];

// for (const planet of planets) {
 
// }

// function calculateTotalPrice(order) {
//   let totalPrice = 0;
//   for (let number of order) {
//     totalPrice = totalPrice + number;
//   }
//     return totalPrice;
    
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));


// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// }

// book.text = "norm",
// console.log(book);

// =========== task - 1 ================
function isEnoughCapacity(products, containerSize) {
  let totalProducts = 0;
  for (let product in products) {
    totalProducts += products[product];
    }
    return totalProducts <= containerSize;
}
console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8));
console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12));
console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14));
console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7));

// ============= task - 2 ================

function calcAverageCalories(days) {
  let totalCalories = 0;
  if (days.length === 0) {
    return 0;
  }
  for (let i = 0; i < days.length; i++) {
    totalCalories += days[i].calories;
  }
  return totalCalories / days.length;
}

console.log(calcAverageCalories([
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 }
  ])
);

console.log(calcAverageCalories([
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
    { day: "wednesday", calories: 2420 },
    { day: "thursday", calories: 1900 },
    { day: "friday", calories: 2370 },
    { day: "saturday", calories: 2280 },
    { day: "sunday", calories: 2610 }
  ])
);

console.log(calcAverageCalories([]));


// =========== task - 3 ================

const profile = {
  username: "Jacob",
  playTime: 300,
  changeUsername: function(newName) {
    this.username = newName;
  },
  updatePlayTime: function(hours) {
    this.playTime += hours;
  },
  getInfo: function() {
    return `${this.username} has ${this.playTime} active hours!`;
  }
};

console.log(profile.getInfo());

profile.changeUsername("Marco");
console.log(profile.getInfo());

profile.updatePlayTime(20);
console.log(profile.getInfo());