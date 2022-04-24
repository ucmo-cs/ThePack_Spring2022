import React from 'react'

import Link from 'next/link'
import styled from 'styled-components'

import WuphfSVG from '../../assets/WuphfSVG'

function WuphfLogo() {
	return (
		<Link href='/'>
			<Wrapper>
				<WuphfSVG />
			</Wrapper>
		</Link>
	)
}

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	padding: 2px;

	&:hover {
		cursor: pointer;
		background-color: ${({ theme }) => theme.colors.highlight};
	}

	&:active {
		background-color: ${({ theme }) => theme.colors.highlightPressed};
	}

	height: 40px;
	width: 40px;
`

const StyledSVG = styled.svg``

export default WuphfLogo
