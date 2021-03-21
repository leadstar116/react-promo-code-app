import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadPromoCodes } from '../_helpers/promo-code.thunk'
import Code from './Code'
import { initialState } from '../_constants/state.interface'

type Props = {
    searchString: string,
}

const CodeList = ({ searchString }: Props) => {
    const dispatch = useDispatch()
    const promoCodeList = useSelector((state:initialState) => state.promoCodeReducer)
    const alertState = useSelector((state:initialState) => state.alertReducer)

    const promoCodesCount = 10

    console.log('promoCodeList', promoCodeList);
    // Load Promo Codes.
    useEffect(() => {
        console.log('--dispatch load promo codes---');
        dispatch(loadPromoCodes(promoCodesCount))
    }, [dispatch])

    const filterePromoCodesWithSearchKey = () => {
        return promoCodeList.promoCodes.filter((promoCode) => {
            return promoCode.serviceName.replace(' ', '').toLowerCase().includes(
                searchString.replace(' ', '').toLowerCase()
            )
        })
    }

    const filteredPromoCodes = filterePromoCodesWithSearchKey()

    return (
        <div className="code-list-wrapper">
            {
                filteredPromoCodes.map((promoCode, index) => (
                    <Code data={promoCode} key={index}/>
                ))
            }
            {alertState !== undefined &&
                <div className={alertState.alertClass}>
                    {alertState.alertMessage}
                </div>
            }
            {(!filteredPromoCodes.length && promoCodeList.promoCodes.length)
                ? (<div className="alert alert-danger text-center">
                    Sorry, we couldn't find a service with that name
                    </div>)
                : ''
            }
        </div>
    )
}

export default CodeList