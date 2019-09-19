import 'jest'
import * as request from 'request'
import {enviroment} from '../common/enviroment'


let address: string = 'http://localhost:3001'

test('get /review', () =>{
  return request(address)
        .get('/reviews')
        .then(response =>{
          expect(response.status).toBe(200)
          expect(response.body.items).toBeInstanceOf(Array)
        })
        .catch(fail)
})
