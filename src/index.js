// Package Dependencies
const path = require('path')
const urlParse = require('url')
const fs = require('fs-extra')
const snekfetch = require('snekfetch')
const isURL = require('is-url')

/**
 * Download and save a file
 * @param {string} url URL to Download
 * @param {string} filePath Path to directory where the file will be saved
 * @param {string} [fileName] Filename to save as
 */
const downloadFile = async (url, filePath, fileName) => {
  // Validation
  if (!isURL(url)) throw new Error('Invalid URL')
  if (filePath === undefined || filePath === null || filePath === '') throw new Error('Please specify a File Path')

  try {
    // Download file contents
    let res = await snekfetch.get(url)

    // Parse a filename
    let parsedFile = urlParse.parse(url).pathname
    let fileExt = path.extname(parsedFile)
    if (fileName === undefined || fileName === null || fileName === '') fileName = path.basename(parsedFile, fileExt)
    let fullFileName = `${fileName}${fileExt}`

    // File Operations
    let fullPath = path.join(filePath, fullFileName)
    await fs.ensureFile(fullPath)
    await fs.writeFile(fullPath, res.body)
  } catch (err) {
    throw err
  }
}

/**
 * 
 * @param {string[]} URLs Array of URLs to download
 * @param {string} filePath Path to directory where the files will be saved
 * @param {boolean} [keepFilenames=false] Keep original filenames (default: false)
 */
const downloadArray = async (URLs, filePath, keepFilenames = false) => {
  // Filter and validate
  URLs = URLs.filter(url => isURL(url))
  if (URLs.length === 0) throw new Error('No valid URLs passed')
  if (filePath === undefined || filePath === null || filePath === '') throw new Error('Please specify a File Path')
}

downloadFile('https://cdn.discordapp.com/attachments/298092968013987841/348915901258530828/0493_ev_miy19l.png', __dirname)
