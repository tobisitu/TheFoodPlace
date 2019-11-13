// import { useState } from 'react';

// const useForm = (callback, validate) => {

//   const [values, setValues] = useState({});
//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);



//   const handleSubmit = (event) => {
//     if (form.checkValidity() === false) {
//             event.preventDefault();
//             event.stopPropagation();
//           }
      
//           setValidated(true);
//   };

//   const handleChange = (event) => {
//     event.persist();
//     setValues(values => ({ ...values, [event.target.name]: event.target.value }));
//   };

//   return {
//     handleChange,
//     handleSubmit,
//     values,
//     errors,
//   }
// };

// export default useForm;