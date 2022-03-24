import React from 'react'
import Avatar from '../components/Avatar'
import ViewWuphfs from '../components/ViewWuphfs'
import styles from '../styles/Profile.module.css'
import Button from '../components/Button'
import tempPosts from '../assets/tempPosts'

function profilePage(props){
    return(
        <div>
            {/* this is a temporary navbar, replace */}
            <nav className={styles.nav}>
                WUPHF
            </nav>

            <div className={styles.topcontainer}>
                <div className={styles.banner}></div>

                <div className={styles.avatar}>
                    <Avatar
                        username='John Doe'
                        profileImageUrl='sample.jpg'
                        size='large'
                    />
                </div>
        
                <div className={styles.header}>

                    <div className={styles.text}>
                        <h1 className={styles.username}>{props.username}</h1>
                        <h3 className={styles.joined}>Joined {props.joinDate}</h3>
                    </div>
            
                    <div className={styles.buttons}>
                        <Button
                            variant= "primary"
                        />
                        <Button
                            variant= "primary"
                        />
                        <Button
                            variant= "primary"
                        />
                    </div>
                </div>

                {/* //replace below with user input Biography in settings page */}
                <div className={styles.bio} >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.
                </div>
            </div>
            <ViewWuphfs posts={tempPosts} />

        </div>

    )
}

export default profilePage