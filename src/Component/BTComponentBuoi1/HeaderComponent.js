import React, { Component } from 'react'

export default class HeaderComponent extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-dark">
          <a className="navbar-brand" href="#">Start Boostrap</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Service</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Contract</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
