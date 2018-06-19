//import fetch from "cross-fetch";

const post = (path, body) =>
  fetch(`http://localhost:3001${path}`, {
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(body),
    cache: "default", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "omit", // include, same-origin, *omit
    headers: {
      "user-agent": "CornucopiaTrader/1.0",
      // CHECK AGAIN !!!!!!!!
      "content-type": "application/json" // ; charset=utf-8
    },
    method: "POST",
    // DOUBLE-CHECK IF CORS IS OK
    mode: "cors", // no-cors, cors, *same-origin
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer" // *client, no-referrer
  })
    .then(function(res) {
      if (res.ok) {
        return res.json();
      }
      throw new Error({
        error: {
          message:
            "Network response was not ok. Something went wrong with the backend."
        }
      }); // why do I need this it does go to catch==
    })
    .catch(function(error) {
      return {
        error: { message: error.message + ". Check that server is running." }
      };
    });

const simulate = body => post("/simulate", body);
export { simulate };
