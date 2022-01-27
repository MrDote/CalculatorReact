import React, { Component } from "react";
import './App.css';
import Button from "./comps/Button";
import Input from "./comps/Input";
import AC from './comps/AC'



export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
          input: ''
        };
    }

    calculateResult() {
        this.setState({
            input: Number(this.state.input)
        })
    }

    onClick(i) {

        const regex = /^\d+\+\-\/\*$/g


        if (i !== '=' && this.state.input !== 'You worthless junk') {
            this.setState({
                input: this.state.input + i
            })
        }

        else if (i == '=') {
            
        }
    }

    renderButton(i) {
        return (
            <Button
                value={i}
                onClick={() => this.onClick(i)}
            />
        )
    }

    notAC(i) {
        if (i == 'INS') {
            return 'You worthless junk'
        }
        return ''
    }

    renderAC(i) {
        return (
            <AC
                value={i}
                onClick={() => {
                    this.setState({
                        input: this.notAC(i)
                    })
                }}
            />
        )
    }

    render() {
        return (
            <div className='app'>
                <div>
                    <Input
                        value={this.state.input}
                    />
                </div>
                <div>
                    {this.renderButton('7')}
                    {this.renderButton('8')}
                    {this.renderButton('9')}
                    {this.renderButton('/')}
                </div>
                <div>
                    {this.renderButton('4')}
                    {this.renderButton('5')}
                    {this.renderButton('6')}
                    {this.renderButton('*')}
                </div>
                <div>
                    {this.renderButton('1')}
                    {this.renderButton('2')}
                    {this.renderButton('3')}
                    {this.renderButton('-')}
                </div>
                <div>
                    {this.renderButton('0')}
                    {this.renderButton('00')}
                    {this.renderButton('.')}
                    {this.renderButton('=')}
                </div>
                <div>
                    {this.renderAC('AC')}
                    {this.renderAC('INS')}
                </div>
            </div>
        );
    }
}