import 'jest'
import * as request from 'supertest'
import {Server} from '../server/server'
import {enviroment}  from '../common/enviroment'
import {usersRouter} from './users.router'
import {User} from './users.model'

let address: string
let server: Server

beforeAll(() => {
  enviroment.db.url = process.env.DB_URL || 'mongodb://localhost/meat-api-test-db'
  enviroment.server.port = process.env.SERVER_PORT || 3001
  address = `http://localhost:${enviroment.server.port}`
  server = new Server()
  return server.bootstrap([usersRouter])
               .then(() => User.remove({}).exec())
               .catch(console.error)
})


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

afterAll(() =>{
  return server.shutdown()
})
