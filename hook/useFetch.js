import { useState, useEffect } from "react";
import axios from "axios";
// import {RAPID_API_KEY} from '@env';

// const rapidApiKey=RAPID_API_KEY

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      'X-RapidAPI-Key': '1b6822e504msh0668306cb114da0p1ff2eajsnd281fb7c5b38',
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    },
    params: { ...query },
  };
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data.data);
      setIsLoading(false);
      console.log("working");
    } catch (error) {
      setError(error);
      alert("There is an error");
      console.log("not working error");
    } finally {
      setIsLoading(false);
      console.log("finally");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
