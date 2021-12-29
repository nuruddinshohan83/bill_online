import React from 'react'
import { supabase } from '../utils/supabaseClient';
export default function SignOut() {
    async function signOut() {
        /* sign the user out */
        await supabase.auth.signOut();

    }
    return (
        <div>
            <button
                className='shadow bg-purple-500 hover:bg-purple-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mt-4'
                onClick={signOut}>Sign out</button>
        </div>
    )
}
