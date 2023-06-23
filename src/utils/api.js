import axios from "axios";

const params = {
  headers: {
    Authorization: "bearer " + process.env.REACT_APP_STRPE_APP_KEY,
  },
};

export const fetchDataFromApi = async (url) => {
  console.log(url);
  try {
    const { data } = await axios.get(
      process.env.REACT_APP_DEV_URL  + url,
      params
    );
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
