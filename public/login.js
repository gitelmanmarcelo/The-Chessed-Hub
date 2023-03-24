const onFormSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    let formObj = Object.fromEntries(formData);
    const url = 'https://the-chessed-hub.onrender.com/login'
    try {
        const result = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(formObj),
            headers: { 'Content-type': 'application/json; charset=UTF-8', }
        })
        if (result.ok) {
            const data = await result.json();
            if (data.length >0 && data[0].password == document.forms[0].password.value) {
                open('/s/story.html?username=' + e.target.username.value + '&id=' + data[0].helped_id,'_self');
            }
            else {
                document.querySelector('#message').textContent = 'Username or password error!'
            }
        } else {
            throw new Error("something is wrong")
        }
    } catch (error) {
        console.log(error)
    }

}


document.forms[0].addEventListener('submit',onFormSubmit);