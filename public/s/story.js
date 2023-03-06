const onFormSubmit = async (e) => {
    e.preventDefault()
    if (document.forms[0].story.value.length == 0 || document.forms[0].amount.value.length == 0) {
        alert('Required field is empty!');
        return;
    }
    const formData = new FormData(e.target)
    let formObj = Object.fromEntries(formData);
    formObj.creation_date = new Date();
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');
    formObj.helped_id = id;
    const url = `http://localhost:5000/s/register`
    try {
        const result = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(formObj),
            headers: { 'Content-type': 'application/json; charset=UTF-8', }
        })
        if (result.ok) {
            const data = await result.json();
            open('success.html','_self');
        } else {
            throw new Error("something is wrong")
        }
    } catch (error) {
        console.log(error)
    }

}


document.forms[0].addEventListener('submit',onFormSubmit);