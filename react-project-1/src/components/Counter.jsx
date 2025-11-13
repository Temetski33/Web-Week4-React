import {useState} from 'react';

const Counter = () => {
  //let count = 0;

  //const handleClickWrong = () => {
  //count++;
  //console.log('Count:', count)

  //};

  const [count, setCount] = useState(0);
  const [name, setName] = useState('Guest');

  const handleClickRight = () => {
    setCount(count + 1);
    console.log('Count:', count);
  };

  const handleTyping = (e) => {
    console.log(name);
    setName(e.target.value);
  };

  return (
    <>
      <div>
        <p>You clicked {count} times</p>
        <button onClick={handleClickRight}>Click me</button>
      </div>
      <input
        type="text"
        placeholder="nimesi"
        value={name}
        onChange={handleTyping}
      />
    </>
  );
};

export default Counter;
