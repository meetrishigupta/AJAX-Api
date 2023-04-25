function fetchRandomDogData() {
    var xhrRequest = new XMLHttpRequest();
    xhrRequest.onload = () => {
    console.log(xhrRequest.response);
    var responsejson = JSON.parse(xhrRequest.response);
    var imageUrl = responsejson.message;
$('#image-container').attr('src', imageUrl);

};

  xhrRequest.open("get", "https://dog.ceo/api/breeds/image/random", true);
  xhrRequest.send();
}

var button = document.getElementById("fetch-dog-api");
console.log(button);
button.addEventListener("click", fetchRandomDogData);
