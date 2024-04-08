window.onload = function () {

    var namelist= document.getElementById("name-list");
    var sumbitButton = document.getElementById("submit");

    sumbitButton.addEventListener("click", function() {
        verify();
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

        console.log(document.getElementById('container-guess-field'))

        document.getElementById('container-guess-field').style.display = 'none';
    }
}



