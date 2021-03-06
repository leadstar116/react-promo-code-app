import React, { useEffect, useRef, useState } from 'react'
import { PromoCode } from '../_constants/promo-code.interface'
import { Row, Col, InputGroup, FormControl, Button, Overlay, Popover } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { updatePromoCodeStatus } from '../_actions/promo-code.actions'

type Props = {
	data: PromoCode
}

const Code = (props: Props) => {
	const [showOverlay, setShowOverlay] = useState(false);
  const [target, setTarget] = useState(null);
	const ref = useRef(null);
	const dispatch = useDispatch()

	const activateBonusClicked = () => {
		const newStatus = (props.data.status === 'pending')? 'active' : 'pending';
		dispatch(updatePromoCodeStatus(props.data.id, newStatus));
	}

	const onClipboardCopyBtnClicked = (e: any) => {
		// Create a temporary element off-screen to hold text.
		navigator.clipboard.writeText(e.currentTarget.getAttribute('attr-code'));
		setShowOverlay(!showOverlay);
		setTarget(e.target);
	}

	useEffect(() => {
		if (showOverlay) {
			const timer = setTimeout(() => setShowOverlay(false), 3000);
			return () => clearTimeout(timer);
		}
	}, [showOverlay]);

	return (
		<div ref={ref}>
			<Row className="rounded border align-items-center one-promo-code">
				<Col sm={12} md={5} className="service-wrapper">
					<span className="service-title">{ props.data.serviceName }</span>
					<span className="service-description">{ props.data.description }</span>
				</Col>
				<Col sm={12} md={7} className="promo-code-wrapper">
					<span className="promo-code-label">PROMOCODE</span>
					<Row>
						<Col sm={12} md={6}>
							<InputGroup>
								<FormControl
									value={ props.data.code }
									readOnly
								/>
								<InputGroup.Append>
									<Button onClick={ onClipboardCopyBtnClicked } attr-code={ props.data.code }>
										<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fillRule="evenodd" clipRule="evenodd" d="M10 3.5C10 3.22386 9.77614 3 9.5 3H0.5C0.223858 3 0 3.22386 0 3.5V15.5C0 15.7761 0.223858 16 0.5 16H9.5C9.77614 16 10 15.7761 10 15.5V3.5ZM8 5.5C8 5.22386 7.77614 5 7.5 5H2.5C2.22386 5 2 5.22386 2 5.5V13.5C2 13.7761 2.22386 14 2.5 14H7.5C7.77614 14 8 13.7761 8 13.5V5.5Z" fill="#0085FF"/>
											<path d="M4 0.5C4 0.223858 4.22386 0 4.5 0H13.5C13.7761 0 14 0.223858 14 0.5V12.5C14 12.7761 13.7761 13 13.5 13H11.5C11.2239 13 11 12.7761 11 12.5V11.5C11 11.2239 11.2239 11 11.5 11C11.7761 11 12 10.7761 12 10.5V2.5C12 2.22386 11.7761 2 11.5 2H4.5C4.22386 2 4 1.77614 4 1.5V0.5Z" fill="#0085FF"/>
										</svg>
									</Button>
								</InputGroup.Append>
							</InputGroup>
							<Overlay
								show={ showOverlay }
								target={ target }
								placement="bottom"
								container={ ref.current }
								containerPadding={ 20 }
							>
								<Popover id="popover-contained">
									<Popover.Title as="h3" className="text-success">Successfully copied to clipboard!</Popover.Title>
								</Popover>
							</Overlay>
						</Col>
						<Col sm={12} md={6}>
							<Button
								className={ (props.data.status === 'pending') ? 'btn-activate-bonus btn-primary' : 'btn-activate-bonus btn-danger' }
								onClick={ activateBonusClicked }
							>
								{ (props.data.status === 'pending') ? 'Activate bonus' : 'Activated' }
							</Button>
						</Col>
					</Row>
				</Col>
			</Row>
		</div>
	)
}

export default Code