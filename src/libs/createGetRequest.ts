const createGetRequest = async (url: string) => {
  const baseUrl = import.meta.env.VITE_URL;

  const response = await fetch(baseUrl + url); // получаем даные

  if (response.ok) {
    const json = await response.json(); // преобразуем данные в json
    return json;
  }

  return { error: true, status: response.status }; // на случай ошибки
};

export default createGetRequest;
