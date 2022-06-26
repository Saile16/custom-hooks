import { useState } from "react";

const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(
    initialForm
    // username: "",
    // email: "",
    // password: "",
  );
  const onResetForm = () => {
    setFormState(initialForm);
  };
  const onInputChange = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;
    setFormState({
      ...formState,
      //asignamos el valor del input al state
      [name]: value,
    });
  };
  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
  //   return {
  //esta manera de retorno podemos extraer rapidamente los valores del state en otro componenten
  //     ...formState,
  //     formState,
  //     onInputChange,
  //   };
};

export default useForm;
