/**
 * @Author: Andreee Ray <develdoe>
 * @Date:   2017-03-28T15:14:21+02:00
 * @Email:  me@andreeray.se
 * @Filename: localstorage.jsx
 * @Last modified by:   develdoe
 * @Last modified time: 2017-03-28T15:36:18+02:00
 */



 module.exports = {
     setArray: function (array) {
         if (Array.isArray(array)) {
             localStorage.setItem('array',JSON.stringify(array))
             return array
         }
     },
     getArray: function () {
         var stringArray = localStorage.getItem('array')
         var array = []
         try { array = JSON.parse(stringArray) } catch (e) {}
         return Array.isArray(array) ? array : []
     }
 }
