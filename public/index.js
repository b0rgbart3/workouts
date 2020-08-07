

init();

async function init() {
  console.log("In the init function.");
  if (location.search.split("=")[1] === undefined) {
    console.log("No params so getting last workout");
    const workout = await API.getLastWorkout();
    if (workout) {
      location.search = "?id=" + workout._id;
    } else {
      document.querySelector("#continue-btn").classList.add("d-none");
    }
  }
}

