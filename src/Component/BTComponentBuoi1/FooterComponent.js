import React, { Component } from 'react'

export default class FooterComponent extends Component {
  render() {
    return (
      <div>
        <div className="card text-center">
          <div className="card-header bg-danger">
            FOOTER
          </div>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          </div>
          <div className="card-footer text-muted">
            2 days ago
          </div>
        </div>

      </div>
    )
  }
}
