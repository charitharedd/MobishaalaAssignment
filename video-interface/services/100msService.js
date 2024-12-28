const axios = require("axios");
const { HMS_ACCESS_KEY, HMS_SECRET } = require("../config");

const BASE_URL = "https://api.100ms.live/v2/";

const createRoom = async (name) => {
  const response = await axios.post(
    ${BASE_URL}rooms,
    { name },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: Bearer ${HMS_ACCESS_KEY}:${HMS_SECRET},
      },
    }
  );
  return response.data;
};

const generateToken = async (roomId, role) => {
  const response = await axios.post(
    ${BASE_URL}rooms/${roomId}/tokens,
    { role },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: Bearer ${HMS_ACCESS_KEY}:${HMS_SECRET},
      },
    }
  );
  return response.data;
};

module.exports = { createRoom, generateToken };
