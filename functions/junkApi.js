const fetch = require("node-fetch");

exports.handler = async (event, context) => {
  const API_ENDPOINT = "https://api.chucknorris.io/jokes/random";
  try {
    const response = await fetch(API_ENDPOINT);
    const data = await response.json();
    //console.log(data, "hola")
    return { statusCode: 200, body: JSON.stringify({ data }) };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed fetching data" }),
    };
  }
};
