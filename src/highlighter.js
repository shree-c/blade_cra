export default {
  // Set defaultToken to invalid to see what you do not tokenize yet
  // defaultToken: 'invalid',

  keywords: [
    'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div', 'ul', 'li'
  ],
  tokenizer: {
    root: [
      [/[\s]+[\w\s]+;$/, {
        token: 'string',
        log: 'matched a string'
      }],
      [/(\()([\w]+)(\))/,
        ['bracket', {
          cases: {
            '@keywords': 'keyword'
          }
        }, 'bracket']],
      [/[{}()\[\]]/, '@brackets'],
    ]
  }
}
