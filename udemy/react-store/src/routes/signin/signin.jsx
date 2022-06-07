import { async } from '@firebase/util';
import {signInWithGooglePopup, createUserData} from '../../utilities/firebase/firebase'


const SignIn = () => {
  const logGoogleUser = async () =>{
    const {user} = await signInWithGooglePopup();
    createUserData(user)
  }
return (
  <div>
    <h1>Sign In page</h1>
    <button onClick={logGoogleUser}>Sign in with Google</button>
  </div>
)

}
export default SignIn;