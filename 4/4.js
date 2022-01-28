//4) What is wrong with the following code?
var server_echo;
var json = {
  json: JSON.stringify({
    a: 1,
    b: 2,
  }),
  delay: 3,
};

fetch("/echo/", {
  method: "post",
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
  },
  body:
    "json=" +
    //json.json object is already converted as a string, so don't need JSON.stringify
    //encodeURIComponent(JSON.stringify(json.json)) +
    encodeURIComponent(json.json) +
    "&delay=" +
    json.delay,
})
  .then(function (response) {
    console.log(response);
    server_echo = response.json().echo;
    //Calling fetch() returns a promise.
    //Any process that takes a lot of time to process is usually run alongside other synchronous operation and completes in the future.
    //this means that calling server_echo outside of a promise is not yet defined.
    server_echo.forEach((element) => console.log(element));
    return response.json();
  })
  .then(function (result) {
    alert(result);
  })
  .catch(function (error) {
    console.log("Request failed", error);
  });
//server_echo.forEach((element) => console.log(element));
