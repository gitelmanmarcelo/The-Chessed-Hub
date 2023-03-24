const setName = async () => {
    try {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const id = urlParams.get('id');
        const result = await fetch('https://the-chessed-hub.onrender.com/g/id2Name/'+ id)
        if (result.ok) {
            const data = await result.json();
            document.querySelector('#giverName').textContent = data[0].name;
        } else {
            throw new Error("something is wrong")
        }
    } catch (error) {
        console.log(error)
    }
};

const onHelpClick = (e) => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const gid = urlParams.get('id');
    const sid = e.currentTarget.parentElement.querySelectorAll('div')[0].textContent;
    const val = e.currentTarget.parentElement.querySelectorAll('div')[3].textContent.slice(1);
    open('checkout.html?sid=' + sid + '&gid=' + gid + '&v=' + val,'_self');
}


const addStoryDiv = (text,setClass) => {
    const tnode = document.createTextNode(text);
    const p = document.createElement('p');
    const div = document.createElement('div');
    div.appendChild(p);
    p.appendChild(tnode);
    if (setClass)
        div.classList.add(setClass);
    return div;
};

const getStories = async () => {
    try {
        const result = await fetch('https://the-chessed-hub.onrender.com/s/pending');
        if (result.ok) {
            const data = await result.json();
            data.forEach(story => {
                const div = document.createElement('div');
                div.classList.add('rowDiv');
                div.appendChild(addStoryDiv(story.story_id,'hidden'));
                const date = story.creation_date.slice(8,10) + '/' + story.creation_date.slice(5,7) + '/' + story.creation_date.slice(0,4);
                div.appendChild(addStoryDiv(date));
                div.appendChild(addStoryDiv(story.story));
                div.appendChild(addStoryDiv(story.amount));
                const btn = document.createElement('button');
                const tnode = document.createTextNode('<- Select');
                btn.appendChild(tnode);
                const btnDiv = document.createElement('div');
                btnDiv.appendChild(btn);
                btnDiv.addEventListener('click',onHelpClick);
                div.appendChild(btnDiv);
                document.querySelector('#stories').appendChild(div);
            });
            
        } else {
            throw new Error("something is wrong")
        }
    } catch (error) {
        console.log(error)
    }
};

const toggleSort = async (e) => {
    let url;
    if (e.currentTarget.querySelectorAll('p')[0].textContent === 'Date'){
        date_sort = (date_sort === 'asc' ? 'desc' : 'asc');    
        url = 'https://the-chessed-hub.onrender.com/s/sortedByDate?type=' + date_sort;
    } else {   // AMOUNT
        amount_sort = (amount_sort === 'asc' ? 'desc' : 'asc');    
        url = 'https://the-chessed-hub.onrender.com/s/sortedByAmount?type=' + amount_sort;
    }
    const stories = document.querySelector('#stories').querySelectorAll('div.rowDiv');
    for (let i=1; i<stories.length; i++){
        document.querySelector('#stories').removeChild(stories[i]);
    }
    try {
        const result = await fetch(url);
        if (result.ok) {
            const data = await result.json();
            data.forEach(story => {
                const div = document.createElement('div');
                div.classList.add('rowDiv');
                div.appendChild(addStoryDiv(story.story_id,'hidden'));
                const date = story.creation_date.slice(8,10) + '/' + story.creation_date.slice(5,7) + '/' + story.creation_date.slice(0,4);
                div.appendChild(addStoryDiv(date));
                div.appendChild(addStoryDiv(story.story));
                div.appendChild(addStoryDiv(story.amount));
                const btn = document.createElement('button');
                const tnode = document.createTextNode('<- Select');
                btn.appendChild(tnode);
                const btnDiv = document.createElement('div');
                btnDiv.appendChild(btn);
                btnDiv.addEventListener('click',onHelpClick);
                div.appendChild(btnDiv);
                document.querySelector('#stories').appendChild(div);
            });
            
        } else {
            throw new Error("something is wrong")
        }
    } catch (error) {
        console.log(error)
    }

};

let date_sort = 'asc';
let amount_sort = 'asc';

document.querySelector('#dateCol').addEventListener('click',toggleSort);
document.querySelector('#amountCol').addEventListener('click',toggleSort);

setName();
getStories();