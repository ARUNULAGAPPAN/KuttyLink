// --- Element Selection ---
const shortenBtn = document.getElementById('shorten-btn');
const longUrlInput = document.getElementById('long-url-input');
const resultContainer = document.getElementById('result');
const shortUrlInput = document.getElementById('short-url-input');
const copyBtn = document.getElementById('copy-btn');

// --- Star Trail Cursor Effect (Keep this code exactly as it was) ---
const trailCount = 20;
const trails = [];
let trailIndex = 0;
for (let i = 0; i < trailCount; i++) {
    const trail = document.createElement('div');
    trail.className = 'trail';
    document.body.appendChild(trail);
    trails.push(trail);
}
window.addEventListener('mousemove', (e) => {
    const currentTrail = trails[trailIndex];
    currentTrail.style.left = `${e.clientX}px`;
    currentTrail.style.top = `${e.clientY}px`;
    currentTrail.style.animation = 'none';
    currentTrail.offsetHeight;
    currentTrail.style.animation = 'fadeOut 0.7s linear forwards';
    trailIndex = (trailIndex + 1) % trailCount;
});


// --- URL Shortener Logic (THIS IS THE MODIFIED PART) ---
shortenBtn.addEventListener('click', async () => {
    const longUrl = longUrlInput.value;

    if (!longUrl) {
        alert('Please enter a URL.');
        return;
    }

    try {
        shortenBtn.textContent = 'Shortening...';
        shortenBtn.disabled = true;

        // Call OUR OWN backend API
        const response = await fetch('/api/shorten', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ longUrl: longUrl }),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || 'Failed to shorten URL.');
        }
        
        // Display the result from our server
        shortUrlInput.value = data.shortUrl;
        resultContainer.classList.add('show');

    } catch (error) {
        alert(error.message);
    } finally {
        shortenBtn.textContent = 'Get Short Link';
        shortenBtn.disabled = false;
    }
});


// --- Copy Button Logic (Keep this code exactly as it was) ---
copyBtn.addEventListener('click', () => {
    shortUrlInput.select();
    shortUrlInput.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(shortUrlInput.value)
        .then(() => {
            copyBtn.textContent = 'Copied!';
            setTimeout(() => {
                copyBtn.textContent = 'Copy';
            }, 2000);
        })
        .catch(err => {
            alert('Failed to copy link.');
            console.error('Copy failed:', err);
        });
});