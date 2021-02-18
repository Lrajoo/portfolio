import React from 'react';
import styled from 'styled-components';
import { Card, Tag } from 'antd';
import { colorScheme } from '../../constants/colors';

const MainCard = styled(Card)`
	width: 240;
	border: 0px;
	:hover {
		cursor: default;
	}
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
				borderRadius: '10px'
			}}
		>
			<div>
				{props.currentJob && (
					<Tag
						color={colorScheme.beige}
						style={{
							position: 'absolute',
							top: '3%',
							right: '0%',
							border: `2px solid ${colorScheme.red}`,
							color: colorScheme.red,
							fontWeight: 'bold'
						}}
					>
						Current Job
					</Tag>
				)}
				<img
					style={{
						width: '100%',
						borderTopLeftRadius: props.content && '10px',
						borderTopRightRadius: props.content && '10px'
					}}
					alt="Profile"
					src={props.img}
				/>
			</div>

			{props.content && props.mainCard && (
				<div style={{ textAlign: 'center' }}>
					<h1 style={{ color: props.titleColor, margin: '0', fontWeight: 'bolder', fontFamily: 'Cormorant Garamond' }}>
						{props.title}
					</h1>
					<h2
						style={{
							color: props.descriptionColor,
							margin: '0 0 5px 0',
							fontWeight: 'bolder',
							fontFamily: 'Cormorant Garamond'
						}}
					>
						{props.description}
					</h2>
				</div>
			)}
			{props.content && !props.mainCard && (
				<div style={{ textAlign: 'center' }}>
					<h3 style={{ color: props.titleColor, margin: '0', fontWeight: 'bold', fontFamily: 'Cormorant Garamond' }}>
						{props.title}
					</h3>
					<h4
						style={{
							color: props.descriptionColor,
							margin: '0 0 5px 0',
							fontWeight: 'bold',
							fontFamily: 'Cormorant Garamond'
						}}
					>
						{props.description}
					</h4>
				</div>
			)}
		</DisplayCardComponent>
	);
};
