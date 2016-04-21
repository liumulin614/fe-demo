





function guessGifts(wishlist, presents) {
  //check the parameter:wishlist and presents must be array
  if(Object.prototype.toString.call(wishlist) !== "[object Array]"){
    throw new TypeError("wishlist must be array");
  }
  if(Object.prototype.toString.call(presents) !== "[object Array]"){
    throw new TypeError("presents must be array");
  }
  //
  var ret = [];
  presents.forEach(function(present){
    wishlist.forEach(function(wish){
      var name = wish['name'];
      if(ret.indexOf(name) < 0){
        if(present['size'] === wish['size'] && present['clatters'] === wish['clatters'] && present['weight'] === wish['weight']){
          ret.push(wish['name']);
        }
      }
      // if(!wish['checked']){

    })
  })
  return ret;
}

var wishlist = [
{"name":"socks","size":"small","clatters":"no","weight":"light"},
{"name":"card game","size":"small","clatters":"no","weight":"light"},
{"name":"bobble hat","size":"small","clatters":"no","weight":"light"}
];

var presents =
[{"size":"small","clatters":"no","weight":"light"},
{"size":"small","clatters":"no","weight":"light"}];

console.log(guessGifts(wishlist, presents));
