import React from 'react';
import ReactDOM from 'react-dom';
import renderer  from 'react-test-renderer'
import Tabs from './Tabs';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

describe('Tabs component', () => {
    const tabsProp = [
        {name: 'First tab',
         content: 'Lorem ipsum dolor sit amet consectetur'},
        {name: 'Second tab',
         content: 'Laboriosam exercitationem quos consectetur '},
        {name: 'Third tab',
         content: 'Fugit, sapiente aspernatur corporis velit'},
      ];

    it('renders without errors', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Tabs />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('renders the first tab by default', () => {
        const tree = renderer.create(<Tabs tabs={tabsProp} />)
        expect(tree).toMatchSnapshot()
    })

    it('renders impty given no tabs', () => {
        const wrapper = shallow(<Tabs />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})

