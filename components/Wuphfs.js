import React from 'react'
import Wuphf from './Wuphf'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Title from './styledComponents/Title'

Wuphfs.propTypes = {
  wuphfs: PropTypes.array.isRequired,
}

function Wuphfs({ wuphfs }) {
  if (wuphfs?.length === 0) {
    return <Title>There are no Wuphfs to display.</Title>
  }

  return (
    <Wrapper>
      {wuphfs?.map((wuphf) => (
        <Wuphf key={wuphf.id} {...wuphf} />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border: 1.5px solid #ccc;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`

export default Wuphfs
