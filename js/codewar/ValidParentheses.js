//http://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript
/**
 * Write a function called validParentheses that takes a string of parentheses,
 and determines if the order of the parentheses is valid. validParentheses should
 return true if the string is valid, and false if it's invalid.

Examples:
validParentheses( "()" ) => returns true
validParentheses( ")(()))" ) => returns false
validParentheses( "(" ) => returns false
validParentheses( "(())((()())())" ) => returns true

All input strings will be nonempty, and will only consist of open parentheses '(' and/or closed parentheses ')'
 */

"use strict";
/**
 * 如果要符合格式，那么需要满足两个条件：1、在任意一个位置，关闭括号的数量不能大于开括号；2、二者的数目应当相等
 */
function validParentheses(parens){
  let array = parens.split(""), stack = [], ret, openParens = 0, closeParens = 0,i=0,len = array.length,item;
  for(; i < len ; i++){
    item = array[i];
    if(item == "("){
      stack.push(item);
      openParens++;
    }else if(item == ")"){
      closeParens++;
      if(closeParens > openParens){
        return false;
      }
      if(stack[stack.length - 1] = "("){
        stack.pop();
      }
    }
  }
  return stack.length == 0;
}

function validParentheseModified(parens){
  var count = 0, i=0, len = parens.length, item;
  for(; i < len && count >= 0; i++){
    count += (parens[i] == "(" ? 1 : -1);
  }
  return count == 0;
}

function validParenthesesTest(parens){
  var indent = 0;

  for (var i = 0 ; i < parens.length && indent >= 0; i++) {
    indent += (parens[i] == '(') ? 1 : -1;
  }

  return (indent == 0);
}

console.log(validParentheseModified("()"));
console.log(validParentheseModified(")(()))"));
console.log(validParentheseModified("(())((()())())"));
console.log(validParentheseModified("("));
