import 'jest'
import * as request from 'supertest'

test('get /users', () =>{
  return request('http://localhost:3000')
    .get('/users')
    .then(response=>{
      expect(response.status).toBe(200)
      expect(response.body.items).toBeInstanceOf(Array)
    }).catch(fail)
})

test('post / users', () => {
  return request('http://localhost:3000')
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
