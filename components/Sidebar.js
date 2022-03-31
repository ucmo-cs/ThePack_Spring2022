import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faUser } from '@fortawesome/free-solid-svg-icons'

export default function Sidebar() {
   const Profilesublist = [
      {
         displayName: 'Avatar',
         target: 'avatar'
      },
      {
         displayName: 'Username',
         target: 'username'
      },
      {
         displayName: 'Biography',
         target: 'biography'
      }
   ]
   const Accountsublist = [
      {
         displayName: 'Linked Accounts',
         target: 'linked_account'
      },
      {
         displayName: 'Delete Account',
         target: 'delete_account'
      }
   ]
   return (
      <SSidebar>
         <Icon>
            <FontAwesomeIcon icon={faUser} color='#202e4a' size='2x' />
            <HeaderText>Profile</HeaderText>
         </Icon>
         <SStylefixing>
            {Profilesublist.map((entry) => <SidebarList brand={entry} key={`profilesublist-${entry.target}`} />)}
         </SStylefixing>
         <Icon>
            <FontAwesomeIcon icon={faGear} color='#202e4a' size='2x' />
            <HeaderText>Account</HeaderText>
         </Icon>
         <SStylefixing>
            {Accountsublist.map((acctentry) => <SidebarList brand={acctentry} key={`acctlist-${acctentry.target}`} />)}
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
   padding: 10px;
   width: 100%;
   max-width: 250px;
   background: #72d0ed;
   height: 100vh;
   justify-content: flex-start;
   position: sticky;
   top: 0;
   left: 0;
`
const HeaderText = styled.text`
   font-size: 2rem;
   font-weight: bold;   
   border: none;
   text-align: left;
   color: #202e4a;
`
const Styledli = styled.li`
   list-style-type: none;
   font-size: 1.1rem;
   font-weight: bold;   
   border: none;
   margin-left: 3.5rem;
   margin-bottom: 0.8rem;
   color: #202e4a;
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
   color: #202e4a;

`