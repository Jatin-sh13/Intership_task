import React from 'react'
import { Nav, NavDropdown } from 'react-bootstrap'
const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg  navbar-light">
            <div class="container">
                <a class="navbar-brand" href="#">Internship Task</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/Home">Home</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link active" href="/Add">Add Details</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
