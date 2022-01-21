import axios from "axios";

const getRepos = async () => {
  try {
    const res = await axios(`/.netlify/functions/repos`);
    return res.json();
  } catch (err) {
    console.log(err);
    return [];
  }
};

export default getRepos;
