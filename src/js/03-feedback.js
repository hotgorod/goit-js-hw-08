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

const formFields = {
    email: '',
    message: ''
}

function onFormInput(event) {
    const evt = event.target.attributes.name.value

    if (evt === "email") {
        formFields.email = event.target.value
    }

    if (evt === "message") {
        formFields.message = event.target.value
    }

    localStorage.setItem("feedback-form-state", JSON.stringify(formFields))
}

function onSubmitForm(event) {
    event.preventDefault();
    const mail = event.currentTarget.elements.email.value
    const message = event.currentTarget.elements.message.value
    
    const dataForm = {
        mail, message
    }
    console.log(dataForm);
    localStorage.removeItem("feedback-form-state");
    event.currentTarget.reset()
}


if (JSON.parse(localStorage.getItem("feedback-form-state")) !== null) {
    const currentFormValue = JSON.parse(localStorage.getItem("feedback-form-state"));
    const currentInput = JSON.parse(localStorage.getItem("feedback-form-state"))
    form.elements.email.value = currentInput.email;
    form.elements.message.value = currentInput.message;
}
    





