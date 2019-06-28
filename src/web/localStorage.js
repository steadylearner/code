// https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API

const save = (name = "state", state = {}) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(name, serializedState);
  } catch (error) {
    console.log(error);
  }
};

const load = (name = "state") => {
  try {
    const serializedState = localStorage.getItem(name);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

const remove = (name = "state") => {
  try {
    localStorage.getItem(name);
  } catch (error) {
    console.log(error);
  }
};

const clear = () => {
  try {
    localStorage.clear();
  } catch (error) {
    console.log(error);
  }
};

const showWithName = () => {
  try {
    for (let i = 0; i < localStorage.length; i++) {
      console.log(`${localStorage.key(i)}: ${localStorage.getItem(localStorage.key(i))}`);
    }
  } catch (error) {
    console.log(error);
  }
};

const showWithNumber = () => {
  try {
    for (let i = 0; i < localStorage.length; i++) {
      console.log(`${i}: ${localStorage.getItem(localStorage.key(i))}`);
    }
  } catch (error) {
    console.log(error);
  }
};

export {
  save,
  load,
  remove,
  clear,
  //
  showWithName,
  showWithNumber,
}

