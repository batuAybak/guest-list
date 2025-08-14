import { useEffect } from "react";
import { useState } from "react";

export default function GetDataHooks(url) {
  const [guests, setGuests] = useState([]);
  const getData = async () => {
    try {
      const response = await fetch(url);
      const responseJSON = await response.json();
      setGuests(responseJSON.data); //set Guests to be the returned array
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [url]);

  return { guests };
}
