import {useState} from "react";
import {Cell} from "./Cell";
import {Button, Container} from "react-bootstrap";

export function Grid() {
  const initialItems = [crypto.randomUUID()]
  const [items, setItems] = useState(initialItems)

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
    <Container fluid>
      <p>Hello</p>
      <button onClick={handleAdd} className={"btn btn-success"}>+</button>
      <div className={"d-grid gap-3 p-4"}>
        {items.map(x => <div key={x} className={"row justify-content-md-left"}>
          <div className={"col-md-auto"}>
            <button onClick={() => handleRemove(x)} className={"btn btn-danger"}>-</button>
          </div>
          <div className={"h-100 p-2 col-md-2"}>
            <Cell id={x}/>
          </div>
          <div className={"col-md-auto"}>
            <Button >Bootstrap button</Button>
          </div>
        </div>)}
      </div>
    </Container>
  );
}