import { dummySearchResults } from "../assets/dummySearchResults"
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export function useSearch() {
    const [search, setSearch] = useState('Initial Search State')
    const [result, setResult] = useState(dummySearchResults)
    const { register, formState: { errors }} = useForm()

    function clearQuery() {
        setSearch('')
        setResult([])
    }

    function setQuery(s) {
        setSearch(s)
        // TODO: Add API call
        setResult(dummySearchResults)
    }

    return {
        query: errors.search, register, clearQuery, result
    }
}