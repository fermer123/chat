import {port} from './src/constants/constants';
import server from './src/index';

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
