import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import CodeFilter from './CodeFilter'


describe('CodeFilter Component', () => {
	let component = renderer.create(
		<BrowserRouter>
			<CodeFilter searchString='' setSearchString={(name: string) => {}}/>
		</BrowserRouter>
	);

	it('should render with given props', () => {
		expect(component.toJSON()).toMatchSnapshot();
	});
})