window.onload = function () {

    var input = document.getElementById("guess");

    input.addEventListener("keydown", function (e) {
        if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
            verify();
        }
    });
    
    
    function verify()
    {
        //Code à faire qui appelle le php pour la vérification du guess.
        var formData = new FormData();
        //A récuperer ce qu'on écrit pour l'envoyer dans le php. Ici c'est fait automatiquement
        formData.append('nom', input.value);

        // Make a POST request using Fetch
        fetch('http://localhost/Projet/Polytechdle/php/verify.php', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            console.log('Server response:', data);  

            input.value = '';
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
}



