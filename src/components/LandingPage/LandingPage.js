import React, { Component } from 'react';
import { Row, Col } from 'antd';
import NavBar from '../Shared/NavBar';
import Profile from '../../assets/images/profile.jpeg';
import Purdue from '../../assets/images/purdue.jpeg';
import Purdue2 from '../../assets/images/purdue2.jpeg';
import Flockjay from '../../assets/images/flockjay.jpeg';
import Steerwise from '../../assets/images/steerwise.jpeg';
import AWSCertification from '../../assets/images/awsCertifiedCloudPractitioner.jpeg';
import { DisplayCard } from '../Shared/Card';
import Delft from '../../assets/images/delft.jpeg';
import { colorScheme } from '../../constants/colors';
import { SocialIcon } from '../Shared/SocialIcon';

class LandingPage extends Component {
	render() {
		return (
			<Row
				style={{
					height: '100vh',
					border: '3px',
					boxSizing: 'border-box',
					backgroundImage: `linear-gradient(${colorScheme.peach}, ${colorScheme.beige})`
				}}
			>
				<Col span={24}>
					<NavBar />
					<Row align="middle" style={{ height: 'calc(100vh - 50px)' }}>
						<Col>
							<Row justify="center" align="bottom">
								<Col xs={0} sm={3}>
									<DisplayCard
										img={Flockjay}
										margin="0 5px 10px 0"
										content
										title="Flockjay Inc."
										description="Software Engineer"
										backgroundColor={colorScheme.grey}
										titleColor={colorScheme.white}
										descriptionColor={colorScheme.white}
									/>
								</Col>
								<Col xs={0} sm={3}>
									<DisplayCard
										img={AWSCertification}
										margin="0 0 10px 5px"
										padding="5px 0"
										backgroundColor={colorScheme.grey}
									/>
								</Col>
							</Row>
							<Row justify="center">
								<Col xs={0} sm={3}>
									<Row>
										<Col span={24}>
											<DisplayCard
												img={Purdue}
												margin="0 10px 5px 0"
												content
												title="Purdue University"
												description="Computer Engineer"
												backgroundColor={colorScheme.grey}
												titleColor={colorScheme.white}
												descriptionColor={colorScheme.white}
											/>
										</Col>
									</Row>
									<Row justify="end">
										<Col span={12}>
											<DisplayCard
												img={Delft}
												margin="5px 10px 0 0"
												padding="5px"
												title="Delft University of Technology"
												description="Cerficate in Data Mining"
												backgroundColor={colorScheme.grey}
											/>
										</Col>
									</Row>
								</Col>
								<Col xs={18} sm={6}>
									<DisplayCard
										img={Profile}
										content
										mainCard
										title="Lingess Rajoo"
										description="Software Engineer"
										backgroundColor={colorScheme.red}
										titleColor={colorScheme.beige}
										descriptionColor={colorScheme.beige}
									/>
								</Col>
								<Col xs={0} sm={3}>
									<Row>
										<Col span={12}>
											{/* <DisplayCard img={Profile} margin="0 0 5px 10px" backgroundColor={colorScheme.grey} /> */}
										</Col>
									</Row>
									<Row>
										<Col span={24}>
											<DisplayCard
												img={Steerwise}
												margin="5px 0 0 10px"
												content
												currentJob
												title="Steerwise Inc."
												description="Software Developer"
												backgroundColor={colorScheme.grey}
												titleColor={colorScheme.white}
												descriptionColor={colorScheme.white}
											/>
										</Col>
									</Row>
								</Col>
							</Row>
							<Row justify="center" style={{ marginTop: '10px' }}>
								<Col xs={6} sm={2}>
									<Row justify="center">
										<SocialIcon iconType="linkedin" />
									</Row>
								</Col>
								<Col xs={6} sm={2}>
									<Row justify="center">
										<SocialIcon iconType="mail" />
									</Row>
								</Col>
								<Col xs={6} sm={2}>
									<Row justify="center">
										<SocialIcon iconType="github" />
									</Row>
								</Col>
							</Row>
						</Col>
					</Row>
				</Col>
			</Row>
		);
	}
}

export default LandingPage;
