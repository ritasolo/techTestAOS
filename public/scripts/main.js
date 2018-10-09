(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

console.log("test");

function isPalindrome(str) {
  var concat = str.replace(/[^A-Z0-9]/gi, "").toLowerCase();
  var checkPalindrome = concat.split("").reverse().join("");
  if (concat === "") {
    swal("Please enter something to check!", { icon: "error" });
  } else if (concat === checkPalindrome) {
    swal(str + " is a palindrome!", { icon: "success" });
  } else {
    swal(str + " is not a palindrome!", { icon: "error" });
  }
}
document.getElementById("submit").addEventListener("click", function (e) {
  e.preventDefault();
  var userInput = document.getElementById("userInput").value;
  var div = document.querySelector("div");
  div.innerHTML = isPalindrome(userInput);
  document.getElementById("form").reset();
  swal(isPalindrome(userInput));
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxRQUFRLEdBQVIsQ0FBWSxNQUFaOztBQUVBLFNBQVMsWUFBVCxDQUFzQixHQUF0QixFQUEyQjtBQUN6QixNQUFNLFNBQVMsSUFBSSxPQUFKLENBQVksYUFBWixFQUEyQixFQUEzQixFQUErQixXQUEvQixFQUFmO0FBQ0EsTUFBTSxrQkFBa0IsT0FDckIsS0FEcUIsQ0FDZixFQURlLEVBRXJCLE9BRnFCLEdBR3JCLElBSHFCLENBR2hCLEVBSGdCLENBQXhCO0FBSUEsTUFBSSxXQUFXLEVBQWYsRUFBbUI7QUFDakIsNkNBQXlDLEVBQUUsTUFBTSxPQUFSLEVBQXpDO0FBQ0QsR0FGRCxNQUVPLElBQUksV0FBVyxlQUFmLEVBQWdDO0FBQ3JDLFNBQVEsR0FBUix3QkFBZ0MsRUFBRSxNQUFNLFNBQVIsRUFBaEM7QUFDRCxHQUZNLE1BRUE7QUFDTCxTQUFRLEdBQVIsNEJBQW9DLEVBQUUsTUFBTSxPQUFSLEVBQXBDO0FBQ0Q7QUFDRjtBQUNELFNBQVMsY0FBVCxDQUF3QixRQUF4QixFQUFrQyxnQkFBbEMsQ0FBbUQsT0FBbkQsRUFBNEQsVUFBUyxDQUFULEVBQVk7QUFDdEUsSUFBRSxjQUFGO0FBQ0EsTUFBTSxZQUFZLFNBQVMsY0FBVCxDQUF3QixXQUF4QixFQUFxQyxLQUF2RDtBQUNBLE1BQUksTUFBTSxTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBVjtBQUNBLE1BQUksU0FBSixHQUFnQixhQUFhLFNBQWIsQ0FBaEI7QUFDQSxXQUFTLGNBQVQsQ0FBd0IsTUFBeEIsRUFBZ0MsS0FBaEM7QUFDQSxPQUFLLGFBQWEsU0FBYixDQUFMO0FBQ0QsQ0FQRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNvbnNvbGUubG9nKFwidGVzdFwiKTtcblxuZnVuY3Rpb24gaXNQYWxpbmRyb21lKHN0cikge1xuICBjb25zdCBjb25jYXQgPSBzdHIucmVwbGFjZSgvW15BLVowLTldL2dpLCBcIlwiKS50b0xvd2VyQ2FzZSgpO1xuICBjb25zdCBjaGVja1BhbGluZHJvbWUgPSBjb25jYXRcbiAgICAuc3BsaXQoXCJcIilcbiAgICAucmV2ZXJzZSgpXG4gICAgLmpvaW4oXCJcIik7XG4gIGlmIChjb25jYXQgPT09IFwiXCIpIHtcbiAgICBzd2FsKGBQbGVhc2UgZW50ZXIgc29tZXRoaW5nIHRvIGNoZWNrIWAsIHsgaWNvbjogXCJlcnJvclwiIH0pO1xuICB9IGVsc2UgaWYgKGNvbmNhdCA9PT0gY2hlY2tQYWxpbmRyb21lKSB7XG4gICAgc3dhbChgJHtzdHJ9IGlzIGEgcGFsaW5kcm9tZSFgLCB7IGljb246IFwic3VjY2Vzc1wiIH0pO1xuICB9IGVsc2Uge1xuICAgIHN3YWwoYCR7c3RyfSBpcyBub3QgYSBwYWxpbmRyb21lIWAsIHsgaWNvbjogXCJlcnJvclwiIH0pO1xuICB9XG59XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IHVzZXJJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlcklucHV0XCIpLnZhbHVlO1xuICB2YXIgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdlwiKTtcbiAgZGl2LmlubmVySFRNTCA9IGlzUGFsaW5kcm9tZSh1c2VySW5wdXQpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1cIikucmVzZXQoKTtcbiAgc3dhbChpc1BhbGluZHJvbWUodXNlcklucHV0KSk7XG59KTtcbiJdfQ==
