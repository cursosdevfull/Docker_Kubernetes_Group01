function execute() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "api/config", true);
  xhr.responseType = "json";

  xhr.onload = function () {
    const status = xhr.status;
    if (status === 200) {
      const xhr2 = new XMLHttpRequest();
      xhr2.open("GET", xhr.response.backend1 + "/message", true);
      xhr2.responseType = "json";
      xhr2.onload = function () {
        const status = xhr2.status;
        if (status === 200) {
          document.getElementById("backend1message").innerHTML =
            xhr2.response.backend1.message;
          document.getElementById("backend2message").innerHTML =
            xhr2.response.backend2.message;
        } else {
          document.getElementById("errormessage").innerHTML = JSON.stringify(
            xhr2.response
          );
        }
      };

      xhr2.send();
    } else {
      document.getElementById("errormessage").innerHTML = JSON.stringify(
        xhr2.response
      );
    }
  };

  xhr.send();
}
