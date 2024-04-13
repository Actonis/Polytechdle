window.onload = function () {

    var geolist= document.getElementById("geo-list");
    var sumbitButton = document.getElementById("submit");

    sumbitButton.addEventListener("click", function() {
        verify();
    });

    fetch('/getImages', {
            method: 'GET',
        })
        .then(response => response.json())
        .then(data => { 
            populateDatalist(data.ecole);
        })
        .catch(error => {
            console.error('Error:', error);
        });

        function populateDatalist(ecole) {
    
            // Clear existing options
            geolist.innerHTML = '';
    
            // Populate datalist with names from the database
            ecole.forEach(function(ecole) {
                var p = document.createElement('p');
                p.classList.add('clickable');
                p.textContent = ecole;
                geolist.appendChild(p);
            });
        }

    fetch('/setImg', {
        method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
        var img = document.getElementById("geo-img");
        img.src = data.lien;
    })

    var input = document.getElementById("guess");

    input.addEventListener("keydown", function (e) {
        if (e.code === "Enter") {  //checks whether the pressed key is "Enter"

            var firstVisibleName;
            var namelistChildren = geolistlist.children;

            for (var i = 0; i < namelistChildren.length; i++) {
                if (namelistChildren[i].style.display === "block") {
                        firstVisibleName = namelistChildren[i];
                        break; // Found the first visible element, exit the loop
                }
            }
            if (firstVisibleName) {
                input.value = firstVisibleName.textContent;
                verify();
                geolist.style.display = "none";
            }
            
        }
    });

    geolist.addEventListener("click", function(e) {
        if (e.target.tagName === "P") {
            input.value = e.target.textContent;
            //verify();
            geolist.style.display = "none";
        }
    });

    input.addEventListener("input", function() {
        var typedText = input.value.trim();
        
        // Check if there is at least one character typed
        if (typedText.length > 0) {
            //show the names list
            geolist.style.display = "block";
            search();
        } else {
            geolist.style.display = "none";
        }
    });
    
    
    function verify()
    {   
        // Get the value of the input field
        const data = { ecole: input.value };

        if (data.ecole === "") {
            return;
        }
        else {
            // Make a POST request using Fetch
            fetch('/verifyImg', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => {
                if (data.correct === "true") {
                    return endingTheGame();
                } else {
                    return alert("Mauvaise réponse, on te facilite la tâche gros nullos");
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
    }

    function search() {
        var typedText = input.value.trim();
        var ecoles = geolist.getElementsByTagName("p");
        var ecole;
        var matchFound = false;

        for (var i = 0; i < ecoles.length; i++) {
            ecole = ecoles[i].textContent;
            if (ecole.toLowerCase().indexOf(typedText.toLowerCase()) > -1) {
                ecoles[i].style.display = "block";
                matchFound = true;
            } else {
                ecoles[i].style.display = "none";
            }
        }

        var noResultMessage = geolist.querySelector('.no-result-message');

        if (!matchFound && !noResultMessage) {
            var noResultMessage = document.createElement('p');
            noResultMessage.textContent = "Aucun résultat trouvé";
            noResultMessage.className = "no-result-message";
            geolist.appendChild(noResultMessage);
        } else if (!matchFound && noResultMessage) {
            noResultMessage.style.display = "block";
        }
        else {
            // Remove "No result found" message if matches are found
            var noResultMessage = geolist.querySelector('.no-result-message');
            if (noResultMessage) {
                noResultMessage.remove();
            }
        }
    }

    function endingTheGame() {
        congrateMessage = document.getElementById('modal-end')

        congrateMessage.style.display = 'block';

        document.getElementById('container-guess-field').style.display = 'none';

    }

    
    
}


