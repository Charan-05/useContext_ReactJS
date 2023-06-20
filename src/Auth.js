
import React, { useContext } from "react";
import AuthContext from "./auth-context";
 
const Auth = () => {
  // Now all the data stored in the context can
  // be accessed with the auth variable
  const auth = useContext(AuthContext);
  console.log(auth.status);
  return (
    <div>
      <h1>Are you Allowed in?</h1>
      {auth.status ?
 
<p>Access Granted!</p>
 
 :
 
<p>Authorised entries only.</p>
 
}
 
      <button onClick={auth.login}>Click To check permission</button>
    </div>
  );
};
export default Auth;