#!/usr/bin/env node
const program = require('commander')
const { downloadArray } = require('./download')

program
  .version(require('../package.json').version)
  .parse(process.argv)
