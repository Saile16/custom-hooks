import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });
  const getFetch = async () => {
    setState({ ...state, isLoading: true });
    const resp = await fetch(url);
    const data = await resp.json();
    setState({
      data,
      isLoading: false,
      hasError: null,
    });
  };
  useEffect(() => {
    getFetch();
  }, [url]);
  //retornamos de esta manera aunque sea redudante para que sea mas entendible
  //priorizamos la lectura de los programadores
  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};

export default useFetch;
