import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import MenuBar from './MenuBar'


describe('MenuBar Component', () => {
    let component = renderer.create(
        <BrowserRouter>
            <MenuBar/>
        </BrowserRouter>
    );

    it('should render with given props', () => {
        expect(component.toJSON()).toMatchSnapshot();
    });
})