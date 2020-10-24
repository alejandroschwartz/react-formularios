import React, { Component } from 'react';
import '../assets/FormThree.scss'

class FormThree extends Component {

    constructor(props) {
        super(props)

        this.state = {
            uno: '',
            dos: '',
            tres: ''
        }
    }

    onChange(e) {

        this.setState({
            [e.target.name]: e.target.checked
        })
    }

    primero(e) {
        console.log('hola 1')

        const nameUno = document.getElementById('uno')
        const nameDos = document.getElementById('dos')
        const nameTres = document.getElementById('tres')

        if(this.validateOne()){
            return;
        }
    }
    
    validateOne() {
        console.log(this.nameUno.value)
    }

    segundo(e) {
        console.log('hola 2')

    }


    // onChange(e) {

    //     if( e.target.uno === 'uno' ) {
    //         this.setState({
    //             [e.target.name]: e.target.checked
    //         })
    //     } else {
    //         this.setState({
    //             [e.target.name]: e.target.value
    //         })
    //     }

    //     if( e.target.uno === 'dos' ) {
    //         this.setState({
    //             [e.target.name]: e.target.checked
    //         })
    //     } else {
    //         this.setState({
    //             [e.target.name]: e.target.value
    //         })
    //     }

    //     if( e.target.uno === 'tres' ) {
    //         this.setState({
    //             [e.target.name]: e.target.checked
    //         })
    //     } else {
    //         this.setState({
    //             [e.target.name]: e.target.value
    //         })
    //     }
    //     console.log(e.target.checked)
    // }

    // primero(e) {

    //     if(this.validateOne()){
    //         return;
    //     }
    // }

    // validateOne(){

    //     if(this.state.uno !== true ){
    //         this.setState({
    //             uno: 'No uno',
    //             dos: 'no dos',
    //             tres: 'no tres'
    //         })
    //         return false
    //     } else if (this.state.uno === false){
    //         this.setState({
    //             uno: 'Uno',
    //             dos: 'dos',
    //             tres: 'tres'
    //         })
    //         return true
    //     }
    // }

    // segundo(e) {

    //     if(this.validateTwo()){
    //         return;
    //     }
    // }

    // validateTwo(){

    //     if(this.state.dos !== true ){
    //         this.setState({
    //             dos: 'Dos'
    //         })
    //         return false
    //     } else if (this.state.dos === false){
    //         this.setState({
    //             dos: 'No dos'
    //         })
    //         return true
    //     }
    // }

    render() {
        return (
            <div className='div_three' >
                <label htmlFor="uno"> 1 </label>
                <input  type="checkbox" name="uno" id="uno"
                        onChange={ this.onChange.bind(this) }
                        value={ this.state.uno } />

                <label htmlFor="dos"> 2 </label>
                <input  type="checkbox" name="dos" id="dos"
                        onChange={ this.onChange.bind(this) } 
                        value={ this.state.dos } />

                <label htmlFor="tres"> 3 </label>
                <input  type="checkbox" name="tres" id="tres"
                        onChange={ this.onChange.bind(this) } 
                        value={ this.state.tres } />

                <button onClick={ this.primero.bind(this) } 
                        > Primero </button>
                <button onClick={ this.segundo.bind(this) }
                        > Segundo </button>

                <pre>{ JSON.stringify(this.state) }</pre>
                <p>{ this.state.uno }</p>
                <p>{ this.state.dos }</p>
                <p>{ this.state.tres }</p>


            </div>
        )
    }
}

export default FormThree;