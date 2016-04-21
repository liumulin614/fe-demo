function cakes(recipe, available) {
  // TODO: insert code
  var recipeName, recipeNumber,availableNumber,resultNumber=0;
  for(recipeName in recipe){
    recipeNumber = recipe[recipeName];
    availableNumber = available[recipeName];
    if(!availableNumber){
      resultNumber = 0;
      break;
    }else{
      resultNumber = (resultNumber != 0 ? Math.min(resultNumber, Math.floor(availableNumber/recipeNumber)):Math.floor(availableNumber/recipeNumber));
    }
  }
  return resultNumber;
}

function cakesUsingReduce(recipe, available){
  return Object.keys(recipe).reduce(function(val, item){
    return Math.min((available[item] ? Math.floor(available[item] / recipe[item]) : 0), val);
  }, Infinity)
}
// must return 2
console.log(cakesUsingReduce({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}));
// must return 0
console.log(cakesUsingReduce({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}));
