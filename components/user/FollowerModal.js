import Link from 'next/link'
import styled from 'styled-components'

import Avatar from '../general/Avatar'
import Button from '../general/Button'


export default function FollowerModal({ title, rows, onClose }) {
    return (
        <Modal>
            <ModalContent>
                <ModalHeader>
                    <ModalTitle>
                        <ModalTitleText>
                            {title}
                        </ModalTitleText>
                        <Button variant='secondary' onClick={onClose}>Close</Button>
                    </ModalTitle>
                </ModalHeader>
                <ModalBody>
                    {
                        rows.map(entry => (
                            <Link href={`/user/${entry.userName}`} key={entry.userName}>
                                <Entry>
                                    <Avatar
                                        username={entry.userName}
                                        profileImageUrl={entry.avatar}
                                        size='medium'
                                    />
                                    {entry.userName}
                                </Entry>
                            </Link>
                        ))
                    }
                </ModalBody>
            </ModalContent>
        </Modal>

    )
}

const Modal = styled.div`
    display: block; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 10; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
`

const ModalContent = styled.div`
    position: relative;
    background-color: #fefefe;
    margin: auto;
    padding: 0;
    border: 1px solid #888;
    width: 80%;
    max-width: 400px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    animation-name: animatetop;
    animation-duration: 0.4s
`

const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
`

const ModalTitle = styled.div`
    padding: 20px 20px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-size: 1.5rem;
`

const ModalTitleText = styled.div`

    font-size: 1.5em;
    font-weight: bold;
`

const ModalBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2px 16px;
`

const Entry = styled.div`
    display: flex;
    justify-content: left;
    gap: 20px;
    padding: 2px 16px;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    color: black;
    font-size: 1.5em;
    
    &:hover {
        text-decoration: underline;
    }
`