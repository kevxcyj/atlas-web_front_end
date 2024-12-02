function createElement(data) {
    const para = document.createElement('p');
    para.textContent = data;
    document.body.appendChild(para);
}


function queryWikipedia(callback) {
    const url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*';
    
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    
    xhr.onload = function() {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            const pageId = Object.keys(response.query.pages)[0];
            const extract = response.query.pages[pageId].extract;

            callback(extract);
        }
    };
    
    xhr.onerror = function() {
        console.error('Error fetching Wikipedia article');
    };
    
    xhr.send();
}


queryWikipedia(createElement);