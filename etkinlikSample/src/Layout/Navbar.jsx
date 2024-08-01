
import { AppBar, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [categories, setcategories] = useState([])

    useEffect(() => {
        fetch("https://localhost:44378/api/categories")
            .then(res => res.json())
            .then(data => setcategories(data))
    }, [])

    return <>
        <AppBar position="static" sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <Stack direction="row" justifyContent="space-evenly" spacing={4} sx={{ padding: "1%" }}>
                <Link to="/" style={{ width: '100px', height: '25px' }}> <img src="https://www.biletix.com/static/images/btx-logo.svg" /></Link>
                <Link style={{ color: "white", textDecoration: "none" }} to="/muzık"><Typography variant="h5">Müzik</Typography></Link>
                <Link style={{ color: "white", textDecoration: "none" }} to="/tıyatro"><Typography variant="h5">Tiyatro</Typography></Link>
                <Link style={{ color: "white", textDecoration: "none" }} to="/sınema"><Typography variant="h5">Sinema</Typography></Link>
                <Link style={{ color: "white", textDecoration: "none" }} to="/spor"><Typography variant="h5">Spor</Typography></Link>
            </Stack>
        </AppBar>
    </>
}

export default Navbar