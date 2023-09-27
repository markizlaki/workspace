export const inputNumberElements = document.querySelectorAll('input[type="number"]');

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