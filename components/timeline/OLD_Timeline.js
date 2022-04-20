
import styled from 'styled-components'

import Error from '../layout/Error'

function Timeline() {
	// function handleDeleteWuphf(index) {
	// 	setWuphs(wuphfs.filter((wuphf, i) => i !== index))
	// }

	// if (loading) return <Loading />
	if (error) return <Error error={error} />

	return (
		<Wrapper>
			{/* <Paragraph>
				<Link href='/register'>CLICK: Username/Animal Selection Page</Link>
			</Paragraph> */}

			<InputAndWuphfs>
				{/* {JSON.stringify(wuphfs, null, 2)} */}
				{/* <Wuphfs wuphfs={wuphfs} lastWuphfElementRef={lastWuphfElementRef} /> */}
				{/* <Button variant='primary' onClick={handleClick}>
					Load more
				</Button> */}
			</InputAndWuphfs>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`

const InputAndWuphfs = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`

export default Timeline
