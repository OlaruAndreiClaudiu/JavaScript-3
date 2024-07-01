function fetchData() {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((responseJSON) => buildFeed(responseJSON));
}

function buildFeed(data) {
    let html = "";
    //use the JSON Object under the name "responseJSON"
    data.forEach((feedItem) => {
        html += `
        <div class="p-2 border">
        <p class="fw-bold">
        ${feedItem.userid} said: ${feedItem.title}
        </p>
        <p class="col-lg-6 mb-4">${feedItem.body}</p>
        </div>
    `;
    });

    document.querySelector("#posts").innerHTML = html;
}

function loadPosts() {
    fetchData();
}

function getUsername(userId) {
    let username = "New user";

    fetch("https://jsonplaceholder.typicode.com/" + userId)
    .then((response) => response.json())
    .then((responseJSON) => {
        return responseJSON.username;
    });

    return username;
}

document.querySelector("#loadPost").addEventListener("click", loadPosts);