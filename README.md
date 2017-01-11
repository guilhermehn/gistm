# gistm
> Fetch gist files from Github

## Installation

`npm i -g gistm`

## Usage

`$ gistm <gist url>`

or

`$ gistm <username>/<gist id>`

## Options

`--destination, -d`: Folder where the files will be placed. Defaults to the current working directory.

This option can be placed in your `package.json` inside a `gistm` key:

```js
{
  "name": "my-package",
  "version": "1.0.0",
  ...
  "gistm": {
    "destination": "./src/lib"
  }
}
```

## License
MIT
