import { resizeImage } from './../utilities/resizeImage'
import fs from 'fs'
import app from '../index'
import supertest from 'supertest'

const request = supertest(app)

describe('1- testing endpoint', () => {
  it('1.should return a 200 status code', async () => {
    const response = await request.get(
      '/api/image?width=100&height=100&filename=coffee'
    )
    expect(response.status).toBe(200)
  })
})

describe('2- image not found', () => {
  it('1.should return a 404 status code', async () => {
    const response = await request.get(
      '/api/image?width=100&height=100&filename=coe'
    )
    expect(response.status).toBe(404)
  })
  it('2.filename not found', async () => {
    const response = await request.get('/api/image?width=100&height=100')
    expect(response.status).toBe(400)
  })
})

describe('3- check resizeImage', () => {
  it('1. should return upload image', async () => {
    const resizeImag = await resizeImage('coffee', 500, 500)
    expect(fs.existsSync(resizeImag as string)).toBe(true)
  })
})
