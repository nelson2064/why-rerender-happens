// import React, { useState } from 'react'

// const App = () => {
//   const [count , setCount] = useState(0);
//   console.log("hello world")
//   setTimeout(() => {
//     setCount(1);
//   }, 1000);

//   return (
//     <div>

//     <dir>
//       <p>count is  {count}</p>
//     </dir>
//     </div>
//   )
// }

// export default App



import React, { useEffect, useState } from 'react'


const App = () => {
  const [count , setCount] = useState(0);


console.log("render")

  setTimeout(() => {
    setCount(Math.random());
  }, 5000)

//any times the state veriable changes re render happen 
// setTimeout(() => {
//   setCount(1); //only few times this will rerender because after a period the state veriable remain same so no rerender happen
// }, 5000)




//rerender happen when the state variable changes finished
  return (
    <div>

    <dir>
      <p>count is  {count}</p>
    </dir>
    </div>
  )
}

export default App