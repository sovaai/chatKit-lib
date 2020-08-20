export const fileSizeParser = (size: number) => {
  if (size < 2 ** 10) return `${size} b`
  else if (size < 2 ** 20) {
    const sizeInKB = Math.round(size / 2 ** 10)
    return `${sizeInKB} KB`
  } else if (size < 2 ** 20 * 25) {
    const sizeInKB = Math.round(size / 2 ** 20)
    return `${sizeInKB} MB`
  } else return false
}
17
export const fileNameParser = (fileName: string) => {
  if (fileName.length <= 20) return fileName
  const shortFileName = fileName.substring(0, 20) + '...'
  return shortFileName
}
