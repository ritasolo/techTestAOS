console.log("test");

function isPalindrome(str) {
  const concat = str.replace(/[^A-Z0-9]/gi, "").toLowerCase();
  const checkPalindrome = concat
    .split("")
    .reverse()
    .join("");
  if (concat === "") {
    swal(`Please enter something to check!`, { icon: "error" });
  } else if (concat === checkPalindrome) {
    swal(`${str} is a palindrome!`, { icon: "success" });
  } else {
    swal(`${str} is not a palindrome!`, { icon: "error" });
  }
}
document.getElementById("submit").addEventListener("click", function(e) {
  e.preventDefault();
  const userInput = document.getElementById("userInput").value;
  var div = document.querySelector("div");
  div.innerHTML = isPalindrome(userInput);
  document.getElementById("form").reset();
  swal(isPalindrome(userInput));
});
