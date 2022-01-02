import React from 'react'
import { supabase } from '../utils/supabaseClient';
import { useRouter } from 'next/router'

export default function SignOut() {
    const router = useRouter()
    async function signOut() {
        /* sign the user out */
        await supabase.auth.signOut();
        router.push("./")

    }
    return (
        <div>
            <button
                className='inline-block -mb-4 align-baseline font-bold text-sm text-purple-500 hover:text-purple-600 focus:shadow-outline focus:outline-none'
                onClick={signOut}>Sign out</button>
        </div>
    )
}
