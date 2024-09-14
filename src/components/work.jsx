import { useState } from 'react'
import './work.css'

export function Work(){
  const [num,setNum]=useState(0);

  function incr(){
   let number=num+1;
   setNum(number);
  }
  function decr(){
let number=num-1;
setNum(number);

  }
    return(
        <>
        <div>

           <div className="container">
            <h1>the number is:{num}</h1>
 <button onClick={incr}>increasing</button>
 <button onClick={decr}>decreasing</button>
           </div>

        


        </div>
        </>
    )
}