function isJSON(str) {
  try {
      JSON.parse(str);
      console.log(true);
  } catch (event) {
      console.log(false);
    }
}


isJSON('{"name": "Michael", "age": 45}'); // true
isJSON('{name: "Michael", age: 45}'); // false
isJSON('false'); // true
isJSON('abc'); // false 