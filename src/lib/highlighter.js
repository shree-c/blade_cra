export default {
  // Set defaultToken to invalid to see what you do not tokenize yet
  // defaultToken: 'invalid',

  tokenizer: {
    root: [
      [/(-|-\/)([#\w]+)(-)/, ['delimitor', 'keyword', 'delimitor']]
    ]
  }
};

