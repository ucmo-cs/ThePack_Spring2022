import React, { useState, useEffect, useContext } from 'react'
const AvatarContext = React.createContext()

const AvatarContextProvider = ({ children }) => {
    const [avatars, setAvatars] = useState([])

    useEffect(() => {
        // TODO: Fetch avatars from server instead of hard-coded values
        setAvatars([{
                url: 'animal_svgs/dog_nau7in.svg',
                name: 'Dog',
                key: 'dog',
            },
            {
                url: 'animal_svgs/cat_hizjv6.svg',
                name: 'Cat',
                key: 'cat'
            },
            {
                url: 'animal_svgs/bird_wlfceb.svg',
                name: 'Bird',
                key: 'bird'
            },
            {
                url: 'animal_svgs/owl_xnejqi.svg',
                name: 'Owl',
                key: 'owl'
            },
            {
                url: 'animal_svgs/monkey_ywewbg.svg',
                name: 'Monkey',
                key: 'monkey'
            },
            {
                url: 'animal_svgs/bunny_tgvcdh.svg',
                name: 'Bunny',
                key: 'bunny'
            },
            {
                url: 'animal_svgs/panda_fb7grl.svg',
                name: 'Panda',
                key: 'panda'
            },
        ])
    }, [])

    return <AvatarContext.Provider value = {{ avatars } } > { children } </AvatarContext.Provider>
}

const useAvatars = () => {
    const avatarData = useContext(AvatarContext)

    return avatarData
}

export { AvatarContextProvider, useAvatars }