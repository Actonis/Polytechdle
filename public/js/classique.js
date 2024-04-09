window.onload = function () {

    var namelist= document.getElementById("name-list");
    var sumbitButton = document.getElementById("submit");
    var sumbitButton2 = document.getElementById("submit2");

    sumbitButton.addEventListener("click", function() {
        verify();
    });

    sumbitButton2.addEventListener("click", function() {
        hideModal();
        const selectedDate = document.querySelector('.date-item-container.selected .date-item').textContent;
        const url = `guess_mirror.html?date=${encodeURIComponent(selectedDate)}`;
        window.location.href = url;


        fetch("/handleDate", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ date: selectedDate })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Traitement de la réponse du serveur si nécessaire
            console.log('Réponse du serveur :', data);
        })
        .catch(error => {
            console.error('Erreur lors de la requête vers le serveur :', error);
        });


    });

    var dateButton = document.getElementById('modal-jeu-button');

    dateButton.addEventListener('click', function () {
        showModal();
    });


    fetch('/getNames', {
            method: 'GET',
        })
        .then(response => response.json())
        .then(data => { 
            populateDatalist(data.names);
        })
        .catch(error => {
            console.error('Error:', error);
        });

        function populateDatalist(names) {
    
            // Clear existing options
            namelist.innerHTML = '';
    
            // Populate datalist with names from the database
            names.forEach(function(name) {
                var p = document.createElement('p');
                p.classList.add('clickable');
                p.textContent = name;
                namelist.appendChild(p);
            });
        }

    var input = document.getElementById("guess");

    input.addEventListener("keydown", function (e) {
        if (e.code === "Enter") {  //checks whether the pressed key is "Enter"

            var firstVisibleName;
            var namelistChildren = namelist.children;

            for (var i = 0; i < namelistChildren.length; i++) {
                if (namelistChildren[i].style.display === "block") {
                        firstVisibleName = namelistChildren[i];
                        break; // Found the first visible element, exit the loop
                }
            }
            if (firstVisibleName) {
                input.value = firstVisibleName.textContent;
                verify();
                namelist.style.display = "none";
            }
            
        }
    });

    namelist.addEventListener("click", function(e) {
        if (e.target.tagName === "P") {
            input.value = e.target.textContent;
            //verify();
            namelist.style.display = "none";
        }
    });

    input.addEventListener("input", function() {
        var typedText = input.value.trim();
        
        // Check if there is at least one character typed
        if (typedText.length > 0) {
            //show the names list
            namelist.style.display = "block";
            search();
        } else {
            namelist.style.display = "none";
        }
    });
    
    
    function verify()
    {   
        // Get the value of the input field
        const data = { nom: input.value };

        if (data.nom === "") {
            return;
        }
        else {
            // Make a POST request using Fetch
            fetch('/verify', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => {
                printClues(data);

                input.value = '';
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
    }

    function printClues(clues) {
        var cluesContainer = document.createElement('div');
        cluesContainer.className = "clues-container";
        cluesContainer.id = "clues-container"
        cluesContainer.classList.add('categories'); // Add a class for styling

        var parentContainer= document.getElementById("container-clue");
        parentContainer.appendChild(cluesContainer);

        var i = 0;
        clues.criterias.forEach(criteria => {
            const rectangle = document.createElement('div');
            rectangle.textContent=criteria.value

            if(criteria.correct == "true")
            {
                rectangle.classList.add('vrai');
            }
            else if(criteria.correct == "false")
            {
                rectangle.classList.add('faux');
            }
            else if(criteria.correct == "nearly")
            {
                rectangle.classList.add('presque');
            }

            rectangle.classList.add('rectangle'); // Add a class for styling
            rectangle.style.animationDelay = (i * 0.4) + "s"; // Stagger animation delays
            cluesContainer.appendChild(rectangle); // Append the rectangle to the container
            i++;
        })
        // Check end of game after delay
        setTimeout(function() {
            if (endOfTheGame(cluesContainer)) {
                endingTheGame();
            }
        }, i * 0.4 * 1000); // Convert seconds to milliseconds
    }

    function search() {
        var typedText = input.value.trim();
        var names = namelist.getElementsByTagName("p");
        var name;
        var matchFound = false;

        for (var i = 0; i < names.length; i++) {
            name = names[i].textContent;
            if (name.toLowerCase().indexOf(typedText.toLowerCase()) > -1) {
                names[i].style.display = "block";
                matchFound = true;
            } else {
                names[i].style.display = "none";
            }
        }

        var noResultMessage = namelist.querySelector('.no-result-message');

        if (!matchFound && !noResultMessage) {
            var noResultMessage = document.createElement('p');
            noResultMessage.textContent = "Aucun résultat trouvé";
            noResultMessage.className = "no-result-message";
            namelist.appendChild(noResultMessage);
        } else if (!matchFound && noResultMessage) {
            noResultMessage.style.display = "block";
        }
        else {
            // Remove "No result found" message if matches are found
            var noResultMessage = namelist.querySelector('.no-result-message');
            if (noResultMessage) {
                noResultMessage.remove();
            }
        }
    }

    function endOfTheGame(responses) {
        //responses = document.querySelectorAll("#clues-container")
        var end = true;
        for(i=0; i<responses.children.length; i++){
            if(responses.children[i].classList.contains('faux'))
            {
                end = false
            }
        }

        if(end)
        {
            return true
        }
        else
        {
            return false
        }
    }

    function endingTheGame() {
        congrateMessage = document.getElementById('modal-end')

        congrateMessage.style.display = 'block';

        document.getElementById('container-guess-field').style.display = 'none';

    }

    fetch('/getDates') 
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Dates récupérées depuis le serveur :', data);
        const dateList = document.getElementById('date-list');
        data.dates.forEach(date => {
            const dateItemContainer = document.createElement('div');
            dateItemContainer.classList.add('date-item-container');

            const dateItem = document.createElement('div');
            dateItem.textContent = date;
            dateItem.classList.add('date-item');
            dateItem.addEventListener('click', () => {
                console.log('Date sélectionnée :', date);
                dateItemContainer.classList.toggle('selected');
            });

            dateItemContainer.appendChild(dateItem);
            dateList.appendChild(dateItemContainer);
        });
    })
    .catch(error => {
        console.error('Erreur lors de la récupération des dates depuis le serveur :', error);
    });



            function showModal() {
                document.getElementById('modaljeu').style.display = 'block';
                // Add class to darken the background
                document.getElementById('modaljeu').classList.add('darken-background');
            }
        
            // Function to hide the modal
            function hideModal() {
                document.getElementById('modaljeu').style.display = 'none';
                // Remove class to remove darkened background
                document.getElementById('modaljeu').classList.remove('darken-background');
            }

}


