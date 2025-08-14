import { useGuest } from "../GuestContext";
import GetDataHooks from "../hooks/GetDataHooks";

export default function GuestList() {
  const { setSelectedGuest } = useGuest();
  const { guests, loading } = GetDataHooks(
    "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2507-Batuhan/guests"
  );
  if (loading) return <p>Loading guests...</p>;

  return (
    <>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {guests.map((guest) => {
            return (
              <tr key={guest.id} onClick={() => setSelectedGuest(guest)}>
                <td>{guest.name}</td>
                <td>{guest.email}</td>
                <td>{guest.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
