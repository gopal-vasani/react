// import React, { useState, useRef } from 'react';

// export default function Input() {
//   const [text, setText] = useState('');
//   const inputRef = useRef();

//   const handleClick = () => {
//     inputRef.current.focus();
//   };

//   return (
//     <div>
//       <input
//         ref={inputRef}
//         type="text"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="Enter Name"
//       />
//       <button onClick={handleClick}>Submit</button>
//     </div>
//   );
// }

/////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState } from 'react';

// export default function Input() {
//     const [isStyled, setIsStyled] = useState(false);

//     const handleClick = () => {
//         setIsStyled(true);
//     };

//     return (
//         <div>
//             <p
//                 style={{
//                     color: isStyled ? 'red' : 'black',
//                     backgroundColor: isStyled ? 'black' : 'transparent',
//                     padding: '10px',
//                 }}
//             >
//                 Hello Red And White
//             </p>
//             <button onClick={handleClick}>Submit</button>
//         </div>
//     );
// }

/////////////////////////////////////////////////////////////////////////////////////////


import React, { useRef, useState } from 'react';

function RefWithRerender() {
  const countRef = useRef(0);
  const renderCountRef = useRef(0);
  const [, setForceRerender] = useState(false);

  renderCountRef.current += 1;

  const handleClick = () => {
    countRef.current += 1;
    setForceRerender(prev => !prev);
  };

  console.log('Component rendered', renderCountRef.current, 'times');

  return (
    <div>
      <p>Ref count: {countRef.current}</p>
      <p>Render count: {renderCountRef.current}</p>
      <button onClick={handleClick}>Increment & Re-render</button>
    </div>
  );
}

export default RefWithRerender;