export const clientParamsSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string'
    },
    monthlyIncome: {
      type: 'number'
    },
    dependents: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: {
            type: 'string'
          },
          birthDate: {
            type: 'string',
            format: 'date'
          }
        }
      }
    }
  }
}
