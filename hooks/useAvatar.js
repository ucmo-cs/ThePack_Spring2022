import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
const AvatarContext = React.createContext()

const AvatarContextProvider = ({ children }) => {
    const [avatars, setAvatars] = useState([])

    async function getAvatar() {
		const res = await axios.get('/api/avatar') 
        setAvatars(res.data)
    }

    function lookupAvatarIdByUrl(url) {
        return avatars.find(avatar => avatar.url === url).avatarId
    }

    useEffect(() => {
        getAvatar()
    }, [])

    return <AvatarContext.Provider value = {{ avatars, lookupAvatarIdByUrl } } > { children } </AvatarContext.Provider>
}

const useAvatars = () => {
    const avatarData = useContext(AvatarContext)

    return avatarData
}

export { AvatarContextProvider, useAvatars }