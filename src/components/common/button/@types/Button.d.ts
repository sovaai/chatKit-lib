import { IconName, IconPrefix } from '@fortawesome/fontawesome-common-types'
export interface ButtonProps {
  withIcon: boolean
  withTitle: boolean
  title?: string
  type: 'button' | 'submit' | 'reset' | undefined
  icon: {
    icon: [IconPrefix, IconName]
    props: object
    className: string
  }
  block: boolean
  onClick?: () => void
  style: any
  className: string
}
