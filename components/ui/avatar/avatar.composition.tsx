import React from 'react'
import { Avatar } from './avatar'

const AvatarWrapper = ({ children }: React.PropsWithChildren) => {
  return <div style={{ padding: 40, backgroundColor: 'black' }}>{children}</div>
}

export const BasicAvatar = () => {
  return (
    <AvatarWrapper>
      <Avatar alt={'avatar'} src={'https://avatars.githubusercontent.com/u/6298488?v=4'} width={50} />
    </AvatarWrapper>
  )
}

export const AvatarWithCustomColors = () => {
  return (
    <AvatarWrapper>
      <Avatar
        alt={'avatar'}
        src={'https://avatars.githubusercontent.com/u/6298488?v=4'}
        width={50}
        colors={['#ffc600', '#f3ca4c', '#1047ef']}
      />
    </AvatarWrapper>
  )
}

export const AvatarWithBoostedAnimation = () => {
  return (
    <AvatarWrapper>
      <Avatar
        alt={'avatar'}
        src={'https://avatars.githubusercontent.com/u/6298488?v=4'}
        width={50}
        animationDuration={5}
      />
    </AvatarWrapper>
  )
}

export const AvatarWithNoBlur = () => {
  return (
    <AvatarWrapper>
      <Avatar alt={'avatar'} src={'https://avatars.githubusercontent.com/u/6298488?v=4'} width={50} borderBlur={0} />
    </AvatarWrapper>
  )
}

export const AvatarWithNoBlurAndBigBorder = () => {
  return (
    <AvatarWrapper>
      <Avatar
        alt={'avatar'}
        src={'https://avatars.githubusercontent.com/u/6298488?v=4'}
        width={50}
        borderBlur={0}
        borderSize={20}
      />
    </AvatarWrapper>
  )
}
