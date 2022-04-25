import React, { useState, useEffect } from 'react'

import PropTypes from 'prop-types'
import styled from 'styled-components'

import Loading from '../layout/Loading'
import Wuphf from './Wuphf'

Wuphfs.propTypes = {
	wuphfs: PropTypes.array.isRequired,
}

function Wuphfs(props) {
	const { lastWuphfElementRef } = props
	const [wuphfs, setWuphfs] = useState(props.wuphfs)

	useEffect(() => {
		setWuphfs(props.wuphfs)
	}, [props])

	if (!wuphfs || wuphfs.length === 0) {
		return <Loading />
	}

	function deleteWuphf(wuphfId) {
		setWuphfs(wuphfs.filter((wuphf) => wuphf.id !== wuphfId))
	}

	return (
		<Wrapper>
			{wuphfs.map((wuphf, index) => {
				if (wuphfs.length === index + 1) {
					return (
						<>
							<Wuphf
								lastWuphfElementRef={lastWuphfElementRef}
								key={`${wuphf.userId}-${wuphf.id}`}
								deleteWuphf={deleteWuphf}
								{...wuphf}
							/>
							{/* <p>last element {`${lastWuphfElementRef}`}</p> */}
						</>
					)
				} else {
					return <Wuphf key={wuphf.id} deleteWuphf={deleteWuphf} {...wuphf} />
				}
			})}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	border: 1.5px solid ${(props) => props.theme.colors.border};
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
	border-bottom-left-radius: 20px;
	border-bottom-right-radius: 20px;
`

export default Wuphfs
