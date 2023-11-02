const subject = document.getElementById("subject");
const section = document.getElementById("section");

subject.addEventListener("click", () => {
  console.log("go to subject");
  window.location.href = "../subject-mat/subject-mat.html";
});
