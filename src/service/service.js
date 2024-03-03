export const getIphone = async () => {
  const { data } = await axios.get("http://localhost:3001/iphone");
  return data;
};
