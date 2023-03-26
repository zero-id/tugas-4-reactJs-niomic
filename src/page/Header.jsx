import React, { Component } from "react"

function Header() {
        return (
            <ul style={{padding: "0", textAlign: "center"}}>
                <li style={{display: "inline"}}><a style={{color: "black", fontWeight: "bold"}} href="#">Home | </a></li>
                <li style={{display: "inline"}}><a style={{color: "black", fontWeight: "bold"}} href="#">Product | </a></li>
                <li style={{display: "inline"}}><a style={{color: "black", fontWeight: "bold"}} href="#">Kontak | </a></li>
                <li style={{display: "inline"}}><a style={{color: "black", fontWeight: "bold"}} href="#">Tentang Kami</a></li>
            </ul>
        )
}

export default Header