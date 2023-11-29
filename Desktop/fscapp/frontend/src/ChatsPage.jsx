import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '179726fe-fa42-44de-955d-69bf54b5e99a', 
    // eslint-disable-next-line react/prop-types
    props.user.username,
     // eslint-disable-next-line react/prop-types
     props.user.secret
     );
    return (
        <div style={{ height:'100vh'}}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{ height: '100%' }} />
        </div> 
        )
}
export default ChatsPage