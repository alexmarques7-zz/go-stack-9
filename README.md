# GoStack 9

VSCode Configuration

## Required plugins and themes

**Theme** 
Search for Dracula Theme inside extensions.

**Icons** 
Search for Material Icon Themes inside extensions.

**Fonts**
https://github.com/tonsky/FiraCode

**Plugin** 
Search for Rocketseat ReactJS inside extensions.
Search for Rocketseat React Native inside extensions.

## Required Settings

```
{
    "editor.fontFamily": "Fira Code",
    "editor.fontLigatures": true,
    "editor.fontSize": 22,
    "editor.tabSize": 2,
    "editor.rulers": [80, 120],
    "editor.renderLineHighlight": "gutter",
    "editor.parameterHints.enabled": false,

    "workbench.colorTheme": "Dracula",
    "workbench.iconTheme": "material-icon-theme",

    "terminal.integrated.fontSize": 14,

    "emmet.includeLanguages": {"javascript": "javascriptreact"},
    "emmet.syntaxProfiles": {"javascript": "jsx"},
    "javascript.updateImportsOnFileMove.enabled": "never",

    "breadcrumbs.enabled": true,
    "javascript.suggest.autoImports": false,
    "explorer.confirmDelete": false,
    "git.confirmSync": false,
    "window.zoomLevel": -1,

    "[html]": {"editor.defaultFormatter": "HookyQR.beautify"},
    "[scss]": {"editor.defaultFormatter": "michelemelluso.code-beautifier"},
    "beautify.options": {}
}
```
