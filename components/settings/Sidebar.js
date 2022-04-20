import React from 'react'

import {
	faGear,
	faPaintRoller,
	faUser,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled, { useTheme } from 'styled-components'

import {
	accountConfigurationItems,
	profileConfigurationItems,
	visualsConfigurationItems,
} from '../../assets/settingsPageConfigurations'

export default function Sidebar() {
	const theme = useTheme()

	return (
		<Wrapper>
			<Group>
				<Topic>
					<FontAwesomeIcon icon={faUser} />
					<HeaderText>Profile</HeaderText>
				</Topic>
				<SubTopics>
					{profileConfigurationItems.map((subtopic, index) => (
						<SubTopic key={`profile-subtopic-${item}`}>
							<Link href={`#${subtopic.target}`}>{subtopic.displayName}</Link>
						</SubTopic>
					))}
				</SubTopics>
			</Group>

			<Group>
				<Topic>
					<FontAwesomeIcon icon={faGear} />
					<HeaderText>Account</HeaderText>
				</Topic>
				<SubTopics>
					{accountConfigurationItems.map((subtopic, index) => (
						<SubTopic key={`account-subtopic-${index}`}>
							<Link href={`#${subtopic.target}`}>{subtopic.displayName}</Link>
						</SubTopic>
					))}
				</SubTopics>
			</Group>

			<Group>
				<Topic>
					<FontAwesomeIcon icon={faPaintRoller} />
					<HeaderText>Visuals</HeaderText>
				</Topic>
				<SubTopics>
					{visualsConfigurationItems.map((subtopic, index) => (
						<SubTopic key={`visuals-subtopic-${index}`}>
							<Link href={`#${subtopic.target}`}>{subtopic.displayName}</Link>
						</SubTopic>
					))}
				</SubTopics>
			</Group>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: 20px;
	width: 250px;
	margin-left: -250px;
	position: sticky;
	top: 0;
	left: 0;
	border-right: ${({ theme }) => `1.5px solid ${theme.colors.border}`};

	@media (max-width: 1200px) {
		display: none;
	}
`

const Group = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	/* background-color: red; */
	font-size: 1.33rem;
`

const HeaderText = styled.text`
	font-weight: 500;
	border: none;
	text-align: left;
`
const SubTopic = styled.li`
	list-style-type: none;
	font-weight: 300;
	border: none;
`
const Topic = styled.div`
	display: flex;

	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	text-align: center;
	gap: 0.75rem;
`

const SubTopics = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 0.25rem;
`

const Link = styled.a`
	text-decoration: none;
	color: ${(props) => props.theme.colors.text};
`
