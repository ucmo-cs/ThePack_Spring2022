import { useEffect } from 'react'
import { dummySearchResults } from "../assets/dummySearchResults"
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export function useSearch() {
    const [result, setResult] = useState([])
    const { register, formState: { errors }, handleSubmit, watch } = useForm()
    const [isEmpty, setIsEmpty] = useState(true)

    useEffect(() => {
        const subscription = watch(value => {
            // TODO: replace with actual API call
            if(value.search === '') {
                setResult([])
                setIsEmpty(true)

            } else {
                setIsEmpty(false)
                handleSubmit(setResult(mockAPICall()))
            }
            
		})
		return () => subscription.unsubscribe()
    }, [watch])

    return {
        query: errors.search, register, result, isEmpty
    }
}

function mockAPICall() {
    const data = dummySearchResults

    const result = [data[Math.floor(Math.random() * data.length)]]
    for(let i=0; i<data.length; i++) {
        if((Math.floor(Math.random() * 2) === 0)) {
            const entry = data[i]
            if(entry !== result[0]) {
                result.push(entry)
            }
        }
    }

    return result
}