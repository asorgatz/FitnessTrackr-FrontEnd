import React, { useState } from "react";
import { createRoutine } from "../api";

const CreateRoutine = ({myRoutines, setMyRoutines}) => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [isPublic, setIsPublic] = useState(false);

  const submitRoutine = async (ev) => {
    ev.preventDefault()
    let routineData = await createRoutine(ev, name, goal, isPublic);
    routineData.activities = []
    setMyRoutines([...myRoutines, routineData])
    console.log(myRoutines)
  }

  return (
    <form
      className="createRoutine"
      onSubmit={(ev) => submitRoutine}
    >
      <h3>Create Your Routines</h3>
      <input
        placeholder="name"
        value={name}
        onChange={(ev) => setName(ev.target.value)}
      />
      <input
        placeholder="goal"
        value={goal}
        onChange={(ev) => setGoal(ev.target.value)}
      />
      <span>
        <label>Public?</label>
      <input
        type="checkbox"
        id="willDeliver" 
        name="willDeliver"
        value={isPublic}
        onChange={(ev) => setIsPublic(ev.target.checked)}
        />
        </span>
      <button onClick={submitRoutine} disabled={!name || !goal }>Create Routines</button>
    </form>
  );
};

export default CreateRoutine;
