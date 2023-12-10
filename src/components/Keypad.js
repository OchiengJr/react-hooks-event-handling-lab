import React from 'react';

// Keypad component definition
function Keypad() {
  return (
    // Single parent element (div) to wrap multiple elements
    <div>
      <div>
        {/* Input field for password with onChange event */}
        <input
          type="password"
          onChange={() => {
            console.log("Entering password...");
          }}
        />
      </div>
    </div>
  );
}

// Export the Keypad component
export default Keypad;
