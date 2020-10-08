import { fileSizeParser } from './fileSizeParser'
import firebase from '../configs/firebase'
export const uploadFile =  (file: any) => {
  const size = fileSizeParser(file?.size)
  if(!size) return false
  const fileType = file.type.split('/')[1]
  const fileRef = firebase.storage().ref('/test' + file.name)
  const task = fileRef.put(file)
  const fileMeta = {
    type: fileType,
    fileTask: task,
    size: size,
    id: Math.random() * (20000 - 0) + 0,
    name: file.name,
    ref: fileRef,
  }
  return fileMeta
}
