import React from "react";

const Persons = ({ filterPerson, deletePerson }) => {
  return (
    <div>
      {filterPerson.map((person, i) => (
        <p key={i}>
          {person.name}: {person.number}{" "}
          <button onClick={() => deletePerson(person.id, person.name)}>
            Delete
          </button>
        </p>
      ))}
    </div>
  );
};

export default Persons;
