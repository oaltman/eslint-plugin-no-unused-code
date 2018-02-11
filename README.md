# eslint-plugin-remove-unused-vars

Removes unused code

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-remove-unused-vars`:

```
$ npm install eslint-plugin-remove-unused-vars --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-remove-unused-vars` globally.

## Usage

Add `remove-unused-vars` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "remove-unused-vars"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "remove-unused-vars/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





