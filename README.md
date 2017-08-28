<h1 align='center'>Batch DL <a href='https://www.npmjs.com/package/batch-dl'><img src='https://img.shields.io/travis/lolPants/batch-dl.svg?maxAge=2592000%3Fstyle=flat-square' /></a></h1>

<h5 align='center'>Command line script to batch download URLs</h5>
<h2 align='center'><i>NOTE: Node.js 8 or higher is REQUIRED</i></h2>

## Installation
Install the package globally using `npm i -g batch-dl`

## Usage
```sh
Usage: batch-dl [URLs...]

Options:
  -V, --version          output the version number
  -D, --directory <dir>  Download Directory
  -A --auto-number       Number the downloads sequentially
  -h, --help             output usage information
```

### Example
```sh
batch-dl -D ./download http://i.imgur.com/EecJUlF.png http://i.imgur.com/XHQxcf1.png
```