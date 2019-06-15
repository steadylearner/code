// https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
// https://netbasal.com/how-to-secure-your-users-data-after-logout-in-redux-30468c6848e8

// export const loadState = () => {
// 	try {
// 		const serializedState = sessionStorage.getItem("state");
// 		if (serializedState === null) {
// 			return undefined;
// 		}
// 		return JSON.parse(serializedState);
// 	} catch (error) {
// 		return undefined;
// 	}
// };

// export const saveState = (state) => {
// 	try {
// 		const serializedState = JSON.stringify(state);
// 		sessionStorage.setItem("state", serializedState);
// 	} catch (error) {
// 		console.log(error);
// 	}
// };

// localStorage or sessionStorage ?, Because it is still frontend app I decide to use session storage.
// I have to search more later how to use local storage with redux app such as log-in log-out function

// [1] use localStorage or sessionStorage?
// [2] use persistedState or not?

function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

export default storageAvailable;