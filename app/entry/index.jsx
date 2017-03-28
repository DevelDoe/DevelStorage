/**
* @Author: Andreee Ray <develdoe>
* @Date:   2017-03-13T13:54:41+01:00
* @Email:  me@andreeray.se
* @Filename: app.jsx
 * @Last modified by:   develdoe
 * @Last modified time: 2017-03-28T15:34:19+02:00
*/

var React = require('react'),
    ReactDOM = require('react-dom'),
    {Provider} = require('react-redux'),
    Component = require('component')

var store = require('store').store(),
    actions = require('actions')

import localstorage from 'app/api/localstorage'

// Redux
// ######################################

var unsubscribe = store.subscribe(() =>{
    var state = store.getState()
    localstorage.setArray(state.movies)
    document.title = state.appName
})

store.dispatch(actions.changeAppName('LocalStorage'))
store.dispatch(actions.addMovie('Star Wars','Sci-fi'))
store.dispatch(actions.addMovie('Mad Max','Action'))
store.dispatch(actions.addMovie('Logan','Action'))
store.dispatch(actions.removeMovie(1))
store.dispatch(actions.fetchLocation())

// Bootstraping
// ########################################

// Inject splash information
var ul = document.getElementById('application-status');
ul.innerHTML = '<li>Loading </li>'
var li = document.createElement("li");
li.appendChild(document.createTextNode(''));
li.innerHTML = 'Scripting <span class="blink">.</span>'
document.title = 'Scripting'
ul.appendChild(li);

// This shows up when react renders
store.dispatch(actions.addStatus('Rendering'))


ReactDOM.render(<Provider store={store}><Component/></Provider>, document.getElementById('app'))
