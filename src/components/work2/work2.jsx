import { useState } from "react"
import './w.css'

export default function Work4(){
    const [product,setProduct]=useState(1);
          function incse(){
            let myproduct=product+1;
            setProduct(myproduct)

          }
          function decrse(){
            let myproduct=product-1;
           if(myproduct<1){
            return {myproduct}
           }
setProduct(myproduct);
          }




    return(
        <>
        <div>
            <div className="container">
                <h1>the product number is:{product}</h1>
                <button onClick={incse}>increase product</button>
                <button onClick={decrse}>decrease product</button>
                <h1>totall product is:{product}</h1>
            </div>
        </div>
        </>
    )
}