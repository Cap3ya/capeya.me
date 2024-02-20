async function typeSentence(sentence, eleRef, delay = 100) {
    const element = document.querySelector(eleRef);
    const letters = sentence.split("");
    let i = 0;
    for (const letter of letters) {
        await waitForMs(delay);
        element.textContent += letter;
    }
}

async function deleteSentence(eleRef) {
    const element = document.querySelector(eleRef);
    const letters = element.textContent.split("");
    while (letters.length > 0) {
        await waitForMs(100);
        letters.pop();
        element.textContent = letters.join("");
    }
}

async function carousel(carouselList, eleRef) {
    for (let i = 0; i < carouselList.length; i++) {
        await typeSentence(carouselList[i], eleRef);
        await waitForMs(2000);
        if (i != carouselList.length - 1)
            await deleteSentence(eleRef);
    }
}

function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

export default carousel;
