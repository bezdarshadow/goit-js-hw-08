import throttle from "lodash.throttle";
import localStorageApi from "./localstorage";

const feedbackFormEl = document.querySelector('.feedback-form');
const emailInputEl = document.querySelector('input[name="email"]');
const messageInputEl = document.querySelector('textarea[name="message"]');
const formData = {};
const onFormInput = event => {
    const target = event.target;
    formData[target.name] = target.value;
    localStorageApi.save('feedback-form-state', formData);
};

const throttledFunction = throttle(onFormInput, 500);

feedbackFormEl.addEventListener('input', throttledFunction);

feedbackFormEl.addEventListener('submit', event => {
  event.preventDefault();
  
  if(emailInputEl.value !== "" && messageInputEl.value !== ""){
    localStorageApi.remove('feedback-form-state');
    event.target.reset();
    console.log(formData);
  };

  });

  const fillFormFields = () => {
    if (!localStorage.getItem('feedback-form-state')) {
      return;
    }
  
    const localStorageFormData = localStorageApi.load('feedback-form-state');
    const keys = Object.keys(localStorageFormData);
  
    for (const key of keys) {
        formData[key] =  localStorageFormData[key];
        feedbackFormEl.elements[key].value = localStorageFormData[key];
    }
  };
  
  fillFormFields();




  

