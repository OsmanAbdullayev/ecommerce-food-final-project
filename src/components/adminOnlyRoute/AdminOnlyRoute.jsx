import React from 'react'
import { useSelector } from 'react-redux'
import { selectEmail } from '../../redux/slice/authSlice'


const AdminOnlyRoute = ({children}) => {
  const userEmail = useSelector(selectEmail)
  if (userEmail === "os.abdullayev@gmail.com") {
    return children
  } else {
    return null
  }
}

export default AdminOnlyRoute