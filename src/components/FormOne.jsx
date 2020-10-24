import React, { Component } from 'react';
import '../assets/FormOne.scss';
import ItemOne from './utils/ItemOne';

class FormOne extends Component {

    constructor(prop) {
        super(prop)

        this.state = {
            users: [

            ]
        }
    }

    add(e) {
        const nameInput = document.getElementById('name')
        const mailInput = document.getElementById('mail')
        const telInput = document.getElementById('tel')
        
        let newUser = {
            id: new Date().getTime(),
            name: nameInput.value,
            mail: mailInput.value,
            tel: telInput.value,
        }

        let users = this.state.users
        users.unshift(newUser)

        this.setState({
            users: users
        })
    }

    delete(id) {

        let userIndex = this.state.users.map( filaId => {return filaId.id} ).indexOf(id)
        let users = this.state.users
        users.splice(userIndex, 1)

        this.setState({
            users: users
        })
    }

    render() {

        return (
            <div className='container_form' >
                <label>Nombre:</label>
                <input type="text" id='name' />

                <label>Mail:</label>
                <input type="text" id='mail' />

                <label>Mensaje:</label>
                <input type="text" id='tel' />

                <button className='form_button' 
                        onClick={ this.add.bind(this) } >Agregar</button>

                <ul>
                    { this.state.users.map(user => {
                        return <ItemOne 
                            key={ user.id }
                            id={ user.id }
                            name={ user.name.toUpperCase() } 
                            mail={ user.mail }
                            tel={ user.tel }
                            deleteOp={ this.delete.bind(this) }
                        />
                    }) }
                </ul>
            </div>
        )
    }
}

export default FormOne;