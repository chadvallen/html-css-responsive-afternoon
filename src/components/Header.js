import React, { Component } from 'react'

export default class Header extends Component {
    constructor() {
        super();

        this.state = {
            toggleNav: false
        }
    }

    toggle = () => {
        this.setState((prevState) => {
          return {
            toggleNav: !prevState.toggleNav
          }
        })
      }

    render() {
        return (
            <header>
                <div>
                    <div>
                        <a href="#/services" className="logo">Start Bootstrap</a>
                    </div>

                    <button onClick={() => this.toggle()}>Menu</button>
                    <nav className={this.state.toggleNav ? 'show' : ''}>
                        <ul>
                            <li><a href="#/services">Services</a></li>
                            <li><a href="#/portfolio">Portfolio</a></li>
                            <li><a href="#/about">About</a></li>
                            <li><a href="#/team">Team</a></li>
                            <li><a href="#/contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}
