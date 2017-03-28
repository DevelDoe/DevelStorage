/**
* @Author: Andreee Ray <DevelDoe>
* @Date:   2017-03-05T16:09:24+01:00
* @Email:  me@andreeray.se
* @Filename: index.jsx
* @Last modified by:   develdoe
* @Last modified time: 2017-03-13T20:50:14+01:00
*/

var axios = require('axios')

export var changeAppName = (appName) =>
{
    return {
        type: 'CHANGE_APP_NAME',
        appName
    }
}
export var addStatus = (status) => {
    return {
        type: 'ADD_STATUS',
        status
    }
}
export var clearStatus = () => {
    return {
        type: 'CLEAR_STATUS',
    }
}
export var addMovie = (title,genre) =>
{
    return {
        type: 'ADD_MOVIE',
        title,
        genre
    }
}
export var removeMovie = (id) =>
{
    return {
        type: 'REMOVE_MOVIE',
        id
    }
}
export var startLocationFetch = () =>
{
    return {
        type: 'START_LOCATION_FETCH'
    }
}
export var fetchLocation = () =>
{
    return (dispatch, getState) =>
    {
        dispatch(startLocationFetch())
        axios.get('http://ipinfo.io').then(function (res) {
            var loc = res.data.loc
            var baseUrl = 'http://maps.google.com?q='
            dispatch(completeLocationFetch(baseUrl+loc))
        })
    }
}
export var completeLocationFetch = (url) =>
{
    return {
        type: 'COMPLETE_LOCATION_FETCH',
        url
    }
}
