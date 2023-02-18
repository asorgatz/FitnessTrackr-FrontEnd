import React, { useState } from "react";
import { createRoutine } from "../api";

const CreateRoutine = () => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [isPublic, setIsPublic] = useState("");

  return (
    <form
      className="createRoutine"
      onSubmit={(ev) => createRoutine(ev, name, goal, isPublic)}
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
      <input
        placeholder="isPublic?"
        value={isPublic}
        onChange={(ev) => setIsPublic(ev.target.value)}
      />

      <button>Create Routines</button>
    </form>
  );
};

export default CreateRoutine;
