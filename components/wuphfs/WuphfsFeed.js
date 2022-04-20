import React, { useRef, useCallback } from 'react'

import Wuphfs from './Wuphfs'

function WuphfsFeed({ wuphfs, loading, hasMore, getWuphfs }) {
	const observer = useRef()
	const lastWuphfElementRef = useCallback(
		(node) => {
			if (loading) return
			if (observer.current) observer.current.disconnect()
			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting) {
					if (hasMore) getWuphfs()
				}
			})
			if (node) observer.current.observe(node)
		},
		[loading]
	)

	return <Wuphfs wuphfs={wuphfs} lastWuphfElementRef={lastWuphfElementRef} />
}

export default WuphfsFeed
