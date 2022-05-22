import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import ChatBox from '../Components/ChatBox'
import MyChats from '../Components/MyChats'
import { ChatState } from '../Context/ChatProvider'
import SideDrawer from '../Miscellaneous/SideDrawer'

const ChatPage = () => {
 const {user} = ChatState()
 const [fetchAgain, setFetchAgain] = useState(false);
 
  return (
    <div style={{width: "100%"}}>
    {user && <SideDrawer />}
    <Box
      d="flex"
      justifyContent="space-between"
      w="100%"
      h="91.5vh"
      p="10px"
    >
      {user && <MyChats
        fetchAgain={fetchAgain} />}
      {user && <ChatBox
        fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />}
    </Box>
    </div>
  )
}

export default ChatPage