const requestButton = document.querySelector("#sendRequest");

// prettier-ignore
let headersList = {
  "Accept": "*/*",
//   "User-Agent": "Thunder Client (https://www.thunderclient.com)",
  "Authorization": "Basic YzE5MTIxNWItOTMwNi00ZTNmLTk1OTQtOTFiZTE2N2JlY2RiOg==",
};

requestButton.addEventListener("click", () => {
  fetch(
    "https://frost.met.no/observations/v0.jsonld?sources=SN18700&referencetime=2022-07-11T18:50:00&elements=air_temperature,wind_from_direction",
    {
      method: "GET",
      mode: "no-cors",
      credentials: "include",
      headers: headersList,
    }
  )
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      console.log(data);
    });
});
