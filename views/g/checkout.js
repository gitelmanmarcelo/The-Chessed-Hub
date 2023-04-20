import { urlServer } from "../js/urlServer.js";

const sendEmail2helped = async () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sid = urlParams.get('sid');
    let helped_email;
    try {
        const result = await fetch(urlServer + '/s/hid/'+sid);
        if (!result.ok) {
            throw new Error("something is wrong")
        }
        data = await result.json();
        helped_email = data[0].email;
    } catch (error) {
        console.log(error)
    };
    try {
        const result = await fetch(urlServer + '/g/email', {
            method: 'POST',
            body: JSON.stringify({email: helped_email, message: document.querySelector('#message').value}),
            headers: { 'Content-type': 'application/json; charset=UTF-8', }
        })
        if (!result.ok) {
            throw new Error("something is wrong")
        }
    } catch (error) {
        console.log(error)
    }
};

const completeDonation = async (e) => {
    e.preventDefault();
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const gid = urlParams.get('gid');
    const sid = urlParams.get('sid');
    try {
        const result = await fetch(urlServer + '/s/complete', {
            method: 'POST',
            body: JSON.stringify({giver_id: gid, story_id: sid, closing_date: new Date()}),
            headers: { 'Content-type': 'application/json; charset=UTF-8', }
        })
        if (!result.ok) {
            throw new Error("something is wrong")
        }
    } catch (error) {
        console.log(error)
    }
    sendEmail2helped();
};

document.querySelector('#payPal').addEventListener('click',() => {
     document.querySelector('#payPalForm').classList.remove('hidden');
     document.querySelector('#creditCardForm').classList.add('hidden');
     document.querySelector('#transferInfo').classList.add('hidden')
    });
document.querySelector('#creditCard').addEventListener('click',() => {
    document.querySelector('#payPalForm').classList.add('hidden');
    document.querySelector('#creditCardForm').classList.remove('hidden')
    document.querySelector('#transferInfo').classList.add('hidden')
});
document.querySelector('#transfer').addEventListener('click',() => {
    document.querySelector('#payPalForm').classList.add('hidden');
    document.querySelector('#creditCardForm').classList.add('hidden')
    document.querySelector('#transferInfo').classList.remove('hidden')
});
document.querySelector('#payPalBtn').addEventListener('click', (e) => {
    completeDonation(e);
    open('thanks.html','_self');
})
document.querySelector('#creditCardBtn').addEventListener('click', (e) => {
     completeDonation(e);
    open('thanks.html','_self');
})
document.querySelector('#transferBtn').addEventListener('click',(e) => {
    e.preventDefault();
    open('transfer-thanks.html','_self');
})
