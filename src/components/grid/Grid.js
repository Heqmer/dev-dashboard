import {useState} from "react";
import {Cell} from "./Cell";

export function Grid() {
  const initialItems = [crypto.randomUUID()]
  const [items, setItems] = useState(initialItems)
  const divStyle = {
    backgroundColor: '#393d48'
  }

  function handleAdd() {
    let newList = [...items]
    newList.push(crypto.randomUUID())
    setItems(newList)
  }

  function handleRemove(id) {
    let newList = items.filter(item => item !== id)
    setItems(newList)
  }

  return (
    <div style={divStyle}>
      <p>Hello</p>
      <button onClick={handleAdd}>+</button>
      {items.map(x => <div key={x}>
        <button onClick={() => handleRemove(x)}>-</button>
        <Cell id={x}/>
      </div>)}
    </div>
  );
}