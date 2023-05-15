import {port} from './constants/constants';
import app from './index';

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
