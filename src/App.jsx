// // import React, { useState } from 'react'

// // const App = () => {
// //   const [count , setCount] = useState(0);
// //   console.log("hello world")
// //   setTimeout(() => {
// //     setCount(1);
// //   }, 1000);

// //   return (
// //     <div>

// //     <dir>
// //       <p>count is  {count}</p>
// //     </dir>
// //     </div>
// //   )
// // }

// // export default App



// import React, { useEffect, useState } from 'react'


// const App = () => {
//   const [count , setCount] = useState(0);


// console.log("render")

//   setTimeout(() => {
//     setCount(Math.random());
//   }, 5000)

// //any times the state veriable changes re render happen 
// // setTimeout(() => {
// //   setCount(1); //only few times this will rerender because after a period the state veriable remain same so no rerender happen
// // }, 5000)




// //rerender happen when the state variable changes finished
//   return (
//     <div>

//     <dir>
//       <p>count is  {count}</p>
//     </dir>
//     </div>
//   )
// }

// export default App





// //any times state variable changes re render happens
// // in this case we are assinging Math.random which changes again and agina dones't remain same so when we assing  the new value in state variablel the state variable changes and rerender happen
// //lets say noremaly we change our state variable putting 1 in this caes rerender dones't happen again and agian becuase after some thime the react feels that the value is same everytime so i will not rerender again




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

//the normal variablel changes noramlly
//the state variable only change when the value is changed from setStatevariable if the default value is dynamic in state variable then also it won't changed
//so to change the value setStateVariable should called and when there any new value is pused to setstatevariable rerender happens againa and again

const App = () => {
  const [count , setCount] = useState(0);
  const [statevariable , setstatevariable] = useState(Math.random());
  let a = Math.random();
  console.log(count);
  console.log("this is state variablel " + statevariable);
  console.log("this is normal varaible " + a);

  console.log("render")

  setTimeout(() => {
    setCount(Math.random());
  }, 5000)



  return (
    <div>

    <dir>
      <p>count is  {count}</p>
    </dir>
    </div>
  )
}

export default App





