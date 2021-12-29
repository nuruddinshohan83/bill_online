import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { supabase } from '../utils/supabaseClient';

function App() {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);

  const router = useRouter()
  useEffect(() => {
    /* when the app loads, check to see if the user is signed in */
    checkUser();
    /* check user on OAuth redirect */
    window.addEventListener('hashchange', function () {
      checkUser();
    });
  }, [])
  async function checkUser() {
    /* if a user is signed in, update local state */

    const user = supabase.auth.user();
    //const userId = supabase.auth.user
    console.log(user)
    if (user) {
      setUserId(user.id)
      setUser(user)
    }
  }
  async function signInWithGithub() {
    /* authenticate with GitHub */
    await supabase.auth.signIn({
      provider: 'google'
    });
  }
  async function signOut() {
    /* sign the user out */
    await supabase.auth.signOut();
    setUser(null);
  }
  if (user) {
    //router.push("/test")
    return (
      <div className="App">
        <h1>Hello, {user.email}</h1>
        <button onClick={signOut}>Sign out</button>
      </div>
    )
  }
  return (
    <div className="App">
      <h1>Hello, please sign in!</h1>
      <button onClick={signInWithGithub}>Sign In</button>
    </div>
  );
}

export default App;