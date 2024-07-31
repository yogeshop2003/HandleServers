document.getElementById('btn1').addEventListener('click', function() {
    axios.get("http://localhost:8084/time")
        .then(function(response) {
            document.getElementById('h').innerText = response.data;
        })
        .catch(function(error) {
            console.log(error);
        });
});


document.getElementById('btn2').addEventListener('click', function() {
    axios.get("http://localhost:8082/time")
        .then(function(response) {
            document.getElementById('h').innerText = response.data;
        })
        .catch(function(error) {
            console.log(error);
        });
});

