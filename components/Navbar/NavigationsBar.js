import { useEffect, useRef, useState } from 'react'

import { signOut } from 'next-auth/react'
import Link from 'next/link'
import styled, { css } from 'styled-components'

import { useSearch } from '../../hooks/useSearch'
import { useWuphfUser } from '../../hooks/WuphfUserContext'
import FormSearchInput from '../forms/FormSearchInput'
import Avatar from '../general/Avatar'
import Button from '../general/Button'
import NavigationLink from './DesktopLink'
import Links from './Links'
import MobileLink from './MobileLink'

function NavigationBar() {
	const {
		query,
		register,
		result: searchResult,
		isHidden: isEmpty,
		hide: hideSearch,
	} = useSearch()
	const [expanded, setExpanded] = useState(false)
	const myRef = useRef(null)
	const { wuphfUser } = useWuphfUser()

	function toggleExpanded() {
		if (!expanded) {
			myRef.current.scrollIntoView()
		}
		hideSearch()
		setExpanded(!expanded)
	}

	useEffect(() => {
		setExpanded(false)
	}, [])

	function handleSignout() {
		signOut()
	}

	return (
		<Shadow>
			<NavWrapper>
				<StyledNav expanded={expanded} ref={myRef}>
					<LogoAndSearch>
						<Link href='/' passHref>
							<StyledImg
								src='https://res.cloudinary.com/wuphf/image/upload/v1647982586/animal_svgs/dogThick_rieymv.svg'
								width={40}
								height={40}
							/>
						</Link>
						<Search>
							<StyledFormInput
								id='search'
								label=''
								register={register}
								error={query}
								isEmpty={isEmpty}
							/>
							<SearchResultUl isEmpty={isEmpty}>
								{searchResult.map((entry) => (
									<Link
										href={`/user/${entry.username}`}
										key={`search-result-${entry.username}`}
										passHref
									>
										<SearchResultLi>
											<Avatar
												username={entry.username}
												profileImageUrl={entry.avatar}
												size='small'
											/>
											<div>{entry.username}</div>
										</SearchResultLi>
									</Link>
								))}
							</SearchResultUl>
						</Search>
					</LogoAndSearch>

					<DesktopLinks as='ul' expanded={expanded}>
						<Links
							component={NavigationLink}
							isShown={expanded}
							onClick={() => setExpanded(false)}
							user={wuphfUser}
						/>
						<ButtonWrapper>
							<Button
								style={{ width: '95px' }}
								variant='secondary'
								onClick={handleSignout}
							>
								Sign Out
							</Button>
						</ButtonWrapper>
					</DesktopLinks>
					<MobileLinks as='ul' expanded={expanded}>
						<Links
							component={MobileLink}
							isShown={expanded}
							onClick={() => setExpanded(false)}
							user={wuphfUser}
						/>
					</MobileLinks>
					<MobileSignOutButton
						expanded={expanded}
						variant='secondary'
						onClick={handleSignout}
					>
						Sign Out
					</MobileSignOutButton>
					<Hamburger expanded={expanded} onClick={toggleExpanded}>
						<HamburgerLine expanded={expanded} />
						<HamburgerLine expanded={expanded} />
						<HamburgerLine expanded={expanded} />
					</Hamburger>
				</StyledNav>
			</NavWrapper>
		</Shadow>
	)
}

export default NavigationBar

const StyledImg = styled.img`
	cursor: pointer;
`

const Shadow = styled.div`
	box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
`

const NavWrapper = styled.div`
	max-width: 700px;
	margin: auto;
	background-color: white;
	display: block;
	z-index: 2;
`

const StyledNav = styled.nav`
	display: flex;
	height: 57px;
	background-color: ${({ theme }) => theme.colors.white};
	align-items: center;
	justify-content: space-between;
	z-index: inherit;
	padding: 0 1rem;
	@media (max-width: 768px) {
		width: 100%;
	}
`

const LogoAndSearch = styled.div`
	display: flex;
	gap: 1rem;
`

const MobileLinks = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	list-style: none;
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	background-color: inherit;
	transition: 0.5s ease-in-out;
	z-index: 2;
	overflow: hidden;
	height: ${(props) => (props.expanded ? '100vh' : '0px')};
	@media (min-width: 769px) {
		height: 0px;
	}
`

const DesktopLinks = styled.ul`
	display: flex;
	list-style: none;
	background-color: inherit;
	transition: 0.5s ease-in-out;
	z-index: 1;
	height: inherit;
	@media (max-width: 768px) {
		display: none;
	}
`

const MobileSignOutButton = styled(Button)`
	display: none;
	z-index: 2;
	top: 9px;
	left: 1rem;
	position: ${(props) =>
		props.expanded ? 'fixed !important' : 'absolute !important'};
	transition: opacity 0.5s ease-in;
	@media (max-width: 768px) {
		display: flex;
		opacity: ${(props) => (props.expanded ? '1' : '0')};
	}
`

const Hamburger = styled.div`
	z-index: 2;
	transition: 0.5s ease-in-out;
	display: ${(props) => (props.expanded ? 'flex' : 'none')};
	position: ${(props) =>
		props.expanded ? 'fixed !important' : 'absolute !important'};
	top: 9px;
	right: 1rem;
	background-color: #e5e5e5;
	border-radius: 5px;
	flex-direction: column;
	width: 40px;
	height: 40px;
	position: relative;
	cursor: pointer;
	display: none;

	@media (max-width: 768px) {
		display: flex;
	}

	&:hover {
		color: ${(props) => props.theme.colors.darkestBlue};
		justify-content: center;
	}
`

const HamburgerLine = styled.div`
	background-color: #828282;
	position: absolute;
	width: 60%;
	border-radius: 5px;
	height: 2px;
	transition: 0.5s ease-in-out;
	left: 20%;

	:nth-child(1) {
		top: 25%;
		${(props) =>
			props.expanded &&
			css`
				transform: rotate(45deg);
				top: 50%;
			`};
	}
	:nth-child(2) {
		top: 50%;
		opacity: ${(props) => (props.expanded ? '0' : '1')};
	}
	:nth-child(3) {
		top: 75%;
		${(props) =>
			props.expanded &&
			css`
				transform: rotate(-225deg);
				top: 50%;
			`};
	}
`

const StyledFormInput = styled(FormSearchInput)`
	width: 100%;
	padding: 0 10px;
`

const Search = styled.div`
	display: flex;
	align-items: center;
`

const SearchResultUl = styled.ul`
	position: absolute;
	top: 48px;
	height: auto;
	display: ${(props) => (props.isEmpty ? 'none;' : 'block;')};
	background-color: ${(props) => props.theme.colors.white};
	border-radius: 0 0 4px 4px;
	border: 1px solid #aaa;
	width: 250px;
`

const SearchResultLi = styled.li`
	cursor: pointer;
	height: 45px;
	display: flex;
	align-items: center;
	gap: 10px;
	padding: 10px;

	&:hover {
		background-color: ${(props) => props.theme.colors.lightBlue};
		color: ${(props) => props.theme.colors.darkestBlue};
	}
`

const ButtonWrapper = styled.div`
	max-height: 100%;
	display: flex;
	justify-items: center;
	padding: 10px 0;
`
