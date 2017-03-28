/**
 * @Author: Andreee Ray <develdoe>
 * @Date:   2017-03-28T23:00:57+02:00
 * @Email:  me@andreeray.se
 * @Filename: localstorage.test.jsx
 * @Last modified by:   develdoe
 * @Last modified time: 2017-03-28T23:19:56+02:00
 */

var expect = require('expect')
import LocalStorageAPI from 'app/api/localstorage'

describe('LocalStorageAPI', () => {

    // Clear localstorage
    beforeEach( () => { localStorage.removeItem('array') } )

    // Should Exist
    it('exist', () => { expect(LocalStorageAPI).toExist() })

    // Set
    describe('setArray', () => {
        it('should set valid data array', () => {
            var mock = [{"id":0,"title":"Star Wars","genre":"Sci-fi"}]
            LocalStorageAPI.setArray(mock)
            var res = JSON.parse(localStorage.getItem('array'))
            expect(res).toEqual(mock)
        })
        it('should not set invalid data type', () => {
            var mock = 'not array'
            LocalStorageAPI.setArray(mock)
            expect(localStorage.getItem('array')).toBe(null)
        })
    })

    // get
    describe('getArray', () => {
        it('should return empty array', () => {
            var res = LocalStorageAPI.getArray()
            expect(res).toEqual([])
        })
        it('should return todo if an array is set', () => {
            var mock = [{"id":0,"title":"Star Wars","genre":"Sci-fi"}]
            localStorage.setItem('array', JSON.stringify(mock))
            var res = LocalStorageAPI.getArray()
            expect(res).toEqual(mock)
        })
    })
})
