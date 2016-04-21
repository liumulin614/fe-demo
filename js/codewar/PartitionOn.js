/**
**http://www.codewars.com/kata/525a037c82bf42b9f800029b/train/javascript
**/
// partition the items array so that all values for which pred returns true are
// at the end, returning the index of the first true value

function partitionOn(pred, items) {
  var tmp = items.slice(0),i = 0,ret;
  tmp.forEach(function(item){
    if(!pred(item)){
      items[i++] = item;
    }
  })
  ret = i;
  tmp.forEach(function(item){
    if(pred(item)){
      items[i++] = item;
    }
  })
  return ret;
}

var items = [1, 2, 3, 4, 5, 6];
function isEven(n) {return n % 2 == 0}
var i = partitionOn(isEven, items);
console.log(i);
console.log(items.slice(0,i));
console.log(items.slice(i));
