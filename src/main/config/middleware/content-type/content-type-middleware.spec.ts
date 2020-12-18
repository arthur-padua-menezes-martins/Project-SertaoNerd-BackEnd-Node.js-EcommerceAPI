import request from 'supertest'
import app from '../../app'

describe('content-type Middleware', () => {
  test('Should return default content-type as json', async () => {
    app.get('/@middleware_content_type', (req, res) => {
      res.send({})
    })

    await request(app)
      .get('/@middleware_content_type')
      .expect('content-type', /json/)
  })

  test('Should return default content-type as javascript', async () => {
    app.get('/@middleware_content_type_javascript', (req, res) => {
      res.type('application/javascript')
      res.send({})
    })

    await request(app)
      .get('/@middleware_content_type_javascript')
      .expect('content-type', /javascript/)
  })
})
