#!/usr/bin/env node
const program = require('commander')
const { downloadArray } = require('./index')

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
  if (program.args.length === 0) program.help()
  try {
    let directory = program.directory || '.'
    let args = program.args
    let keepFilenames = !program.autoNumber
    downloadArray(args, directory, keepFilenames)
  } catch (err) {
    console.error(err)
  }
}

main(program)
