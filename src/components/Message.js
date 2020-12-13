import React, { useReducer } from 'react';

const initialState = {
  message: '...',
  name: 'Bob Cobb',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'yell':
      return {
        ...state,
        message: 'HEY!',
      };

    case 'whisper':
      return {
        ...state,
        message: 'excuse me',
      };

    default:
      return state;
  }
};

const Message = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>Message: {state.message}</p>
      <p>User: {state.name}</p>
      <button onClick={() => dispatch({ type: 'yell' })}>YELL</button>
      <button onClick={() => dispatch({ type: 'whisper' })}>whisper</button>
    </div>
  );
};

export default Message;
