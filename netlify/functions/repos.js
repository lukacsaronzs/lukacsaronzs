const process = require("process");

const axios = require("axios");

const handler = async (event) => {
  const username = "lukacsaronzs";
  const { GITHUB_TOKEN } = process.env;

  try {
    if (!GITHUB_TOKEN) throw new Error("Invalid api key");
    const res = await axios.get(
      `https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`,
      {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      }
    );
    return {
      statusCode: 200,
      body: JSON.stringify(res.data.items),
    };
  } catch (err) {
    return {
      statusCode: err.response.status,
      body: JSON.stringify(err.response.body),
    };
  }
};

module.exports = { handler };
