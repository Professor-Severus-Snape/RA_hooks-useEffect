import { useState, useEffect } from 'react';
import createGetRequest from './libs/createGetRequest';
import Details from './components/Details/Details';
import List from './components/List/List';
import ServerError from './components/ServerError/ServerError';
import IDetails from './models/IDetails';
import IListItem from './models/IListItem';

const App = () => {
  const [list, setList] = useState<IListItem[]>([]); // список всех юзеров
  const [activeId, setActiveId] = useState<number>(-1); // id выбранного юзера 
  const [details, setDetails] = useState<IDetails|null>(null); // данные конкретного юзера
  const [isError, setIsError] = useState<boolean>(false); // ошибка получения данных

  useEffect(() => {
    const getData = async () => {
      const data = await createGetRequest('/users.json');

      if (data.error) {
        setIsError(true);
        return;
      }

      setList(data);
    };

    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const data = await createGetRequest(`/${activeId}.json`);

      if (data.error) {
        setIsError(true);
        return;
      }

      setDetails(data);
    };

    if (activeId !== -1) {
      getData();
    }
  }, [activeId]);

  const handleClick = (id: number) => {
    if (id !== activeId) {
      setActiveId(id);
    }
  };

  return (
    <>
      {isError ? (
        <ServerError />
      ) : (
        <>
          {list.length && <List data={list} activeId={activeId} handleClick={handleClick} />}
          {details && <Details data={details} />}
        </>
      )}
    </>
  );
};

export default App;
