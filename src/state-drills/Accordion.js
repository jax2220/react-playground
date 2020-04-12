import React from 'react';

class Accordion extends React.Component{
    // props section
    static defaultProps = {
        section: []
    };
    // end of props section start of state section
    state = {
        displayToggle: null
    }

    handleClick = (i) => { 
        this.setState({displayToggle: i})
}


render(){
    return(
        <ul>
        {(this.props.sections !== []) ? 
        (this.props.sections.map((item, i) => {
            return (
                <li key= {i}>
                    <button onClick={()=> this.handleClick(i)}>
                        {item.title}
                    </button>
                    {(this.state.displayToggle === i) && <p>{item.content}</p>}
            </li> )  
        })) : ''
    }
    </ul>

    )
}

}

export default Accordion