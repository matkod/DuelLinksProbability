function addElement(parentId, elementTag, elementId, html) {
    // Adds an element to the document
    var p = document.getElementById(parentId);
    var newElement = document.createElement(elementTag);
    newElement.setAttribute('id', elementId);
    newElement.innerHTML = html;
    p.appendChild(newElement);
}

function removeElement(elementId) {
    // Removes an element from the document
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}


var cardId = 0; // keep track of IDs
function addNewCard() {
    cardId++; 
    var html = '<input type="number" name="uploaded_files[]" /> ' +
               '<a href="" onclick="javascript:removeElement('number-' + fileId + ''); return false;">Remove</a>';
    addElement('number', 'p', 'number-' + cardId, html);
}

var fileId = 0; // used by the addFile() function to keep track of IDs
function addFile() {
    fileId++; // increment fileId to get a unique ID for the new element
    var html = '<input type="file" name="uploaded_files[]" /> ' +
               '<a href="" onclick="javascript:removeElement('file-' + fileId + ''); return false;">Remove</a>';
    addElement('files', 'p', 'file-' + fileId, html);
}
