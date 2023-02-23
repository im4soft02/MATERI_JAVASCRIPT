// //----------------------------------------------------------
// ======================[]      Fetch API      ]=========================
// ....................{     13 Februari 2023    }........................




const URLAPI = "https://jsonplaceholder.typicode.com/users";

function GETgata() {
  fetch(URLAPI)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error :", error));
}

GETgata();
