module.exports = {
  meta: {
    type: 'layout',
    docs: {
      description: 'The max length of the line code is 120, so this rule will check that out',
    },
    fixable: 'code',
    schema: [
      {
        type: 'array',
        items: [
          {
            enum: ['always'],
          },
        ],
      },
    ],
    messages: {
      lineBiggerThan120: 'Line bigger than 120 char.',
    },
  },
  create(context) {
    return {
      CallExpression(node) {
        if (node.length >= 120) {
          context.report({
            node,
            message: 'Line bigger than 120 char.',
          })
        }
      },
    }
  },
}
