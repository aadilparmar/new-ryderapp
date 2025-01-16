
import React, { useContext, useEffect} from 'react'
import { CaptainDataContext } from '../Context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CaptainProtectedWrapper = ({
    children
}) => {
    const token=localStorage.getItem("token");
        const navigate = useNavigate();
    const { captain, setCaptain } = useContext(CaptainDataContext)
    useEffect(() => {
        if (!token) {
            navigate('/captain-login')
        }
        axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            if (response.status === 200) {
                setCaptain(response.data)
            }
        }).catch(err => {
                console.log(err)
                localStorage.removeItem('token')
                navigate('/captain-login')
            })
    }, [ token ])
    return (
        <>
            {children}
        </>
    )
}

export default CaptainProtectedWrapper