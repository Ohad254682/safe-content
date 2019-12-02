function initIndex() {
    loadData();
    if (gUsers.length === 0) createUsers();
}


function login() {
    var inputUserName = document.querySelector('#username').value;
    var inputPassword = document.querySelector('#password').value;
    gLoggedInUser = checkForValidation(inputUserName, inputPassword)
    if (gLoggedInUser) {
        updateLastLogin(gLoggedInUser);
        saveLoggedInUser(gLoggedInUser);
        saveUsers();
        window.location.href = 'secretContent.html';
    }
}

function initsecretContent() {
    loadData();
    renderAdminButton();
    renderUserName();
}

function renderAdminButton() {
    if (gLoggedInUser.isAdmin) {
        document.querySelector('#btn-admin').innerHTML = `<button onclick="moveToAdminPage()">Admin Page</button>`;
    }
}

function renderUserName() {
    document.querySelector('#showUserName').innerText = gLoggedInUser.username;
}

function moveToAdminPage() {
    window.location.href = 'admin.html';
}

function logOut() {
    window.location.href = 'index.html';
    removeItemFromStorage('loggedIn');
}

function renderUsersTable() {
    var elBoard = document.querySelector('.board');
    var users = getUsersToRender();
    var strHTML = users.map(function (user) {
        return `<tr>\n
        \t<td>${user.username}</td><td>${user.password}</td><td>${user.isAdmin}</td><td>${user.lastLoginTime}</td>\n
        <tr>`;
    })
    elBoard.innerHTML = strHTML.join('');
}

function initAdmin() {
    loadData();
    renderUsersTable();
}

function onStatusSortChange(elStatusSort) {
    var SortByStatus = elStatusSort.value;
    setSortStatus(SortByStatus);
    renderUsersTable();
}