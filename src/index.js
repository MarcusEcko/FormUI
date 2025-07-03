import React from 'react';
import ReactDOM from 'react-dom/client';

class FormularioNombre extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      nombre: ""
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState( {nombre : event.target.value} );
  }

  render () {
    return(
      <div>
        <label>Nombre:</label>
        <input type="text" value={this.state.nombre} onChange={this.handleChange} />
        <p>Tu nombre es: {this.state.nombre}</p>
      </div>
    )
  }

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FormularioNombre />
  </React.StrictMode>
);

