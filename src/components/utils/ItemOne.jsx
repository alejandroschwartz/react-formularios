import React from 'react';
import PropTypes from 'prop-types';

import '../../assets/styles/ItemOne.scss'; 

class ItemOne extends React.Component {

    // static defaultProps = {
    //     mails: 'Invitado'
    // }

    render() {

        let id = this.props.id
        let name = this.props.name
        let mail = this.props.mail
        let tel = this.props.tel

        return (
            <li>
                { this.props.name } - { this.props.mail } ({ this.props.tel })
                <button className='button_delete' 
                        onClick={ () => this.props.deleteOp(this.props.id) } > Borrar </button>
            </li>
        )
    }
}

// Item.propTypes = {
//     name: PropTypes.string.isRequired,
//     tel: PropTypes.number.isRequired,
//     mail: PropTypes.string.isRequired,
//     deleteOp: PropTypes.func.isRequired
// }

export default ItemOne;