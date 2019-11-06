import unfetch, { RequestInfo, RequestInit } from 'node-fetch'

export const fetch = async (url: RequestInfo, init?: RequestInit) => {
  const resp = await unfetch(url, init)
  if (resp.ok !== true) {
    throw new Error(`Request failed with code ${resp.status}`)
  }

  return resp
}
