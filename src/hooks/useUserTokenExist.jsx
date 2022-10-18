import React, { useState, useEffect } from "react";

const useUserTokenExist = () => {
  const [tokenUser, setTokenUser] = useState(
    JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).token
  );
  useEffect(() => {
    setTokenUser(
      JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).token
    );
  }, []);

  return tokenUser;
};

export default useUserTokenExist;
