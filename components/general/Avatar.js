import React from 'react'

import Image from 'next/image'
import Link from 'next/link'
import PropTypes from 'prop-types'
import styled from 'styled-components'

Avatar.propTypes = {
	username: PropTypes.string.isRequired,
	profileImageUrl: PropTypes.string.isRequired,
	size: PropTypes.oneOf(['small', 'medium', 'large']),
}

const StyledImage = styled(Image)`
	border-radius: 50%;
	border: 1px solid ${(props) => props.theme.colors.lightGrey};
`

const MyImage = React.forwardRef(({ width, height, src, alt, title, href }) => {
	return (
		<StyledImage
			width={width}
			height={height}
			src={src}
			alt={alt}
			title={title}
			href={href}
		/>
	)
})
MyImage.displayName = 'MyImage'

function Avatar(props) {
	const { username, profileImageUrl, size } = props
	let width = 0
	if (size === 'small') {
		width = 30
	} else if (size === 'medium') {
		width = 50
	} else if (size === 'large') {
		width = 150
	}
	let height = width

	return (
		<>
			<Link href={`/user/${username}`} passHref>
				<MyImage
					width={width}
					height={height}
					src={profileImageUrl || '/animal_svgs/dog_nau7in.svg'}
					alt={username}
					title={username}
				/>
			</Link>
		</>
	)
}

export default Avatar
