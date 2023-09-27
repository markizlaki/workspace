import { API_URL, LOCATION_URL, appData, filterForm } from "../script.js";
import { getData } from "./getData.js";
import { renderError } from "./renderError.js";
import { renderMoreVacancies } from "./renderMoreVacancy.js";

export const selectCityControl = () => {
    const citySelect = document.querySelector('#city');
    const cityChoices = new Choices(citySelect, {
        itemSelectText: "Нажмите, чтобы выбрать",
        searchEnabled: false,
        position: "bottom",
        });
    
    getData(
        `${API_URL}${LOCATION_URL}`,
        (locationData) => {
            const locations = locationData.map((location) => ({
                value: location,
            }));
            cityChoices.setChoices(locations, 'value', 'label', true);
        },
    
        filterForm.addEventListener('reset', () => {
            const placeholderDefault = document.querySelector("div.choices__item");
                placeholderDefault.innerHTML=cityChoices._placeholderValue;
                placeholderDefault.setAttribute("data-value", cityChoices._placeholderValue);
                placeholderDefault.setAttribute("data-id","1");
                placeholderDefault.classList.add("choices__placeholder");
            
            getData(urlWithParams, renderMoreVacancies, renderError).then(() => {
                appData.lastUrl = urlWithParams;
            });
        }),
    
        (err) => {
            console.log(err);
        },
    );
};