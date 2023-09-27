import { cardsList } from "../script.js";
import { openModal } from "./modalControl.js";

export const modalVacancyControl = () => {
    cardsList.addEventListener('click', ({target}) => {
        const vacancyCard = target.closest('.vacancy');
        if (vacancyCard) {
            const vacancyId = vacancyCard.dataset.id;
            openModal(vacancyId);
        }
    });

    cardsList.addEventListener('keydown', ({code, target}) => {
        const vacancyCard = target.closest('.vacancy');
        if ((code === 'Enter' || code === 'NumpadEnter') && vacancyCard) {
            const vacancyId = vacancyCard.dataset.id;
            openModal(vacancyId);
            target.blur();
        }
    });
};