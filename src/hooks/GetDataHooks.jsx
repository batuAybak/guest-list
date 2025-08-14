import { useEffect } from "react";
import { useState } from "react";

export default function GetDataHooks(url) {
  const [guests, setGuests] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await fetch(url);
      const responseJSON = await response.json();
      setGuests(responseJSON.data); //set Guests to be the returned array
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [url]);

  return { guests, loading };
}
