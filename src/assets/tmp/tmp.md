// tmp - a small subset of import/export for testing purposes
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export

```js
var patterns = {
  '{': '\\{',
  '}': '\\}',
  ',': ',',
  '\'': '\'',
  'import': 'import',
  'from': 'from',
  'export': 'export',
  'default': 'default',
  'function': 'function',
  'class': 'class',
  'const': 'const',
  ident: '[a-zA-Z$_][a-zA-Z$_\\d]*'
}
```

```vbnf
import-stmt := 'import' WS module-name WS |
               'import' WS (defaultExport WS (',' WS exportList)? |
                         exportList) 'from' WS module-name WS
module-name := '\'' without-'\'' '\''
defaultExport := ident
exportList := '{' WS ident WS (',' WS ident WS)* '}' WS

export-stmt := 'export' ('const' | 'function' | 'class') ident
             | 'export' 'default' expr
             | 'export' ('function' | 'class') ident?
```
