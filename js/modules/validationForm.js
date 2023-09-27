export const validationForm = (form) => {
    const validate = new window.JustValidate(form, {
        successFieldStyle: {
            color: 'green',
            border: '1px solid green',
        },
        errorFieldStyle: {
            color: "red",
            border: '1px solid red',
        },
        successLabelStyle: {
            color: 'green',
        },
        errorLabelStyle: {
            color: "red",
        },
        tooltip: {
            position: "top",
        },
        validateBeforeSubmitting: false,
        focusInvalidField: true,
        errorsContainer: document.querySelector('.employer__error'),
    });
    validate
    .addField("#logo", [
        {
            rule: 'minFilesCount', 
            value: 1, 
            errorMessage: 'Добавьте логотип',
        },
        {   
            rule: 'files',
            value: {
                files: {
                    extensions: ['jpeg', 'jpg', 'png'],
                    maxSize: 102400,
                    minSize: 1000,
                    types: ['image/jpeg', 'image/jpg', 'image/png'],
            },
        },
        errorMessage: 'Размер файла должен быть не больше 100кБ'
    },
    ])
    .addField("#company", [
        {
            rule: 'required',
            errorMessage: 'Заполните название компании',
        },
    ])
    .addField("#title", [
        {
            rule: 'required',
            errorMessage: 'Заполните название вакансии',
        },
    ])
    .addField("#salary", [
        {
            rule: 'required',
            errorMessage: 'Заполните заработную плату',
        },
    ])
    .addField("#location", [
        {
            rule: 'required',
            errorMessage: 'Заполните город',
        },
    ])
    .addField("#email", [
        {
            rule: 'required',
            errorMessage: 'Заполните email',
        },
        {
            rule: 'email',
        },
    ])
    .addField("#description", [
        {
            rule: 'required',
            errorMessage: 'Заполните описание',
        },
    ])
    .addRequiredGroup('#format', 'Выберите формат', {
        errorFieldCssClass: "radio__input_error",
    })
    .addRequiredGroup('#experience', 'Выберите опыт', {
        errorFieldCssClass: "radio__input_error",
    })
    .addRequiredGroup('#type', 'Выберите занятость', {
        errorFieldCssClass: "radio__input_error",
    });

    return validate;
};