import { Skeleton, Stack } from '@chakra-ui/react'
import React from 'react'

const ChatLoading = () => {
  return (
    <Stack spacing={2}>
        <Skeleton height='30px' />
        <Skeleton height='30px' />
        <Skeleton height='30px' />
        <Skeleton height='30px' />
        <Skeleton height='30px' />
        <Skeleton height='30px' />
        <Skeleton height='30px' />
        <Skeleton height='30px' />
        <Skeleton height='30px' />
        <Skeleton height='30px' />
        <Skeleton height='30px' />
        
    </Stack>
  )
}

export default ChatLoading