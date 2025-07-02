const generateMemeBtn = document.querySelector(".generate-meme-btn");
const memeImage = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-generator .meme-title");
const memeAuthor = document.querySelector(".meme-generator .meme-author");
const spinner = document.querySelector(".spinner");

// List of popular meme subreddits for variety
const subreddits = ["memes", "dankmemes", "me_irl", "wholesomememes", "funny", "AdviceAnimals", "MemeEconomy", "ComedyCemetery", "PrequelMemes", "terriblefacebookmemes"];

function getRandomSubreddit() {
    return subreddits[Math.floor(Math.random() * subreddits.length)];
}

// =================== UI UPDATE FUNCTIONS START ===================
function showSpinner() {
    spinner.style.display = "block";
    memeImage.style.display = "none";
}

function hideSpinner() {
    spinner.style.display = "none";
    memeImage.style.display = "block";
}

function setMemeDetails({ url, title, author }) {
    memeImage.alt = title || "A randomly generated meme";
    memeTitle.textContent = title || "Untitled Meme";
    memeAuthor.textContent = author ? `Meme by: ${author}` : "";
}
// =================== UI UPDATE FUNCTIONS END ===================

// =================== ERROR HANDLING START ===================
function showError() {
    memeTitle.textContent = "Oops! Failed to fetch meme.";
    memeAuthor.textContent = "Please try again later.";
    // Use a placeholder image or hide the image on error
    memeImage.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OTk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkVycm9yPC90ZXh0Pgo8L3N2Zz4K";
    memeImage.alt = "Error loading meme";
    hideSpinner();
}
// =================== ERROR HANDLING END ===================

// =================== MEME FETCH LOGIC START ===================
function fetchMeme() {
    showSpinner();
    memeTitle.textContent = "Loading...";
    memeAuthor.textContent = "";

    // Random subreddit for variety
    const subreddit = getRandomSubreddit();
    const cacheBuster = `?t=${Date.now()}`;

    // Updated API endpoint for Vercel
    fetch(`/gimme/${subreddit}${cacheBuster}`)
        .then((response) => {
            if (!response.ok) throw new Error("Network response was not ok");
            return response.json();
        })
        .then((data) => {
            // Check if the response contains an error
            if (data.error) {
                throw new Error(data.error);
            }

            memeImage.onload = () => {
                setMemeDetails(data);
                hideSpinner();
            };
            memeImage.onerror = showError;
            memeImage.src = data.url;
        })
        .catch((error) => {
            console.error('Error fetching meme:', error);
            showError();
        });
}
// =================== MEME FETCH LOGIC END ===================

generateMemeBtn.addEventListener("click", fetchMeme);

// Initial meme load
fetchMeme();
