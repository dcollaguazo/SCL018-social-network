import { addReview } from "../../firebase.js";

export const feed = () => {
    const divFeed = document.createElement('div');
    const viewFeed = `
    <h3>This is the Feed</h3>
    <form>
        <input type="text" id="iptReviewContent" /><br>
        <input type="submit" id="btnPostReview" value="Post Review" />
    </form> 
    `
    divFeed.innerHTML = viewFeed;

    const btnPostReview = divFeed.querySelector("#btnPostReview");
    btnPostReview.addEventListener('click', () => {
        console.log('review added!');
        addReview();
    });

    // console.log(divFeed);
    return divFeed;
}