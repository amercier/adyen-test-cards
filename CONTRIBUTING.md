# Contributing Guide

## Recommended VSCode settings

`.vscode/settings.json`

```json
{
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
    "javascript",
    { "language": "typescript", "autoFix": true }
  ],
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.formatOnSave": false
  },
  "[typescript]": {
    "editor.formatOnSave": false
  }
}
```