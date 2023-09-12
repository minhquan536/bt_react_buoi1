import React, { Component } from 'react'
import HeaderComponent from './HeaderComponent'
import Baner from './Baner'
import Item from './Item'
import FooterComponent from './FooterComponent'

export default class FormComponent extends Component {
  render() {
    return (
      <div className='container w-80'>
        <HeaderComponent/>
        <div>
            <Baner/>
            <div className='row'>
                <div className="col-3">
                    <Item/>
                </div>
                <div className="col-3">
                    <Item/>
                </div>
                <div className="col-3">
                    <Item/>
                </div>
                <div className="col-3">
                    <Item/>
                </div>
            </div>
        </div>
        <FooterComponent/>
      </div>
    )
  }
}
