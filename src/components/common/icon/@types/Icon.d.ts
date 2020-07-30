import { IconName, IconPrefix } from '@fortawesome/fontawesome-common-types'
export interface IconProps {
  icon: [IconPrefix, IconName]
  props: object
  className: string
}
