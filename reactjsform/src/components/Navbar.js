import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import image from "./jeevamrut.jpg"

function navbar() {
    return (
        <>
            <nav class="navbar navbar-dark">
                <a class="navbar-brand" href="#">
                    <img src={image} width="70" height="70" class="d-inline-block align-top" alt="" />
                    <h2 class="form-heading">Jeevamrut</h2>
                </a>
            </nav>

        </>
    )
}

export default navbar
