import React from 'react';

// EyesOnMe component definition
const EyesOnMe = () => {
  // Event handler for when the button gains focus
  const handleFocus = () => {
    console.log('Good!');
  };

  // Event handler for when the button loses focus
  const handleBlur = () => {
    console.log('Hey! Eyes on me!');
  };

  return (
    <button
      onFocus={handleFocus}
      onBlur={handleBlur}
      role="button" // Adding semantic role
    >
      Eyes on me
    </button>
  );
};

// Export the EyesOnMe component
export default EyesOnMe;
