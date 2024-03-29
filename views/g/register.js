import { urlServer } from '../js/urlServer.js';

const onFormSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    let formObj = Object.fromEntries(formData);
    console.log(formObj);
    try {
        const result = await fetch(urlServer + '/g/register', {
            method: 'POST',
            body: JSON.stringify(formObj),
            headers: { 'Content-type': 'application/json; charset=UTF-8', }
        })
        if (result.ok) {
            const data = await result.json();
            alert('Register Sucessfull!');
            open('/g/main.html?username=' + e.target.username.value + '&id=' + data[0].giver_id,'_self');
        } else {
            throw new Error("something is wrong")
        }
    } catch (error) {
        console.log(error)
    }

}


document.forms[0].addEventListener('submit',onFormSubmit);