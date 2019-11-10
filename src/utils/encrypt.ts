import CryptoJS from 'crypto-js'

// Note: while a cypto library is being used here, all code here is run on the frontend
// and is not designed for security at all
//
// These functions are purely to make people names not human readable

export function encrypt(text: string, key: string): string {
  return CryptoJS.AES.encrypt(text, key).toString()
}

export function decrypt(text: string, key: string): string {
  return CryptoJS.AES.decrypt(text, key).toString(CryptoJS.enc.Utf8)
}