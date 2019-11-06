import { writeFile as wf } from 'fs'
import mkdirp from 'mkdirp'
import { parse } from 'path'
import { promisify } from 'util'

const wfp = promisify(wf)
const mkdirpp = promisify(mkdirp)

export const writeFile = async (path: string, data: string | Buffer) => {
  const { dir } = parse(path)
  await mkdirpp(dir)

  return wfp(path, data)
}
