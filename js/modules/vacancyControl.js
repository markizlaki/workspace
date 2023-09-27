import { API_URL, VACANCY_URL, appData } from "../script.js";
import { getData } from "./getData.js";
import { renderVacancies } from "./renderVacancy.js";
import { renderError } from "./renderError.js";

export const vacancyControl = () => {
    const urlWithParams = new URL(`${API_URL}${VACANCY_URL}`);
    
    urlWithParams.searchParams.set('limit', window.innerWidth < 768 ? 6 : 12);
    urlWithParams.searchParams.set('page', 1); 

    getData(urlWithParams, renderVacancies, renderError).then(() => {
        appData.lastUrl = urlWithParams;
    });
};