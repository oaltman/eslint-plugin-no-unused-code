const rule = require('../../../lib').rules['no-unused-code'];
const { RuleTester } = require('eslint');

const code = (lines) => lines.join('\n');
const ruleTester = new RuleTester();

ruleTester.run('sort-requires', rule, {
  valid: [
    code([
      'var a = require("./a")',
			'var b = require("./b")',
			'console.log(a)',
			'console.log(b)',
    ])
  ],

  invalid: [
    {
      code: code([
        'var b = require("./b")',
        'var a = require("./a")',
      ]),
      output: code([
				'',
				'',
      ]),
      errors: [
				{ message: "\'b\' is assigned a value but never used." },
				{ message: "\'a\' is assigned a value but never used." },
			],
    },
  ],
});
