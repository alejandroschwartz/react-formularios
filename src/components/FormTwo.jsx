import React, { Component } from 'react';
import '../assets/FormTwo.scss';

class FormTwo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            name: '',
            languaje: '',
            about: '',
            message: '',
            color: '',
            gender: '',
            acept: ''
        }
    }

    onChange(e) {

        if( e.target.name === 'acept' ) {
            this.setState({
                [e.target.name]: e.target.checked
            })
        } else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    }

    save(e) {

        if(this.validate()){
            return;
        }
    }

    validate(){

        if(this.state.acept != true ){
            this.setState({
                message: 'Acepte términos y condiciones',
                color: 'messageRed'
            })
            return false
        } else {
            this.setState({
                message: 'Guardado Correctamente',
                color: 'messageGreen'
            })
            return true
        }
    }

    render() {
        return(
            
            <div className='container_div' >
                <label htmlFor='username' > Nombre de usuario </label>
                <input  className='input_text' type="text" name='username'
                        value={ this.state.username }
                        onChange={ this.onChange.bind(this) }
                        id='username' />

                <label htmlFor='name' > Nombre </label>
                <input  className='input_text' type="text" name='name'
                        value={ this.state.name }
                        onChange={ this.onChange.bind(this) }
                        id='name' />

                <label htmlFor="languaje"> Idioma </label>
                <select className='input_select'
                        name="" id="languaje" 
                        value={ this.state.languaje }
                        onChange={ this.onChange.bind(this) }>
                    <option value=""> Seccione valor </option>
                    <option value="en"> Ingles </option>
                    <option value="es"> Español </option>
                    <option value="de"> Aleman </option>
                </select>

                <label htmlFor="gender"> Genero </label>
                <div>
                    <input  className='radio'
                            type="radio" value='m'
                            onChange={ this.onChange.bind(this) }
                            name="gender" /> Hombre
                    <input  className='radio'
                            type="radio" value='w' 
                            onChange={ this.onChange.bind(this) }
                            name="gender" /> Mujer
                </div>

                <label htmlFor="about"> Cuentame algo de ti </label>
                <textarea   className='textarea'
                            id='about' name='about'
                            value={ this.state.about }
                            onChange={ this.onChange.bind(this) } ></textarea>
                
                <div>
                    <input  type="checkbox" id='acept' name='acept'
                            onChange={ this.onChange.bind(this) }
                            value={ this.state.acept } />
                    <label htmlFor="acept"> Acepta términos y condiciones </label>
                </div>

                <button className='button'
                        onClick={ this.save.bind(this) } >Guardar</button>
                <span className={ this.state.color } >{ this.state.message }</span>

                <div>
                    <pre>{ JSON.stringify(this.state) }</pre>
                </div>
            </div>
        )
    }
}

export default FormTwo; 
