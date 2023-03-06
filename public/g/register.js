const onFormSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    let formObj = Object.fromEntries(formData);
    console.log(formObj);
    const url = `http://localhost:5000/g/register`
    try {
        const result = await fetch(url, {
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