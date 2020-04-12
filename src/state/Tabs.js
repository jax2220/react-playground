import React from 'react';

class Tabs extends React.Component {
    static defaultProps = { tabs: []};
    state = {
        currentTabIndex: 0
    }
    handleButtonClick(index){
        this.setState({ currentTabIndex: index})
    }
    render(){
        const buttons = this.props.tabs.map((tab, index) => (
            <button key={index} onClick={() => this.handleButtonClick(index)}>
                {tab.name}
            </button>
        ))
        const currentTab = this.props.tabs[this.state.currentTabIndex]
        return(
            <div>
                {buttons}
                {this.props.tabs.length && (
                <div>
                    {currentTab.content}
                </div>
                )}
            </div>
        )
    }
}

export default Tabs