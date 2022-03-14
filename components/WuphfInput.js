import React, { useState } from "react"
import styled, { css } from "styled-components"

const Button = styled.button`
  background-color: #7395b0;
  color: white;
  padding: 4px 24px;
  border-radius: 90px;
  font-size:20px;
  line-height: 20px;
  text-align: right;
  font-weight: 600;
`

const PostBorder = styled.form`
   border: 5px #7395b0;
   border-style: solid;
   border-radius: 15px;
   width: 1000px;
   height: 100px;
`

const PostTextArea = styled.textarea`
   rows: 6;
   cols: 10;

`

function WuphfInput() {
   const [post, setPost] = useState("")

   function handleChange(event) {
      setPost(event.target.value)
   }

   function userSubmission(event) {
      event.preventDefault();
      if (post.length > 0)
         alert(`The text entered was: ${post} `)
      else {
         alert(`Enter a post to submit.`)
      }
   }

   return (
      <PostBorder onSubmit={userSubmission}>
         <PostTextArea value={post} onChange={handleChange} placeholder="What's happening?" />
         <Button type="submit">
            WUPHF!
         </Button>
      </PostBorder>
   )
}
// export default WuphfInput
export default WuphfInput
