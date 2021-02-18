import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import resume from '../../assets/files/resumeLrajoo.pdf';
import { colorScheme } from '../../constants/colors';
import Profile from '../../assets/images/profile.jpeg';

class NavBar extends Component {
	render() {
		return (
			<Row
				align="middle"
				style={{
					height: '50px',
					backgroundColor: colorScheme.beige
				}}
			>
				<Col span={12}>
					<Row justify="start">
						<Col>
							<Link to="/">
								<h2 style={{ margin: '0 40px', color: colorScheme.blue }}>
									<img
										style={{
											width: '30px',
											borderRadius: '5px',
											lineHeight: '30px',
											marginRight: '10px'
										}}
										alt="Profile"
										src={Profile}
									/>
									Lingess Rajoo
								</h2>
							</Link>
						</Col>
					</Row>
				</Col>
				<Col span={12}>
					<Row justify="end">
						<Col>
							<a href={resume} rel="noopener noreferrer" target="_blank">
								<h2 style={{ margin: '0 40px', color: colorScheme.blue }}>Resume</h2>
							</a>
						</Col>
					</Row>
				</Col>
			</Row>
		);
	}
}

export default NavBar;
