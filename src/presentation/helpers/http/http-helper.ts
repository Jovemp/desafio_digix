import { HttpResponse } from '../../protocols/http'
import { ServerError } from '../../errors/server-error'

export const badRequest = (error: Error): HttpResponse => {
  return {
    statusCode: 400,
    body: error.message
  }
}

export const forbidden = (error: Error): HttpResponse => {
  return {
    statusCode: 403,
    body: error.message
  }
}

export const noContent = (): HttpResponse => {
  return {
    statusCode: 204,
    body: null
  }
}

export const serverError = (err: Error): HttpResponse => {
  return {
    statusCode: 500,
    body: new ServerError(err.stack as string)
  }
}

export const ok = (data: any): HttpResponse => {
  return {
    statusCode: 200,
    body: data
  }
}
