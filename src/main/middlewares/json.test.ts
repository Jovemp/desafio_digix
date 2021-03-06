import app from '../config/app'
import request from 'supertest'

describe('Json parser middleware', () => {
  test('should parse body as json', async () => {
    app.post('/test-json-parser', (req, res) => {
      return res.send(req.body)
    })
    await request(app)
      .post('/test-json-parser')
      .send({ name: 'paulo' })
      .expect({ name: 'paulo' })
  })
})
