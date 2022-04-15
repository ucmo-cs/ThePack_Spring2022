import Wuphf from '../components/Wuphf'
import Wuphfs from '../components/Wuphfs'
import WuphfInput from '../components/WuphfInput'
import tempPosts from '../assets/tempPosts'
import Link from 'next/link'
import Paragraph from './styledComponents/Paragraph'
import { useState, useEffect } from 'react'
import Error from './Error'
import Loading from './Loading'
import axios from 'axios'
import styled from 'styled-components'
import Button from './Button'

function Timeline() {
  const [wuphfs, setWuphfs] = useState(null)
  const [cursor, setCursor] = useState(null)
  const [maxResults, setMaxResults] = useState(2)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()

  const getWuphfs = async () => {
    const res = await axios
      .get(`../api/timeline?&maxResults=${maxResults}&cursor=${cursor}`)
      .catch((err) => {
        setError({ data: err.response.data, status: err.response.status })
      })
    const newWuphfs =
      wuphfs !== null ? [...wuphfs, ...res?.data.timeline] : res?.data.timeline
    setWuphfs(newWuphfs)
    setCursor(res?.data.cursor)
    setLoading(false)
  }

  useEffect(() => {
    getWuphfs()
  }, [])

  function handleClick() {
    getWuphfs()
  }

  if (loading) return <Loading />
  if (error) return <Error error={error} />

  return (
    <Wrapper>
      <Paragraph>
        <Link href="/register">CLICK: Username/Animal Selection Page</Link>
      </Paragraph>

      <InputAndWuphfs>
        <WuphfInput />
        {/* {JSON.stringify(wuphfs, null, 2)} */}
        <Wuphfs wuphfs={wuphfs} />
        <Button variant="primary" onClick={handleClick}>
          Load more
        </Button>
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
