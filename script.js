/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  //Write your code here
  arr.map(printingThroughMap);

  function printingThroughMap(arrayItem) {
    if(arrayItem.profession === "developer") {
      console.log(arrayItem);
    }
  }
}

function PrintDeveloperbyForEach() {
  //Write your code here
  arr.forEach(printingThroughForEach);

  function printingThroughForEach(arrayItem) {
    if(arrayItem.profession === "developer") {
      console.log(arrayItem);
    }
  }
}

function addData() {
  //Write your code here
  let newObj = { id: 4, name: "susan", age:"20",profession:"intern"};
  arr.push(newObj);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here
  let filtered_arr = arr.filter(function (val) {

    if(val.profession !== "admin") {
      return val;
    }
  });
  console.log(filtered_arr);
}

function concatenateArray() {
  //Write your code here
  let arr2 = [
    { id: 5, name: "Sudharshan", age:"30", profession:"Programmer"},
    { id: 6, name: "KrishnaSree", age:"28", profession:"developer"},
    { id: 7, name: "Sandhya", age:"32", profession:"Tester"},
  ];

  let concatArray = arr.concat(arr2);
  console.log(concatArray);
}
