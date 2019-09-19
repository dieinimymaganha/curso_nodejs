import 'jest'
import * as request from 'supertest'
import {Server} from '../server/server'
import {enviroment}  from '../common/enviroment'
import {usersRouter} from './users.router'
import {User} from './users.model'

let address: string = 'http://localhost:3001'

test('post / users', () => {
  return request(address)
  .post('/users')
  .send({
    name: 'usuario1',
    email: 'usuario@email.com',
    password: '123456',
    cpf: '962.116.531-82'
  })
  .then(response=>{
    expect(response.status).toBe(200)
    expect(response.body._id).toBeDefined()
    expect(response.body.name).toBe('usuario1')
    expect(response.body.email).toBe('usuario@email.com')
    expect(response.body.cpf).toBe('962.116.531-82')
    expect(response.body.password).toBeUndefined()
  }).catch(fail)
})



test('get /users', () =>{
  return request(address)
    .get('/users')
    .then(response=>{
      expect(response.status).toBe(200)
      expect(response.body.items).toBeInstanceOf(Array)
    }).catch(fail)
})


test('get /users/aaaa - not found', () => {
  return request(address)
      .get('/users/aaaa')
      .then(response =>{
        expect(response.status).toBe(404)
      }).catch(fail)
})

test('path /users/:id', () =>{
  return request(address)
  .post('/users')
  .send({
    name: 'usuario2',
    email: 'usuario2@email.com',
    password: '123456'
  })
  .then(response=> request(address)
                .patch(`/users/${response.body._id}`)
                .send({
                  name: 'usuario2 - patch'
                }))
  .then(response =>{
    expect(response.status).toBe(200)
    expect(response.body._id).toBeDefined()
    expect(response.body.name).toBe('usuario2 - patch')
    expect(response.body.email).toBe('usuario2@email.com')
    expect(response.body.password).toBeUndefined()
  })
  .catch(fail)
})
