import React, {useState} from 'react'

const NumberPlusMinus = (props) => {

  const[num, setNum] = useState(Number('0'));

  return(
    <div className='Nnumer-container'>
      <button className='cyan' onClick={()=>{setNum(num - 1)}}>-</button>
      {num}
      <button className='magenta' onClick={()=>{setNum(num + 1)}}>+</button>
    </div>
  );

}

export default NumberPlusMinus;