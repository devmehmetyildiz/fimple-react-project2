import React from 'react'

export default function Navbar() {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand d-flex justify-content-center align-items-center" href="#" >
                <img src={require("../../Assets/Img/user.png")} width="30" height="30" alt="" />
                <h5 className='ml-2'>Taksit Hesaplama Sistemi</h5>
            </a>
        </nav>
    )
}
