import { useState, useEffect } from "react";

let globalState = {};
let listeners = [];
let actions = {};

export const useStore = () => {
  const setState = useState(globalState)[1];

  const dispatch = (actionIdentifier, payload) => {
    const newState = actions[actionIdentifier](globalState, payload);
    globalState = { ...globalState, ...newState };

    for (const listener of listeners) {
      listener(globalState);
    }
  };
  const arr = [1, 2, 3, 4];

  for (const item of arr) {
    console.log(item);
  }

  const person = {
    name: "Joe",
    address: "Pampanga",
    age: 1,
  };

  for (const property in person) {
    console.log(property);
  }

  useEffect(() => {
    listeners.push(setState);

    return () => {
      listeners.filter((li) => li !== setState);
    };
  }, []);

  return [globalState, dispatch];
};

export const initStore = (userActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }

  actions = { ...actions, ...userActions };
};
