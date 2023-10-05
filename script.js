
// React du pauvre
function createNewReason(reason, imgResult) {
    let reasonItem = document.createElement("li");

    let paragraph = document.createElement("p");
    paragraph.append(reason);

    reasonItem.append(paragraph);

    if (imgResult) {
        let image = document.createElement("img");
        image.src = imgResult;
        reasonItem.append(image);
    }

    return reasonItem;
}

function addNewReason(reason, imgResult) {
    const newReason = createNewReason(reason, imgResult);
    reasonsContainer.append(newReason);

}

function handleNewReasonFormSubmit(submitEvent) {
    submitEvent.preventDefault();
    const formData = Object.fromEntries(new FormData(form));
    const img =  formData["reason-image"];
    if (img.size > 0) {
        reader.onloadend = () => addNewReason(formData.reason, reader.result);
        reader.readAsDataURL(img);
        return;
    }

    addNewReason(formData.reason);


}


const form = document.getElementById("new-reason");
const reasonsContainer = document.getElementById("almost-thirteen-reasons-why");
let reader = new FileReader();


form.addEventListener("submit", handleNewReasonFormSubmit);
