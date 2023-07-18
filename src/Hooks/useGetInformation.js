import { useState, useEffect } from "react";

export default function useGetInformation(url) {
  const [data, setData] = useState("");

  const getData = async () => {
    let datos = await fetch(url);
    let result = await datos.json();
    setData(result);
  };

  useEffect(() => {
    getData();
  }, []);

  return data;
}
