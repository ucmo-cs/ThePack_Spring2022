import React from 'react'
import styles from '../styles/ViewWuphfs.module.css'
import Avatar from './Avatar'

function ViewWuphf(props) {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <Avatar
          username={props.username}
          profileImageUrl={props.avatar}
          size="medium"
        />
      </div>
      <div className={styles.postWrapper}>
        <h3 className={styles.username}>{props.username}</h3>
        <p className={styles.post}>{props.post}</p>
      </div>
    </div>
  )
}

export default ViewWuphf
