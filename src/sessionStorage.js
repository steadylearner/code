const save = (name = "state", state = {}) => {
  try {
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem(name, serializedState);
  } catch (error) {
    console.log(error);
  }
};

const load = (name = "state") => {
  try {
    const serializedState = sessionStorage.getItem(name);
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
    sessionStorage.getItem(name);
  } catch (error) {
    console.log(error);
  }
};

const showWithName = () => {
  try {
    for (let i = 0; i < sessionStorage.length; i++) {
      console.log(`${sessionStorage.key(i)}: ${sessionStorage.getItem(sessionStorage.key(i))}`);
    }
  } catch (error) {
    console.log(error);
  }
};

const showWithNumber = () => {
  try {
    for (let i = 0; i < sessionStorage.length; i++) {
      console.log(`${i}: ${sessionStorage.getItem(sessionStorage.key(i))}`);
    }
  } catch (error) {
    console.log(error);
  }
};

const clear = () => {
  try {
    sessionStorage.clear();
  } catch (error) {
    console.log(error);
  }
};

export {
  load,
  save,
  remove,
  showWithName,
  showWithNumber,
  clear,
}




