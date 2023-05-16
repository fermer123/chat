import {port} from './constants/constants';
import server from './index';

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
