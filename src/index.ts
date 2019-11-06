#!/usr/bin/env node
import program, { CommanderStatic } from 'commander'
import { sync as readPkgSync } from 'read-pkg-up'
import { downloadArray } from './lib'

const pkg = readPkgSync()
const version = (pkg && pkg.packageJson.version) || 'unknown version'

program
  .version(version)
  .option('-D, --directory <dir>', 'Download Directory')
  .option('-A --auto-number', 'Number the downloads sequentially')
  .parse(process.argv)

const main = async (prog: CommanderStatic) => {
  if (prog.args.length === 0) prog.help()

  try {
    const directory = prog.directory || '.'
    const args = prog.args
    const keepFilenames = !prog.autoNumber

    downloadArray(args, directory, keepFilenames)
  } catch (err) {
    console.error(err)
  }
}

main(program)
