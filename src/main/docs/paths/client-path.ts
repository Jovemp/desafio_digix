export const clientPath = {
  post: {
    tags: ['Client'],
    summary: 'API para cadastro de cliente',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/clientParams'
          }
        }

      }
    },
    responses: {
      204: {
        description: 'Sucesso',
        content: {
        }
      },
      400: {
        description: 'Bad Request'

      }
    }
  },
  get: {
    tags: ['Client'],
    summary: 'API para buscar lista de clientes',
    responses: {
      200: {
        description: 'Sucesso',
        content: {
        }
      },
      400: {
        description: 'Bad Request'
      }
    }
  }
}
