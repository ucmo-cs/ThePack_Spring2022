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

function Timeline() {
  const [wuphfs, setWuphfs] = useState()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()

  useEffect(() => {
    const getWuphfs = async () => {
      const res = await axios.get('../api/wuphfs').catch((err) => {
        setError({ data: err.response.data, status: err.response.status })
      })
      setWuphfs(res?.data)
      setLoading(false)
    }

    getWuphfs()
  }, [])

  if (loading) return <Loading />
  if (error) return <Error error={error} />

  return (
    <Wrapper>
      <Paragraph>
        <Link href="/register">CLICK: Username/Animal Selection Page</Link>
      </Paragraph>

      <InputAndWuphfs>
        <WuphfInput />
        <Wuphfs wuphfs={wuphfs} />
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
