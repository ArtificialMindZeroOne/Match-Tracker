const baseUrl = "https://app.ftoyd.com/fronttemp-service";

const getMatchsList = async () => {
  const res = await fetch(`${baseUrl}/fronttemp`);

  if (!res.ok) {
    throw new Error(`Ошибка: res.status`);
  }

  const data = res.json();

  return data;
};

export default getMatchsList;
