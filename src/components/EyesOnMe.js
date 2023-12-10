// Code EyesOnMe Component Here

import React from 'react';

// EyesOnMe component definition
const EyesOnMe = () => {
  return (
    <button
      // Event handler for when the button gains focus
      onFocus={() => console.log('Good!')}
      // Event handler for when the button loses focus
      onBlur={() => console.log('Hey! Eyes on me!')}
    >
      Eyes on me
    </button>
  );
};

// Export the EyesOnMe component
export default EyesOnMe;
