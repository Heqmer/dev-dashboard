import {useState} from "react";
import './Grid.css'
import {Button, Container} from "react-bootstrap";

export function Cell({id}) {
  const [selected, setSelected] = useState(false)
  const [count, setCount] = useState(0)

  function handleClick() {
    setSelected(!selected)
    setCount(count + 1)
  }

  return (
    <Container className={selected ? "cell selectedCell" : "cell unselectedCell"}
               onMouseEnter={handleClick} title={id}> Entered #{count} times
      <Button size={"sm"}>Bootstrap button</Button>
    </Container>
  )
}