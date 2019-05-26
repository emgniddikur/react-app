import React from 'react';

export const SearchForm = ({history}) => {
  let input;

  const handleClick = e => {
    e.preventDefault();
    history.push({
      keyword: input.value
    });
  };

  return (
    <form>
      <label htmlFor="keyword">キーワード</label>
      <input id="keyword" type="text" ref={node => input = node}/>
      <input type="button" value="検索" onClick={e => handleClick(e)}/>
    </form>
  );
};
