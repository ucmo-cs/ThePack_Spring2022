import React, { useState } from 'react'
import Avatar from './Avatar'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis, faPenToSquare, faTrashCan, faCheck } from '@fortawesome/free-solid-svg-icons'
import TextareaAutosize from 'react-textarea-autosize'

function Wuphf(props) {
	const [editMenuShown, setEditMenuShown] = useState(false)
	const [editable, setEditable] = useState(false)
	const [postContent, setPostContent] = useState(props.post)

	function toggleEditMenuShown(e) {
		e.preventDefault()
		setEditMenuShown(!editMenuShown)
	}

	function toggleEditable(e) {
		e.preventDefault()
		setEditMenuShown(false)
		setEditable(!editable)
	}

	function handleEdit(e) {
		if(editable) {
			setPostContent(e.target.value)
		}
	}

	function handleDelete(e) {
		e.preventDefault()
		setEditMenuShown(false)
		alert('TODO: Add delete API call.')
	}

	return (
		<PostBorder>
			<Container>
				<AvatarWrapper>
					<Avatar
						username={props.username}
						profileImageUrl={props.avatar}
						size='large'
					/>
				</AvatarWrapper>
				<PostWrapper>
					<TweetHeader>
						<Username as='h3'>{props.username}</Username>
						<EditCorner>
							<EditButton onClick={toggleEditMenuShown} icon={faEllipsis} color='#747378' />
							<EditMenu shown={editMenuShown}>
								<EditMenuItem onClick={toggleEditable} >
									<FontAwesomeIcon icon={faPenToSquare} />
									<span>Edit</span>
								</EditMenuItem>
								<EditMenuItem onClick={handleDelete}>
									<FontAwesomeIcon icon={faTrashCan} />
									<span>Delete</span>
								</EditMenuItem>
							</EditMenu>
						</EditCorner>
					</TweetHeader>
					<Post value={postContent} onChange={handleEdit} editable={editable} />
				</PostWrapper>
			</Container>
		</PostBorder>
	)
}

const Container = styled.div`
	display: grid;
	grid-template-columns: 5rem auto;
	width: 100%;
`

const TweetHeader = styled.div`
	display: flex;
	justify-content: space-between;
`

const EditCorner = styled.div`
	display: flex;
	flex-direction: column;
	align-items: end;
`

const EditButton = styled(FontAwesomeIcon)`
	&:hover {
		color: #202e4a;
	}
`

const EditMenu = styled.ul`
	background-color: #72d0ed;
	position: absolute;
	margin-top: revert;
	border-radius: 10px;
	height: ${(props) => (props.shown ? 'auto' : '0px')};
	display: ${(props) => (props.shown ? 'block' : 'none')};
	`
	
	const EditMenuItem = styled.li`
	padding: 5px 10px;
	display: flex;
	gap: 5px;
	cursor: pointer;

	
	:first-of-type {
		border-radius: 5px 5px 0 0;
	}

	:last-of-type {
		border-radius: 0 0 5px 5px;
	}

	&:hover {
		color: #f4f4f3;
		background-color: #7395b0;
	}
`

const AvatarWrapper = styled.div`
	position: relative;
	padding: 1rem;
	span {
		width: 50px;
		height: 50px;
	}
	margin: auto;
`

const PostWrapper = styled.div`
	padding: 1rem;
	padding-left: 0;
`

const Username = styled.h3`
	position: relative;
	font-weight: bold;
`

const Post = styled(TextareaAutosize)`
	padding-top: 5px;
	line-height: 1.25em;
	background: rgba(0, 0, 0, 0);
	border: none;
	cursor: ${props => (props.editable ? 'text' : 'default')};
	resize: none;
	width: 100%;
	height: 100%;
    box-shadow: none;
    outline: none;
`

const PostBorder = styled.div`
	&:not(:last-child) {
		border-bottom: 2px solid rgb(196, 196, 196);
	}
`

export default Wuphf
