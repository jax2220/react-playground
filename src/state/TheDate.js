import React from 'react';

class TheDate extends React.Component {
    constructor(props){
        super(props)
        this.state = { datetime: new Date() };
        console.log('constructor')
    }
    componentDidMount() {
        console.log('componentdidmount')
        this.interval = setInterval(() => {
            this.setState({
                datetime: new Date()
            })
        } , 1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    render(){
        console.log(this.state)
        return (
            <div>{this.state.datetime.toLocaleDateString()}</div>
        )
    }
}

export default TheDate