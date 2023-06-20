import React from 'react'

const Navbar = (props) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg" style={{ background: props.modeStyle === "dark" ? "teal" : "rgb(220, 220, 248)", fontWeight: 600 }}>
                <div className="container-fluid">
                    <a className="navbar-brand" style={{ color: props.modeStyle === "dark" ? "white" : "black" }} href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" style={{ color: props.modeStyle === "dark" ? "white" : "black" }} aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ color: props.modeStyle === "dark" ? "white" : "black" }} href="#">About</a>
                            </li>
                        </ul>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" onChange={props.handleModeChange} role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" style={{ color: props.modeStyle === "dark" ? "white" : "black" }} htmlFor="flexSwitchCheckDefault">ON {props.modeStyle === "dark" ? "Light" : "Dark"} Mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
