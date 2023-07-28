// Виконуй це завдання у файлах 03-feedback.html і 03-feedback.js. Розбий його на декілька підзавдань:

// Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, 
// у яких зберігай поточні значення полів форми.Нехай ключем для сховища буде рядок "feedback-form-state".
// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. 
// В іншому випадку поля повинні бути порожніми.
// Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, 
// message та їхніми поточними значеннями.
// Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. 
// Для цього додай до проекту і використовуй бібліотеку lodash.throttle.

// ===========================================================
import throttle from "lodash.throttle";
const form = document.querySelector('.feedback-form')
form.addEventListener('input', throttle(onFormInput, 500))
form.addEventListener('submit', onSubmitForm)

const FEEDBACK_FORM_KEY = "feedback-form-state"
let formFields = {};

function onFormInput(event) {
  
    formFields[event.target.name] = event.target.value.trim();
    localStorage.setItem(FEEDBACK_FORM_KEY, JSON.stringify(formFields))
}

function onSubmitForm(event) {
    event.preventDefault();
    console.log(formFields);
    formFields = {};
    localStorage.removeItem(FEEDBACK_FORM_KEY);
    event.currentTarget.reset()
}


// if (JSON.parse(localStorage.getItem(FEEDBACK_FORM_KEY)) !== null) {
//     const currentFormValue = JSON.parse(localStorage.getItem(FEEDBACK_FORM_KEY));
//     const currentInput = JSON.parse(localStorage.getItem(FEEDBACK_FORM_KEY))
//     form.elements.email.value = currentInput.email;
//     form.elements.message.value = currentInput.message;
// }
    
const onLoad = () => {
    try {
        const data = localStorage.getItem(FEEDBACK_FORM_KEY);
        if (!data) return;
        formFields = JSON.parse(data);
        Object.entries(formFields).forEach(([key, val]) => {
            form.elements[key].value = val;
        });
    } catch (error) {
        console.log(error.message);
    }
};

window.addEventListener('load', onLoad);




