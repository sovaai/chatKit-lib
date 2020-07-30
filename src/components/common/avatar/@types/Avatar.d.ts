import { Map } from 'immutable'

export interface AvatarProps {
  settings: Map<string, any>
  styles: {
    avatarContainer: any
    image: any
  }
  className: string
}
