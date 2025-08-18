import { useEffect } from "react";
import { useState } from "react";

export default function GetDataHooks(url) {
  /**
   * Initialized an empty array (useState([]))
   * because we want components that need "guests" to know it's an array.
   * That's because components render before useEffect()
   * and since e.g. GuestList uses .map function, it should expect and array.
   * It will be empty initialy, but .map execution at least won't fail
   *
   * GuestList renders first (fast),
   * fetch happens asynchronously afterward (slower).
   * The empty array ensures the first render doesn’t crash.
   * …so that GuestList can safely render before the data arrives.
   * Without this, calling .map() on undefined would throw an error.
   */
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
