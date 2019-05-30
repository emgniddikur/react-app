import React from 'react';

export const AuthForm = ({authRequest}) => {
  let input;

  const handleClick = e => {
    e.preventDefault();
    authRequest(input.value);
  };

  return (
    <form>
      <label htmlFor="authToken">認証トークン</label>
      <input id="authToken" type="text" ref={node => input = node}/>
      <input type="button" value="送信" onClick={e => handleClick(e)}/>
    </form>
  )
};
