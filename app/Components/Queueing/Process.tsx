import { getFinalState } from "./FinalState";

export default function Process() {
  return (
    <>
    <TestCase
        baseState={0}
        queue={[1, 1, 1]}
        expected={1}
      />
    </>
  )
}

type TestProps = {
  baseState: number;
  queue : number[] | ((n:number)=>number);
  expected : number
}



function TestCase({baseState,queue,expected}: TestProps){
 const finalAns = getFinalState(baseState,queue);
  return(
    <>
      <p>Base state: <b>{baseState}</b></p>
      <p>Queue: <b>{queue}</b></p>
      <p style={{color: expected === finalAns ? "Green": "Red"}}>{`Expected Result: ${finalAns} (${finalAns === expected? "Right": "wrong"})`}</p>
    </>
  )
}





































// import React from 'react';
// import { getFinalState } from './FinalState';

// function increment(n: number): number {
//   return n + 1;
// }

// increment.toString = () => 'n => n+1';
// console.log(increment);


// interface TestCaseProps {
//   baseState: number;
//   queue: number | ((n: number) => number);
//   expected: number;
// }

// function TestCase({ baseState, queue, expected }: TestCaseProps): JSX.Element {
//   const actual = getFinalState(baseState, queue);
//   return (
//     <>
//       <p>
//         Base state: <b>{baseState}</b>
//       </p>
//       <p>
//         Queue: <b>[{queue.map((item) => (typeof item === 'function' ? 'increment' : item)).join(', ')}]</b>
//       </p>
//       <p>
//         Expected result: <b>{expected}</b>
//       </p>
//       <p
//         style={{
//           color: actual === expected ? 'green' : 'red',
//         }}
//       >
//         Your result: <b>{actual}</b> ({actual === expected ? 'correct' : 'wrong'})
//       </p>
//     </>
//   );
// }

// export default function App(): JSX.Element {
//   return (
//     <>
//       <TestCase baseState={0} queue={[1, 1, 1]} expected={1} />
//       <hr />
//       <TestCase baseState={0} queue={[increment, increment, increment]} expected={3} />
//       <hr />
//       <TestCase baseState={0} queue={[5, increment]} expected={6} />
//       <hr />
//       <TestCase baseState={0} queue={[5, increment, 42]} expected={42} />
//     </>
//   );
// }
