import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useUserContext } from '../contexts/useUserContext'
import { api } from '../services/api'
import NotFound from './not_found'

export const AdminPages  = () => {
    const { user } = useUserContext()
    const id = user.id
    const [userData, setUserData] = useState('')
    
    useEffect (() => {
        api.get(`/users/show/${id}`)
        .then(response => {
            setUserData(response.data)
        })
      }, [id])

    return (
        <>
            { userData.is_admin ? <Outlet/> : <NotFound/> }
        </>
    )
}
