// Declare your genre arrays here
let Actions = ["https://upload.wikimedia.org/wikipedia/en/0/02/ChalkZone_Title.png" , "https://assets.change.org/photos/2/te/gh/bTteghFlxuXKAzy-1600x900-noPad.jpg?1509234009" , "https://i.ytimg.com/vi/rrmUk2YUm14/maxresdefault.jpg"];
let Dramas = ["https://www.syfy.com/sites/syfy/files/styles/scale_1280/public/2019/11/courage-the-cowardly-dog.jpg", "https://assets1.cbsnewsstatic.com/hub/i/2018/07/17/ad3ef0fc-df27-40ad-8328-3c19e483def8/rugrats.jpg", "https://static.wikia.nocookie.net/heyarnold/images/2/20/73e559fc4cda83a23c46009cc5bfe4379d960cee_hq.jpg/revision/latest/scale-to-width-down/612?cb=20170119152142"];
let Comedies = ["https://abcnews.go.com/images/US/GTY_family_guy_brian_jef_131126_16x9_608.jpg", "https://thehybridone.files.wordpress.com/2014/06/062214_2310_hylights258.jpg?w=775"];

let imageresult = document.querySelector(".resultsimg");
let category = "";
let imagesDisplayed = false;
let b2 = document.querySelector(".b2")

b2.onclick = function() {
  let Sug = document.querySelector(".Sug").value

  imageresult.insertAdjacentHTML("afterbegin", "<img src= '" + Sug + "'>");
}


// Make sure to declare your HTML elements as variables!
let result = document.querySelector(".result");
// Submit Button
let submitButton = document.querySelector("button");
submitButton.onclick = function() {
  // Gets Value in the category
  category = document.querySelector(".category").value;
  // Makes it lowercase
  category = category.toLowerCase();

  if (imagesDisplayed) {
    // Clear existing images
    imageresult.innerHTML = "";
    imagesDisplayed = false;
  }

  if (category == "action") {
    for (let action of Actions) {
      imageresult.insertAdjacentHTML("afterbegin", "<img src= '" + action + "'>");
    }
    imagesDisplayed = true;
  } else if (category == "drama") {
    for (let drama of Dramas) {
      imageresult.insertAdjacentHTML("afterbegin", "<img src= '" + drama + "'>");
    }
    imagesDisplayed = true;
  } else if (category == "comedy") {
    for (let comedy of Comedies) {
      imageresult.insertAdjacentHTML("afterbegin", "<img src= '" + comedy + "'>");
    }
    imagesDisplayed = true;
  }
};
