import {port} from './src/constants/constants';
import server from './src/index';

server.listen(3000, () => {
  console.log(`Example app listening on port ${port}`);
});
