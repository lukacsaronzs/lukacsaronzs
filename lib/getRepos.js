import axios from "axios";

const getRepos = async () => {
  try {
    const res = await axios(`/.netlify/functions/repos`);
    return res.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export default getRepos;
