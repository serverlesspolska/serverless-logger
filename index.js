/* eslint-disable max-len */
import { fileURLToPath } from 'url';

const isTest = process.env.NODE_ENV === 'test' && process.env.DEBUG !== 'ON'

/**
 *
 * @param {*} metaUrl - Always use `import.meta.url` as a parameter value. It provides the "file:" URL of your module (file).
 * @returns log
 */
export const createLogger = (metaUrl) => {
  const fullPath = fileURLToPath(metaUrl);
  const fileName = fullPath.split('/').slice(-1)[0];
  const extensions = ['.js', '.jsx', '.ts', '.cjs', '.mjs'];
  if (extensions.some((ext) => fileName.includes(ext))) {
    return logger(fileName)
  }
  throw new Error('Logger not initialized. Sample `const log = createLogger(import.meta.url)`')
}

const logger = (fileName) => (...args) => {
  if (!isTest) {
    console.log(`[${fileName}]`, ...args)
  }
}
