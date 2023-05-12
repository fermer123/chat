import {FC, useEffect, useState} from 'react';
import style from './App.module.scss';

const App: FC = () => {
  interface IData {
    foo: string;
    bar: string;
  }
  const [data, setData] = useState<IData>();
  const fetchData = async () => {
    await fetch('http://localhost:3000/api', {
      method: 'GET',
    })
      .then((resp) => resp.json())
      .then((jsonData: IData) => setData(jsonData));
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div data-testid='app' className={style.app}>
      {data?.bar}
    </div>
  );
};

export default App;
