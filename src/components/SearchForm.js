import React from 'react';

export const SearchForm = ({history}) => {
  let input;

  const handleClick = (e, input) => {
    e.preventDefault();
    history.push({
      keyword: input
    });
  };

  return (
    <form>
      <label htmlFor="keyword">キーワード</label>
      <input id="keyword" type="text" ref={node => input = node}/>
      <button type="submit" onClick={(e) => handleClick(e, input.value)}>検索</button>
    </form>
  );
};
