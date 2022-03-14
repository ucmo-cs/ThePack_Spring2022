import React from "react"
import styled from "styled-components"

const SettingBorder = styled.div`
   border-style: solid;
   border-width: thin;
   border-radius: 20px;
   padding: 1em 1em 1em 1em;
   margins: 10px;
`

const WuphfTitle = styled.h1`
   margin: auto;
   text-align: center;

`

function SettingsForm() {
   return (
      <SettingBorder>
         <WuphfTitle>
            WUPHF
         </WuphfTitle>
      </SettingBorder>
   )
}

export default SettingsForm