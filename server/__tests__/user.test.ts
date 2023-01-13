// @ts-nocheck
import '../src/utils/load.env'
import request from 'supertest'
import app from '../src/app'
import mongoose from 'mongoose'

describe('API Test', () => {
  beforeAll(async () => {
    // @ts-ignore
    await mongoose.connect(process.env.DB_URI, {})
  })

  afterAll(async () => {
    await mongoose.connection.close()
  })

  it('should get /me', async () => {
    const res = await request(app).get('/api/v1/me')

    expect(res.statusCode).toBe(200)
  })
})
