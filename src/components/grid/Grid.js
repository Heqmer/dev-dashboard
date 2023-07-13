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
    <Container fluid className={"p-0"}>
      <div className={"d-flex"}>
        <p className={"h-100 mt-auto mb-auto pe-2"}>Add new list items</p>
        <button onClick={handleAdd} className={"btn btn-success"}>+</button>
      </div>
      <div className={"d-grid gap-3 p-4 border border-warning border-opacity-25 mt-3"}>
        {items.map(x => <div key={x} className={"row justify-content-md-left"}>
          <div className={"col-md-auto"}>
            <button onClick={() => handleRemove(x)} className={"btn btn-danger"}>-</button>
          </div>
          <div className={"h-100 p-2 col-md-2"}>
            <Cell id={x}/>
          </div>
          <div className={"col-md-auto"}>
            <Button className={"btn btn-warning"}>Bootstrap button</Button>
          </div>
        </div>)}
      </div>
    </Container>
  );
}