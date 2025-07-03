import React from 'react';
import ReactDOM from 'react-dom/client';

class FormularioNombre extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      nombre: "",
      email: ""
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const {name, value} = event.target;
    this.setState( { [name]: value } );
  }

  render () {
    return(
      <div>
        <label>Nombre completo:</label>
        <input type="text" name='nombre' value={this.state.nombre} onChange={this.handleChange} />
        <p>Tu nombre es: { this.state.nombre ? this.state.nombre : "Aún no se ha insertado el nombre" } </p>
        
        <label>E-Mail:</label>
        <input type="email" name='email' value={this.state.email} onChange={this.handleChange}/>
        <p>Tu email es: {this.state.email ? this.state.email : "email no insertado" }</p>
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

