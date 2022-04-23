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

function getWuphfUrlFromID(id) {
	switch (id) {
		case 1:
			return 'animal_svgs/dog_nau7in.svg'
		case 2:
			return 'animal_svgs/cat_hizjv6.svg'
		case 3:
			return 'animal_svgs/bird_wlfceb.svg'
		case 4:
			return 'animal_svgs/owl_xnejqi.svg'
		case 5:
			return 'animal_svgs/monkey_ywewbg.svg'
		case 6:
			return 'animal_svgs/panda_fb7grl.svg'
		case 7:
			return 'animal_svgs/bunny_tgvcdh.svg'
	}
	// monkey_ywewbg
	// cat_hizjv6
	// dog_nau7in
	// panda_fb7grl
	// bird_wlfceb
	// owl_xnejqi
	// bunny_tgvcdh
	//
}

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
					src={
						getWuphfUrlFromID(profileImageUrl) || '/animal_svgs/dog_nau7in.svg'
					}
					alt={username}
					title={username}
				/>
			</Link>
		</>
	)
}

export default Avatar
