import CryptoJS from 'crypto-js'

// Note: while a cypto library is being used here, all code here is run on the frontend
// and is not designed for security at all
//
// These functions are purely to make people names not human readable

function encodeForHtml(text: string): string {
  return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/\//g, "%2F")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;")
}

function decodeForHtml(text: string): string {
  return text
  .replace("&amp;", "&")
  .replace("&lt;", "<")
  .replace("%2F","/")
  .replace("&gt;",">")
  .replace("&quot;",'"')
  .replace("&#039;", "'")
}

export function encrypt(text: string, key: string): string {
  return encodeForHtml(CryptoJS.AES.encrypt(text, key).toString())
}

export function decrypt(text: string, key: string): string {
  return decodeForHtml(CryptoJS.AES.decrypt(text, key).toString(CryptoJS.enc.Utf8))
}

