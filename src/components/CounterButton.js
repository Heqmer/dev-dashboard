import {useState} from "react";
import {Button} from "react-bootstrap";

export function CounterButton() {
  const [count, setCount] = useState(0)
  const [fizz, setFizz] = useState(false)
  const [buzz, setBuzz] = useState(false)


  function handleClick() {
    let newCount = count + 1
    setCount(newCount)
    setFizz(newCount % 3 === 0)
    setBuzz(newCount % 5 === 0)
  }

  return (
    <Button onClick={handleClick}>{count} {fizz ? "Fizz" : ""} {buzz ? "Buzz" : ""}</Button>
  );
}