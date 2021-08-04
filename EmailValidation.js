const userinput = document.getElementById("emailvalid");
const output = document.getElementById("demo");

userinput.addEventListener("keyup", () => {
    const RegexPattern = /^\S+\@+\S+\.[a-z]{2,3}$/;

    if (userinput.value == "" || userinput.value.length == 0 ) {
        output.style.visibility = "hidden";
    }
    else {
        if (RegexPattern.test(userinput.value)) {
            output.innerHTML = "your email is valid";
            output.style.color = "green";
        }
        else {
            output.innerHTML = "your email is not valid";
            output.style.color = "red";
        }
    }
})