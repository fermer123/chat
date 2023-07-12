import {FC} from 'react';

import {DialogMessage, DialogName, MessageContainer} from './MessagesStyle';

interface IMessage {
  user: string;
  message: string;
  defineUser: boolean;
}

const Messages: FC<IMessage> = ({message, user, defineUser}) => {
  return (
    <MessageContainer defineuser={defineUser ? 'true' : undefined}>
      <DialogName>{user}</DialogName>
      <DialogMessage>{message}</DialogMessage>
    </MessageContainer>
  );
};

export default Messages;
