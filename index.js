const isTest = process.env.NODE_ENV === 'test' && process.env.DEBUG !== 'ON'

module.exports = (file) => {
  const fileName = file.split('/').slice(-1)[0];
  const extensions = [".js", ".jsx", ".ts"];
  if(extensions.some(ext => fileName.includes(ext))) {
    return logger(fileName)
  }
  throw new Error('Logger not initialized. Add `(__filename)` to the import line.')
}

const logger = (fileName) => (...args) => {
  if (!isTest) {
    console.log(`[${fileName}]`, ...args)
  }
}
