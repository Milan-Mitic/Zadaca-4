/********** Task 1 **********/



function loadPlanets() {
       const url = 'https://swapi.dev/api/planets/?page=1';
       fetch(url)
         .then(response => response.json())
         .then(data => {
           const planets = data.results;
           displayPlanets(planets);
         })
         .catch(error => console.error(error));
     }
 
     function displayPlanets(planets) {
       const tableBody = document.querySelector('#planetTable tbody');
       tableBody.innerHTML = '';
 
       planets.forEach(planet => {
         const row = tableBody.insertRow();
         const nameCell = row.insertCell();
         const populationCell = row.insertCell();
         const climateCell = row.insertCell();
         const gravityCell = row.insertCell();
 
         nameCell.innerHTML = planet.name;
         populationCell.innerHTML = planet.population;
         climateCell.innerHTML = planet.climate;
         gravityCell.innerHTML = planet.gravity;
       });
     }




/********** Task 2 **********/


 let currentPage = 1;
     let totalPages = 0;
     let planets = [];
 
     function loadPlanets() {
       const url = `https://swapi.dev/api/planets/?page=${currentPage}`;
       fetch(url)
         .then(response => response.json())
         .then(data => {
           planets = data.results;
           totalPages = Math.ceil(data.count / planets.length);
           displayPlanets(planets);
           displayNavigationButtons();
         })
         .catch(error => console.error(error));
     }
 
     function displayPlanets(planetsToDisplay) {
       const tableBody = document.querySelector('#planetTable tbody');
       tableBody.innerHTML = '';
 
       planetsToDisplay.forEach(planet => {
         const row = tableBody.insertRow();
         const nameCell = row.insertCell();
         const populationCell = row.insertCell();
         const climateCell = row.insertCell();
         const gravityCell = row.insertCell();
 
         nameCell.innerHTML = planet.name;
         populationCell.innerHTML = planet.population;
         climateCell.innerHTML = planet.climate;
         gravityCell.innerHTML = planet.gravity;
       });
     }
 
     function displayNavigationButtons() {
       const buttonContainer = document.querySelector('#buttonContainer');
       buttonContainer.innerHTML = '';
 
       if (totalPages > 1 && currentPage < totalPages) {
         const nextButton = document.createElement('button');
         nextButton.innerText = 'Next 10';
         nextButton.addEventListener('click', handleNextButtonClick);
         buttonContainer.appendChild(nextButton);
       }
 
       if (currentPage > 1) {
         const previousButton = document.createElement('button');
         previousButton.innerText = 'Previous 10';
         previousButton.addEventListener('click', handlePreviousButtonClick);
         buttonContainer.appendChild(previousButton);
       }
     }
 
     function handleNextButtonClick() {
       currentPage++;
       const startIndex = (currentPage - 1) * 10;
       const endIndex = startIndex + 10;
       const planetsToDisplay = planets.slice(startIndex, endIndex);
       displayPlanets(planetsToDisplay);
       displayNavigationButtons();
     }
 
     function handlePreviousButtonClick() {
       currentPage--;
       const startIndex = (currentPage - 1) * 10;
       const endIndex = startIndex + 10;
       const planetsToDisplay = planets.slice(startIndex, endIndex);
       displayPlanets(planetsToDisplay);
       displayNavigationButtons();
     }