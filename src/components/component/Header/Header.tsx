import {FC} from 'react';

interface IHeader {
  token: string;
}

const Header: FC<IHeader> = ({token}) => {
  return <div>{token}qwe</div>;
};

export default Header;
