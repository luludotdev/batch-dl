import isURL from 'is-url'
import path from 'path'
import { parse as parseURL } from 'url'
import { fetch } from './fetch'
import { writeFile } from './fs'

export const downloadFile = async (
  url: string,
  filePath: string,
  fileName: string | null
) => {
  // Validation
  if (!isURL(url)) throw new Error('Invalid URL')
  if (filePath === undefined || filePath === null || filePath === '') {
    throw new Error('Please specify a File Path')
  }

  try {
    // Download file contents
    const resp = await fetch(url)

    // Parse a filename
    const parsedFile = parseURL(url).pathname
    if (parsedFile === undefined) throw new Error('cannot determine file name')

    const fileExt = path.extname(parsedFile)
    if (fileName === undefined || fileName === null || fileName === '') {
      fileName = path.basename(parsedFile, fileExt)
    }

    // File Operations
    const fullFileName = `${fileName}${fileExt}`
    const fullPath = path.join(filePath, fullFileName)
    await writeFile(fullPath, await resp.buffer())
  } catch (err) {
    console.error(`${url} - ${err.message}`)
  }
}

export const downloadArray = async (
  URLs: string[],
  filePath: string,
  keepFilenames: boolean = false
) => {
  // Filter and validate
  URLs = URLs.filter(url => isURL(url))
  if (URLs.length === 0) throw new Error('No valid URLs passed')
  if (filePath === undefined || filePath === null || filePath === '') {
    throw new Error('Please specify a File Path')
  }

  for (const i in URLs) {
    // Define
    if (URLs[i] === undefined) continue
    const url = URLs[i]
    const fileName = keepFilenames ? null : i

    // Download
    try {
      downloadFile(url, filePath, fileName)
    } catch (err) {
      console.error(err.message)
    }
  }
}
