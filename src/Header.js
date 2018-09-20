import React, {Component} from 'react';
import logo from "./todopostit.png";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        };
        this.onChange = this.onChange.bind(this);
    }


    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">{this.state.appTitle}</h1>
                </header>

                <button onClick={() => this.props.clicked(this.state.title)}>Add</button>
                <hr/>
            </div>
        );
    }
}


export default Header;
