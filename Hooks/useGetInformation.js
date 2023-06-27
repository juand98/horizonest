import { useState, useEffect } from "react";

export function useGetInformation() {
  const [data, setData] = useState("");

  const getData = async () => {
    let datos = await fetch("../data.json");
    let result = await datos.json();
    setData(result);
  };

  useEffect(() => {
    getData();
  }, []);

  return data;
}
