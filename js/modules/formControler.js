import { API_URL, VACANCY_URL } from '../script.js'
import { validationForm } from './validationForm.js'

export const formControler = () => {
    const form = document.querySelector('.employer__form');

    const validate = validationForm(form);

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        if (!validate.isValid) {
            document.querySelector(".employer__success").innerHTML = "";    
            document.querySelector(".employer__error").innerHTML = "<p>Заполните все поля корректно и ещё раз нажмите кнопку.</p>";
            return;
                
            // showInValidRadioTitle();

            // form.addEventListener('input', showInValidRadioTitle)
            // return;
        } else {
            try {
                

                const formData = new FormData(form);

                document.querySelector(".employer__error").innerHTML = "";
                document.querySelector(".employer__success").innerHTML = "<p>Всё заполнено корректно. Вакансия отправляется...</p>";

                const response = await fetch(`${API_URL}${VACANCY_URL}`, {
                    method: 'POST',
                    body:formData,
                })

                if (response.ok) {
                    document.querySelector(".employer__success").innerHTML = "<p>Вакансия отправлена.</p>";
                    window.location.href = 'index.html'
                }
            } catch (error) {
                document.querySelector(".employer__success").innerHTML = "<p>Произошла ошибка при отправке. Попробуйте позже.</p>";
                console.error(error);
            }
        }
    });
};