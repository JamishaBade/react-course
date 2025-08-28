import { useState } from "react";

function IfElse() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  let message;
  if (isLoggedIn) {
    message = <h3>Welcome back, user!</h3>;
  } else {
    message = <h3>Please log in. </h3>;
  }

  return (
    <div>
      <h2> Using IfElse Operator</h2>
      {message}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default IfElse;
