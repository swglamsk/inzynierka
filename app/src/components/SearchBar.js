import React, {useReducer, useCallback, useRef, useEffect} from 'react'
import {Search} from "semantic-ui-react"
import _ from "lodash"
import {useStaticQuery, graphql} from "gatsby"

const initialState = {
    loading: false,
    results: [],
    value: ""
}
const reducer = (state, action) => {
    switch(action.type){
        case 'CLEAN_QUERY':
            return initialState
        case 'START_SEARCH':
            return {...state, loading:true, value:action.query}
        case 'FINISH_SEARCH':
            return {...state, loading:false, results:action.results}
        case 'UPDATE_SELECTION':
            return {...state, value:action.selection}
        default:
            throw new Error()
    }
}
const SearchBar = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const {loading, results, value} = state
    const timeoutRef = useRef()

    const query = useStaticQuery(graphql`
    {
      allStrapiPost {
        edges {
          node {
            Title
            id
            category {
              Category_name
            }
            author {
              username
            }
          }
        }
      }
    }
  `)
    const handleSearchChange = useCallback((e, data) => {
        clearTimeout(timeoutRef.current)
        dispatch({type: 'START_SEARCH', query: data.value})

        timeoutRef.current = setTimeout(() =>{
            if(data.value.length === 0){
                dispatch({type: 'CLEAN_QUERY'})
                return
            }

            const re = new RegExp(_.escapeRegExp(data.value), 'i')
            const isMatch = (result) => re.test(result.title)

            dispatch({
                type: 'FINISH_SEARCH',
                results: _.filter(source, isMatch)
            })
        }, 300)

    }, [])

    useEffect(() => {
        return () => {
            clearTimeout(timeoutRef.current)
        }
    }, [])

    return (
        <Search loading ={loading} onSearchChange={handleSearchChange}></Search>
    )
}