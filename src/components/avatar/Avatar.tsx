import S from './Avatar.module.css'
import { TSizes } from '../defintions.components'
import { User } from 'lucide-react'
// const imageUrl = "https://cdn-icons-png.flaticon.com/512/266/266033.png"

type Props = {
  image?: string,
  name?: string,
  size?: TSizes,
} & React.HTMLAttributes<HTMLDivElement>

export default function Avatar({
  image, name, size = "sm", ...rest }: Props) {
  const isImageAvailable = Boolean(image)
  const nameFirstTwoLetters = name?.slice(0, 2).toUpperCase()

  const sizes = {
    xs: S['avatar--xs'],
    sm: S['avatar--sm'],
    md: S['avatar--md'],
    lg: S['avatar--lg'],
    xl: S['avatar--xl'],
  }

  return (
    <div className={`${S.avatar} ${sizes[size]}`} {...rest}>
      {
        image
          ? image
          : name
            ? <p className={S.avatar__name}>{nameFirstTwoLetters}</p>
            : <User color='gray' />
      }
    </div>
  )
}