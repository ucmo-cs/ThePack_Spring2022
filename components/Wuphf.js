import React, { useState } from 'react'
import Avatar from './Avatar'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faEllipsis,
	faPenToSquare,
	faTrashCan,
	faCheck,
	faCediSign,
	faBan,
} from '@fortawesome/free-solid-svg-icons'
import TextareaAutosize from 'react-textarea-autosize'
import Button from './Button'

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
		if (editable) {
			setPostContent(e.target.value)
		}
	}

	function handleDelete(e) {
		e.preventDefault()
		setEditMenuShown(false)
		alert('TODO: Add delete API call.')
	}

	function handleSave(e) {
		e.preventDefault()
		setEditable(false)
		alert('TODO: Add update API call.')
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
							<StyledEditButton
								icon={faEllipsis}
								onClick={toggleEditMenuShown}
								color='#747378'
								shown={editMenuShown}
							/>
							<EditMenu shown={editMenuShown}>
								{!editable && (
									<EditMenuItem onClick={toggleEditable}>
										<FontAwesomeIcon icon={faPenToSquare} />
										<span>Edit</span>
									</EditMenuItem>
								)}
								{editable && (
									<EditMenuItem onClick={toggleEditable}>
										<FontAwesomeIcon icon={faBan} />
										<span>Cancel</span>
									</EditMenuItem>
								)}
								<EditMenuItem onClick={handleDelete}>
									<FontAwesomeIcon icon={faTrashCan} />
									<span>Delete</span>
								</EditMenuItem>
							</EditMenu>
						</EditCorner>
					</TweetHeader>
					<SecondRow>
						<Post
							value={postContent}
							onChange={handleEdit}
							editable={editable}
						/>
						<SaveButton
							shown={editable}
							variant='secondary'
							onClick={handleSave}
						>
							<span>Save changes</span>
							<FontAwesomeIcon icon={faCheck} />
						</SaveButton>
					</SecondRow>
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

const StyledEditButton = styled(FontAwesomeIcon)`
	padding: 5px;
	border-radius: 50%;
	background-color: ${(props) => (props.shown ? '#72d0ed' : 'auto')};
	&:hover {
		background-color: #72d0ed;
		color: #202e4a;
	}
`

const EditMenu = styled.ul`
	background-color: #72d0ed;
	position: absolute;
	margin-top: 25px;
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
		border-radius: 10px 10px 0 0;
	}

	:last-of-type {
		border-radius: 0 0 10px 10px;
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
	margin: 0 auto;
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
	font-family: inherit;
	font-size: inherit;
	padding: 5px;
	line-height: 1.25em;
	background: rgba(0, 0, 0, 0);
	border: ${(props) => (props.editable ? '1px solid #202e4a' : 'none')};
	border-radius: 10px;
	cursor: ${(props) => (props.editable ? 'text' : 'default')};
	resize: none;
	width: 100%;
	height: 100%;
	box-shadow: none;
	outline: none;
`

const PostBorder = styled.div`
	&:not(:last-child) {
		border-bottom: 1.5px solid #ccc;
	}
`

const SaveButton = styled(Button)`
	display: ${(props) => (props.shown ? 'flex' : 'none')};
	justify-content: flex-end;
	gap: 10px;
	width: max-content;
`

const SecondRow = styled.div`
	display: flex;
	align-items: flex-end;
	flex-direction: column;
	gap: 5px;
`

export default Wuphf
