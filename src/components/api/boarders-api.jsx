import axios from 'axios';

export const listBoarder = async (id) => {
  const url = `http://localhost:3000/boarders/${id}`;

  const response = await axios.get(url)
  .catch(function (error) {
      console.log(error);
  });
  return response.data;
}

export const listBoarders = async () => {
  const url = "http://localhost:3000/boarders";

  const response = await axios.get(url)
  .catch(function (error) {
      console.log(error);
  });
  return response.data;
}

export const createBoarder = async (boarder) => {
  const url = "http://localhost:3000/boarders";
  await axios.post(url, boarder)
  .then((res) => {
    console.log(res.data)
  })
  .catch(function (error) {
    console.log(error);
  });
}

export const editBoarder = async (boarder) => {
  const url = `http://localhost:3000/boarders/${boarder.id}`;
  await axios.patch(url, boarder)
  .then((res) => {
    console.log(res.data)
  })
  .catch(function (error) {
    console.log(error);
  });
}

export const deleteBoarder = async (id) => {
  await axios.delete(`http://localhost:3000/boarders/${id}`)
  .then((res) => {
      console.log(res.data)
  })
  .catch(function (error) {
      console.log(error);
  });
}
