import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import TheDate from './TheDate';

describe('thedate component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<TheDate />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it.skip('renders the ui as expected', () => {
        expect(
            renderer.create(<TheDate />).toJSON()
        ).toMatchSnapshot()
    })
})