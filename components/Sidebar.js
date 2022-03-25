import React from 'react'
import styled from 'styled-components'

const SSidebar = styled.div`
   width: 430px;
   background: #72d0ed;
   height: 100vh;
   justify-content: flex-start;
   position: sticky;
   top: 0;
   left: 0;
`
const HeaderText = styled.text`
   font-size: 2.4rem;
   font-weight: bold;   
   border: none;
   text-align: left;
   margin-top: 10px;
   padding-left: 3px;
   color: #202e4a;
`
const Styledli = styled.li`
   list-style-type: none;
   font-size: 1.5rem;
   font-weight: bold;   
   border: none;
   margin-left: 7.5rem;
   margin-bottom: 0.8rem;
   color: #202e4a;
`
const Iconprofilespace = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: flex-start;
   padding-top: 1.6rem;
   padding-left: 1.6rem;
   gap: 8px;
`
const IconAcctspace = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: flex-start;
   padding-left: 1.6rem;
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
function SidebarList(props) {
   return <Styledli>
      <AtagStyle href={`#${props.brand.target}`} > {props.brand.displayName}</AtagStyle>
   </Styledli>;
}
function Sidebar() {
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
   ];
   const Accountsublist = [
      {
         displayName: 'Linked Accounts',
         target: 'linked_account'
      },
      {
         displayName: 'Delete Account',
         target: 'delete_account'
      }
   ];
   return (
      <SSidebar>
         <Iconprofilespace>
            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" fill='#202e4a'><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z" /></svg>
            <HeaderText> Profile </HeaderText>
         </Iconprofilespace>
         <SStylefixing>
            {Profilesublist.map((Profilesublist) => <SidebarList brand={Profilesublist} />)}
         </SStylefixing>
         <IconAcctspace>
            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" fill='#202e4a'><path d="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z" /></svg>
            <HeaderText> Account </HeaderText>
         </IconAcctspace>
         <SStylefixing>
            {Accountsublist.map((Accountsublist) => <SidebarList brand={Accountsublist} />)}
         </SStylefixing>
      </SSidebar>
   )
}
export default Sidebar