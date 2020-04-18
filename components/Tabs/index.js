// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

const tabContainer = (topicTitle) => {
    const tab = document.createElement('div')
    tab.classList.add('tab')
    tab.textContent = topicTitle

    return tab;
}

axios.get("https://lambda-times-backend.herokuapp.com/topics")
  .then((response) => {
    // console.log(response);
    const topicData = response.data.topics
    const tabs = document.querySelector(".tabs .topics")

    topicData.forEach(topic => {
        const topicCard = tabContainer(topic)
        console.log(topicCard)
        tabs.append(topicCard)
    })
  })
  .catch((err) => {
    console.log("The data was not returned", err);
  })