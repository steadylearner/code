import localStorage from "./localStorage";
import sessionStorage from "./sessionStorage";
import { useRegex } from "../regex";

function copy(
  value = "",
  fn = useRegex(),
) {
  const textField = document.createElement("textarea");

  textField.innerText = value;
  document.body.appendChild(textField);

  textField.value = fn(textField.innerHTML);

  textField.select(); // select copies html value
  document.execCommand("copy");
  textField.remove();
}

// Use your own function to what to do with the contents of local file
// e is mandatory
function readLocalFileWithHow(e = {}, fn = {}) { // (How -> How to use it)
  let file = e.target.files[0];

  if (!file) {
    return;
  }

  if (fn === {}) {
    return;
  }

  let reader = new FileReader();
  reader.onload = (e) => {
    let contents = e.target.result;
    // alert(contents);
    fn(contents);
  };
  reader.readAsText(file);
}

// Pass text value to save file and name if you want.
// For example, saveTextFromWeb("This is from your markdown editor.", "README.md")
function saveTextFromWeb(text = "", name = "README.md", type = "text/plain")
{
    let textToBlob = new Blob([text], {type});
    let blobURL = window.URL.createObjectURL(textToBlob);
    let fileName = name;

    let fileLink = document.createElement("a");

    fileLink.download = fileName;
    fileLink.innerHTML = "Save File from Web";
    fileLink.href = blobURL;
    fileLink.onclick = destroyClickedElement;
    fileLink.style.display = "none";
    document.body.appendChild(fileLink);

    fileLink.click();
}

function destroyClickedElement(event) {
  document.body.removeChild(event.target);
}

export {
  //
  localStorage,
  sessionStorage,
  //
  copy,
  //
  readLocalFileWithHow,
  saveTextFromWeb,
}
