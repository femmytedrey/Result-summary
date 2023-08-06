function fetchJSONData(callback) {
    fetch('data.json')
      .then((response) => response.json())
      .then((data) => callback(data))
      .catch((error) => console.error('Error fetching JSON data:', error));
  }
  
  function populateContent(data) {
    data.forEach((categoryData, index) => {
      const categoryElement = document.getElementById(`category${index + 1}`);
      if (categoryElement) {
        categoryElement.innerHTML = `
          <div class="incat1">
            <img src="${categoryData.icon}" alt="">
          </div>
          <div class="incat2">
            <p>${categoryData.category}</p>
          </div>
          <div class="incat3">
            <p class="incatstyles">${categoryData.score} <span id="inspan">/ 100</span></p>
          </div>
        `;
      }
    });
  }
  
  fetchJSONData(populateContent);
  