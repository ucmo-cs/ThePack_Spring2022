import React from 'react'

import { faGear, faPaintRoller, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled, { useTheme } from 'styled-components'

import { accountConfigurationItems, profileConfigurationItems, visualsConfigurationItems } from '../../assets/settingsPageConfigurations'

export default function Sidebar() {
   const theme = useTheme()

   return (
      <SSidebar>
         <Icon>
            <FontAwesomeIcon icon={faUser} color={theme.colors.darkestBlue} size='2x' />
            <HeaderText>Profile</HeaderText>
         </Icon>
         <SStylefixing>
            {profileConfigurationItems.map((entry) => <SidebarList brand={entry} key={`profilesublist-${entry.target}`} />)}
         </SStylefixing>
         <Icon>
            <FontAwesomeIcon icon={faGear} color={theme.colors.darkestBlue} size='2x' />
            <HeaderText>Account</HeaderText>
         </Icon>
         <SStylefixing>
            {accountConfigurationItems.map((acctentry) => <SidebarList brand={acctentry} key={`acctlist-${acctentry.target}`} />)}
         </SStylefixing>
         <Icon>
            <FontAwesomeIcon icon={faPaintRoller} color={theme.colors.darkestBlue} size='2x' />
            <HeaderText>Visuals</HeaderText>
         </Icon>
         <SStylefixing>
            {visualsConfigurationItems.map((acctentry) => <SidebarList brand={acctentry} key={`acctlist-${acctentry.target}`} />)}
         </SStylefixing>
      </SSidebar>
   )
}

function SidebarList(props) {
   return <Styledli>
      <AtagStyle href={`#${props.brand.target}`} > {props.brand.displayName}</AtagStyle>
   </Styledli>
}

const SSidebar = styled.div`
   padding: 20px;
   width: 100%;
   width: 250px;
   margin-left: -250px;
   background: ${props => props.theme.colors.lightBlue};
   height: 100vh;
   justify-content: flex-start;
   position: sticky;
   top: 0;
   left: 0;

   @media (max-width: 1200px) {
      display: none;
   }
`
const HeaderText = styled.text`
   font-size: 2rem;
   font-weight: bold;   
   border: none;
   text-align: left;
   color: ${props => props.theme.colors.darkestBlue};
`
const Styledli = styled.li`
   list-style-type: none;
   font-size: 1.1rem;
   font-weight: bold;   
   border: none;
   margin-left: 3.5rem;
   margin-bottom: 0.8rem;
   color: ${props => props.theme.colors.darkestBlue};
`
const Icon = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: flex-start;
   align-items: center;
   text-align: center;
   gap: 8px;
`

const SStylefixing = styled.ul`
   margin-top: 3px;
   margin-bottom: 10px
`
const AtagStyle = styled.a`
   text-decoration: none;
   color: ${props => props.theme.colors.darkestBlue};

`