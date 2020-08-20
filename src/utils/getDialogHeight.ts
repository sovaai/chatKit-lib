export const getDialogHeight = (senderHeight: number, headerInfo: string, chatItInfo: string) => {
  const headerHeight = Number(headerInfo.split('px')[0])
  const chatItHeight = Number(chatItInfo.split('px')[0])
  return `${chatItHeight - (headerHeight + senderHeight + 1)}px`
}
