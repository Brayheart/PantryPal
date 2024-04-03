import 'dotenv/config';

const google_secret = process.env.GOOGLE_SECRET;
const google_ID = process.env.GOOGLE_ID;
const google_redirect = process.env.GOOGLE_REDIRECT;

async function tokenClient(code) {
    const url = "https://accounts.google.com/o/oauth2/token";
    const body = "code=" + code + "&redirect_uri=" + google_redirect + "&client_id=" + 
    google_ID + "&client_secret=" + google_secret +
    "&scope=&grant_type=authorization_code";

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": 'application/x-www-form-urlencoded'
        },
        body: body
    });

    return response.json();
}

export default tokenClient;