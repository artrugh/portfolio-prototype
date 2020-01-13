import React, { Component} from 'react';

class Type extends Component {

    state = {
        data: this.props.string,
        string: "",
        index: 0,
        sign: true,
        max: this.props.max,
        min: this.props.min,
        deleteSign: this.props.deleteSign,
    };

    getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        let random = Math.floor(Math.random() * (max - min + 1)) + min;
        return random;
    };

    componentDidMount() {
        this.timerTyping = setInterval(() => this.typing(), this.getRandomIntInclusive(this.state.min, this.state.max));
        this.timerSign = setInterval(() => this.changeSign(), 500);
    }

    componentWillUnmount() {
        clearInterval(this.timerTyping, this.timerSign);
    }

    typing() {
        if (this.state.index < this.state.data.length) {   
            this.setState({
                string: `${this.state.string}${this.state.data[this.state.index]}`,
                index: this.state.index + 1
            });
        }
    }

    changeSign() {

        if (this.state.deleteSign && this.state.index < this.state.data.length) {
            this.setState({
                sign: !this.state.sign
            });   
        } 
        else if (this.state.deleteSign && this.state.index === this.state.data.length) {
            this.setState({
                sign: true
            }); 
        } else if (!this.state.deleteSign){
            this.setState({
                sign: !this.state.sign
            }); 
        }          
    }

    render() {
        return (
            <span
            className= {this.props.class}
            id = { this.props.id}>
                {this.state.string}
                <span
                    style={{
                        color: this.state.sign ? '#1e1e1e' : '#d4d4d4'
                    }}
                >|</span>
            </span>
        );
    }
}


export default Type;
