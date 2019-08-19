import React from 'react';
import Row from './Row';

class FormNoHooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      surname: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {

    this.setState({
      [e.target.name]: e.target.value
    });
  }

  componentDidMount() {
    document.title = `${this.state.name} ${this.state.surname}`;
  }

  componentDidUpdate() {
    document.title = `${this.state.name} ${this.state.surname}`;
  }

  render() {
    return (
      <div className="form-container">
        <div className="first-name">
          <label htmlFor="name">Name</label>
          <input name="name" onChange={this.handleChange} type="text" value={this.state.name} />
        </div>
        <div className="surname">
          <label htmlFor="surname">Surname</label>
          <input name="surname" type="text" onChange={this.handleChange} value={this.state.surname} />

        </div>
      </div>
    );
  }
}

export default FormNoHooks;