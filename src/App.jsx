import GuestDetails from "./components/GuestDetails";
import GuestList from "./components/GuestList";

export default function App() {
  return (
    <>
      <main>
        <h1 className="list-header">Guest List</h1>
        <GuestList />
        <GuestDetails />
      </main>
    </>
  );
}
