import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import service from "./services/service";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [msgType, setMsgType] = useState("");

  useEffect(() => {
    service.getAll().then((response) => {
      setPersons(response);
    });
  }, []);

  const nameChange = (event) => {
    setNewName(event.target.value);
  };
  const numberChange = (event) => {
    setNewNumber(event.target.value);
  };
  const filterChange = (event) => {
    setNewFilter(event.target.value);
  };

  const filterPerson = persons
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(newFilter.toLowerCase())
      )
    : [];

  const AddPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };

    const check = persons.find(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );

    if (check) {
      window.confirm(
        `${newName} is already added to phonebook, replace old number with a new one?`
      )
        ? service
            .update(check.id, personObject)
            .then((response) => {
              setPersons(
                persons.map((person) =>
                  person.id !== response.id ? person : response
                )
              );
              setMsgType("success");
              setErrorMessage(`${newName} has been updated`);
              setTimeout(() => {
                setErrorMessage(null);
              }, 5000);
            })
            .catch((error) => {
              setMsgType("error");
              setErrorMessage(
                `Information of ${newName} has already been removed from server!`
              );
              setTimeout(() => {
                setErrorMessage(null);
              }, 5000);
              setPersons(persons.filter((n) => n.id !== check.id));
            })
        : console.log("");
    }

    service.create({ name: newName, number: newNumber }).then((response) => {
      setPersons(persons.concat(response));
    });
    setNewName("");
    setNewNumber("");
    setMsgType("success");
    setErrorMessage(`Added ${newName}`);
    setTimeout(() => {
      setErrorMessage(null);
    }, 5000);
  };

  const deletePerson = (id, name) => {
    window.confirm(`Delete ${name}?`)
      ? service
          .remove(id)
          .then((response) => {
            if (response.status === 200) {
              setPersons(persons.filter((person) => person.id !== id));
              setNewName("");
              setNewNumber("");
              setMsgType("success");
              setErrorMessage(`Deleted ${name}`);
              setTimeout(() => {
                setErrorMessage(null);
              }, 5000);
            }
          })
          .catch((error) => {
            setMsgType("error");
            setErrorMessage(
              `Information of ${name} has already been removed from server!`
            );
            setTimeout(() => {
              setErrorMessage(null);
            }, 5000);
            setPersons(persons.filter((n) => n.id !== id));
          })
      : console.log();
  };

  return (
    <div>
      <h2>Bloglist</h2>
      <Notification message={errorMessage} messageType={msgType} />
      <Filter newFilter={newFilter} filterChange={filterChange} />
      <h3>Add a new blog</h3>
      <PersonForm
        addPerson={AddPerson}
        newName={newName}
        newNumber={newNumber}
        nameChange={nameChange}
        numberChange={numberChange}
      />
      <h3>Blogs</h3>
      <Persons filterPerson={filterPerson} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
