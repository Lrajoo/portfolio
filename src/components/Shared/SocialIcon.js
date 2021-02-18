import React, { useState } from 'react';
import styled from 'styled-components';
import { LinkedinOutlined, GithubOutlined, MailOutlined } from '@ant-design/icons';
import { colorScheme } from '../../constants/colors';
import { links } from '../../constants/links';

const MainIcon = styled.div`
	padding: 4px;
	border-radius: 5px;
	:hover {
		cursor: pointer;
		background-color: ${colorScheme.red};
	}
`;

export const SocialIcon = (props) => {
	const [hover, setHover] = useState(false);

	let IconComponent = LinkedinOutlined;
	let link = '';
	switch (props.iconType) {
		case 'linkedin':
			IconComponent = LinkedinOutlined;
			link = links.linkedin;
			break;
		case 'mail':
			IconComponent = MailOutlined;
			link = links.mail;
			break;
		case 'github':
			IconComponent = GithubOutlined;
			link = links.github;
			break;
		default:
			break;
	}
	return (
		<a href={link} rel="noopener noreferrer" target="_blank">
			<MainIcon
				onMouseEnter={() => {
					setHover(true);
				}}
				onMouseLeave={() => {
					setHover(false);
				}}
			>
				<IconComponent
					style={{ color: hover ? colorScheme.beige : colorScheme.blue, fontSize: '45px' }}
				></IconComponent>
			</MainIcon>
		</a>
	);
};
