var gUsers = [], gLoggedInUser, gStatusSort = 'timeStamp';
function createUsers() {

    gUsers.push(createUser('ohadavidar', '1234', true));
    gUsers.push(createUser('reutmaimon', '2345', false));
    gUsers.push(createUser('pabloescobar', '3456', false));
    console.log(gUsers);
}

function createUser(userName, password, isAdmin) {
    var user = { username: userName, password: password, isAdmin: isAdmin };
    return user;
}


function checkForValidation(inputUserName, inputPassword) {
    return gUsers.find(function (user) {
        return (inputUserName === user.username && inputPassword === user.password)
    })
}

function saveUsers() {
    saveToStorage('users', gUsers);
}

function saveLoggedInUser(user) {
    saveToStorage('loggedIn', user)
}

function removeItemFromStorage(key) {
    localStorage.removeItem(key);
}

function loadData() {
    gUsers = loadFromStorage('users', []);
    gLoggedInUser = loadFromStorage('loggedIn', {});
}

function updateLastLogin(user) {
    user.lastLoginTime = new Date(Date.now());
    user.timeStamp = Date.now();
}
//dynamic sort!!!!!!!!!!!
function dynamicSort() {
    return gUsers.sort(function (a, b) {
        return a[gStatusSort] > b[gStatusSort] ? 1 : a[gStatusSort] < b[gStatusSort] ? -1 : 0
    })
}

function getUsersToRender() {
    return dynamicSort();
}

function setSortStatus(statusSort) {
    gStatusSort = statusSort;
}
