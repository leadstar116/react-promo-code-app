import configureStore from 'redux-mock-store';
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import CodeList from './CodeList'
import { PromoCode } from '../_constants/promo-code.interface';


describe('CodeList Component', () => {
    const testPromoCode = {
		id: 1,
		serviceName: 'PromoService.com',
		description: 'some description',
		code: 'FE86XR3',
		status: "pending"
	} as PromoCode

    const promoCodeState = {
        promoCodes: [testPromoCode]
    }

    const mockStore = configureStore();
    let store = mockStore({
        promoCodeReducer: promoCodeState,
    })

    store.dispatch = jest.fn();

    let component = renderer.create(
        <Provider store={store}>
            <CodeList searchString=""/>
        </Provider>
    );

    it('should render with given props', () => {
        expect(component.toJSON()).toMatchSnapshot();
    });
})