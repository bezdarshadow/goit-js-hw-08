import throttle from "lodash.throttle";
import localStorageApi from "./localstorage";

const feedbackFormEl = document.querySelector('.feedback-form');
const formData = {};
const onFormInput = event => {
    const target = event.target;
    formData[target.name] = target.value;
    localStorageApi.save('feedback-form-state', formData);
};

const throttledFunction = throttle(onFormInput, 1000);

feedbackFormEl.addEventListener('input', throttledFunction);

feedbackFormEl.addEventListener('submit', event => {
    event.preventDefault();
    event.target.reset();
    localStorageApi.remove('feedback-form-state');
    console.log(formData);
  });

  const fillFormFields = () => {
    if (!localStorage.getItem('feedback-form-state')) {
      return;
    }
  
    const localStorageFormData = localStorageApi.load('feedback-form-state');
    const keys = Object.keys(localStorageFormData);
  
    for (const key of keys) {
        feedbackFormEl.elements[key].value = localStorageFormData[key];
    }
  };
  
  fillFormFields();




  

