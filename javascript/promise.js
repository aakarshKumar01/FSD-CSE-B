console.log("Start");
fetchData().then(data => console.log(data));
console.log("End");
 
console.log("Start");

setTimeout(() => {
  console.log("This runs later");
}, 2000);

console.log("End");

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data loaded"), 2000);
  });
}



function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data loaded"), 2000);
  });
}

async function run() {
  console.log("Start");
  const result = await fetchData();
  console.log(result);
  console.log("End");
}

run();
