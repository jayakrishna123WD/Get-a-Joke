const jok = document.getElementById("joke");
const bt = document.getElementById("btn");
const apikey = "nIa8zFyV76/LvVTM4t7T3g==vnGzMrUHP9n3Kfmx";
const apiurl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
const opt = {
    method: 'GET',
    headers: {
        'X-Api-Key': apikey
    }
}
async function doit() {
    try {
        jok.innerText = "Wait...";
        bt.disabled = true;
        bt.innerText = "Loading";
        const pro = await fetch(apiurl, opt);
        const data = await pro.json();
        jok.innerText = data[0].joke;
        bt.disabled = false;
        bt.innerText = "Get Joke";
    } catch (error) {
        jok.innerText = "Try Again Later";
        bt.disabled = false;
        bt.innerText = "Get Joke";
    }
}
bt.addEventListener("click", doit);