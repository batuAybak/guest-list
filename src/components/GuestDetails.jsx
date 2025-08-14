import { useGuest } from "../GuestContext";

export default function GuestDetails() {
  const { selectedGuest } = useGuest();

  if (selectedGuest) {
    return (
      <section>
        <h2>Guest Details</h2>
        <p>
          <strong>Name: </strong>
          {selectedGuest.name}
        </p>
        <p>
          <strong>Email: </strong>
          {selectedGuest.email}
        </p>
        <p>
          <strong>Phone: </strong>
          {selectedGuest.phone}
        </p>
        <p>
          <strong>Bio: </strong>
          {selectedGuest.bio}
        </p>
        <p>
          <strong>Job: </strong>
          {selectedGuest.job}
        </p>
      </section>
    );
  }

  return <p>Select a guest to see more details.</p>;
}
