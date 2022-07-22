import React, { Component } from "react";
import './Header.css'

export class Header extends Component {
    render() {
        return (
            <div className="header">
                <a href="/">Home</a>
                <a href="/tablecomponent">Table</a>
            </div>
        )
    }
}