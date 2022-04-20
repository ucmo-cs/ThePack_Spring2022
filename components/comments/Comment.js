import react, { useState } from 'react'

import styled from 'styled-components'

import Avatar from '../general/Avatar'
/*
Props Needed:
Comment Body
UserName for the Comment
Theme Colors
WuphfId?

*/
function Comment(props){

    return(
        <div>
            <AvatarWrapper>
                <Avatar
                    username={props.userName}
                    profileImageUrl='animal_svgs/cat_hizjv6.svg'
                    size='small'
                />   
            </AvatarWrapper>
            <h3>{props.userName}</h3>
            <textarea readOnly> 
                {props.commentBody}
            </textarea>
        </div>
    )
}