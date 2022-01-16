const urlDecode = function(text) {
  // Put your solution here
  let decodedObject = {};
  let urlSplit = text.split("&");
  for (let index of urlSplit) {
    let valueSplit = index.split("=");
    decodedObject[valueSplit[0]] = valueSplit[1].split("%20").join(" ");
  } return decodedObject;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);