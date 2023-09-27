import { filterFormControl } from './modules/filterFormControl.js';
import { modalVacancyControl } from './modules/modalVacancyControl.js';
import { filterToggle } from './modules/openFilter.js';
import { selectCityControl } from './modules/selectCityControl.js';
import { vacancyControl } from './modules/vacancyControl.js';
import { formControler } from './modules/formControler.js';
import { fileControler } from './modules/fileControler.js';
import { loadMoreVacacies } from './modules/loadMoreVacancy.js';

// const API_URL = "https://workspace-methed.vercel.app/";
export const API_URL = "https://rattle-valuable-fender.glitch.me/";
export const LOCATION_URL = "api/locations";
export const VACANCY_URL = "api/vacancy";
export const BOT_TOKEN = '6440412139:AAEyLd4bYckjF6rgVun-57v8-qoJncJQmpA';

export const cardsList = document.querySelector(".cards__list");
export const filterForm = document.querySelector('.filter__form');
export const vacanciesFilterBtn = document.querySelector('.vacancies__filter-btn');
export const vacanciesFilter = document.querySelector('.vacancies__filter');

export let appData = {
    lastUrl: "",
};
export const pagination = {};

export const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadMoreVacacies();
            }
        });
    },
    {
        rootMargin: "100px",
    },
);

const init = () => {
    try {
        filterToggle();
        selectCityControl();
        vacancyControl();
        modalVacancyControl();
        filterFormControl();
    } catch (error) {
        console.log(error);
    }

    try {
        formControler();
        fileControler();
    } catch {}

    const inputNumberElements = document.querySelectorAll('input[type="number"]');

    inputNumberElements.forEach((input) => {
        let str = "";

        input.addEventListener("input", (event) => {
            console.log(
                isNaN(parseInt(event.data)) && event.data !== null,
            );

            if(isNaN(parseInt(event.data)) && event.data !== null) {
                event.target.value = str;
                return;
            }
            str = event.target.value;
        });
    });
};

init();