import React from 'react';
import styled from 'styled-components';
import { Card } from 'antd';

const MainCard = styled(Card)`
	width: 240;
	border: 0px;
`;

export const DisplayCard = (props) => {
	let DisplayCardComponent = MainCard;
	switch (props.cardType) {
		case 'mainCard':
			DisplayCardComponent = MainCard;
			break;
		default:
			break;
	}
	return (
		<DisplayCardComponent
			bodyStyle={{ padding: 0 }}
			hoverable
			style={{
				margin: props.margin,
				padding: props.padding,
				backgroundColor: props.backgroundColor,
				borderRadius: '5px'
			}}
		>
			<div>
				<img
					style={{
						width: '100%',
						borderTopLeftRadius: props.content && '5px',
						borderTopRightRadius: props.content && '5px'
					}}
					alt="Profile"
					src={props.img}
				/>
			</div>
			{props.content && props.mainCard && (
				<div style={{ textAlign: 'center' }}>
					<h2 style={{ color: props.titleColor, margin: '0' }}>{props.title}</h2>
					<h3 style={{ color: props.descriptionColor, margin: '0' }}>{props.description}</h3>
				</div>
			)}
			{props.content && !props.mainCard && (
				<div style={{ textAlign: 'center' }}>
					<h3 style={{ color: props.titleColor, margin: '0' }}>{props.title}</h3>
					<h4 style={{ color: props.descriptionColor, margin: '0' }}>{props.description}</h4>
				</div>
			)}
		</DisplayCardComponent>
	);
};
