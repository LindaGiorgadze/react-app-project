import React, { useReducer } from "react";

const initialState = {
  name: "Linda",
  surname: "",
  email: "example@email.com",
  password: ""
};

function registration(state, action) {
    return { ...state, ...{[action.type]: action.value} }
//   switch (action.type) {
//     case "Name":
//       return { ...state, ...{ name: action.value } };
//     case "Surname":
//       return { ...state, ...{ surname: action.value } };
//     case "Email":
//       return { ...state, ...{ email: action.value } };
//     case "Password":
//       return { ...state, ...{ password: action.value } };
//     default:
//       throw new Error();
//   }
}

export default function Registration() {
  const [state, dispatch] = useReducer(registration, initialState);

  console.log(state);

  function onSubmit(e) {
    e.preventDefault();
    alert(`Form is Submitted, ${state.name}`);
  }

  return (
    <form onSubmit={(e) => onSubmit(e)} action='/' >
      <h3>რეგისტრაცია</h3>

      <input
        type="text"
        placeholder="სახელი"
        value={state.name}
        onChange={(e) => dispatch({ type: "name", value: e.target.value })}
      />
      <input
        type="text"
        placeholder="გვარი"
        value={state.surname}
        onChange={(e) => dispatch({ type: "surname", value: e.target.value })}
      />
      <input
        type="email"
        placeholder="იმეილი"
        value={state.email}
        onChange={(e) => dispatch({ type: "email", value: e.target.value })}
      />
      <input
        type="password"
        placeholder="პაროლი"
        value={state.password}
        onChange={(e) => dispatch({ type: "password", value: e.target.value })}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
