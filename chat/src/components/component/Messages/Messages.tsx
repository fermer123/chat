import {FC} from 'react';

import {DialogMessage, DialogName, MessageContainer} from './MessagesStyle';

interface IMessage {
  user: string;
  message: string;
  key: number;
  defineUser: boolean;
}

const Messages: FC<IMessage> = ({key, message, user, defineUser}) => {
  return (
    <MessageContainer defineUser={defineUser} key={key}>
      <DialogName>{user}</DialogName>
      <DialogMessage>{message}</DialogMessage>
    </MessageContainer>
  );
};

export default Messages;
