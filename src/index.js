#!/usr/bin/env node
const path = require('path')
const program = require('commander')
const { downloadArray } = require('./download')

program
  .version(require('../package.json').version)
  .option('-D, --directory <dir>', 'Download Directory')
  .option('-A --auto-number', 'Number the downloads sequentially')
  .parse(process.argv)

/**
 * 
 * @param {program} program Commander Program
 */
const main = async program => {
  let directory = program.directory || path.join(__dirname, '..')
  let args = program.args
  let keepFilenames = !program.autoNumber
  downloadArray(args, directory, keepFilenames)
}

main(program)
