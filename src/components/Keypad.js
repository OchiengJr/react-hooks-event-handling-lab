import React from 'react';

// Keypad component definition
function Keypad() {
  return (
    // Single parent element (div) to wrap multiple elements
    <div>
      <div>
        {/* Label for the password input field */}
        <label htmlFor="password">Password:</label>
        {/* Input field for password with onChange event */}
        <input
          type="password"
          id="password"
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
