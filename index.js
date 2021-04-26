const isTest = process.env.NODE_ENV === 'test' && process.env.DEBUG !== 'ON'

module.exports = (file) => {
  const fileName = file.split('/').slice(-1)[0];
  if(!fileName.includes('.js')) {
    throw new Error('Logger not initialized. Add `(__filename)` to the import line.')
  }
  return logger(fileName)
}

const logger = (fileName) => (...args) => {
  if (!isTest) {
    console.log(`[${fileName}]`, ...args)
  }
}
