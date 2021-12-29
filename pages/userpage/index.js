import React from 'react'
import { useState, useEffect } from 'react'
import { supabase } from '../../utils/supabaseClient';
import { useFormik } from 'formik'
import { v4 as uuidv4 } from 'uuid'
import ClientInput from '../../components/ClientInput';

export default function UserPage() {

    return (
        <div className=''>
            <ClientInput />
        </div >
    )
}
