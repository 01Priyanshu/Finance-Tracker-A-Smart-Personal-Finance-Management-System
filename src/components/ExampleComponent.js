import api from "../services/api";

const fetchData = async () => {
  try {
    const response = await api.get("/data");
    setData(response.data);
  } catch (error) {
    console.error("Error fetching data");
  }
};
