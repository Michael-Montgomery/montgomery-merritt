export default async function getSpotifyToken() {
    const rawResponse = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
        //   'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify({
            grant_type: 'client_credentials',
            client_id: 'fd10025079e243c7931cade98f7bb423',
            client_secret: '6d71823689c44addbdd2fe9a3f1f9657'
        })
      });
      const content = await rawResponse.json();
      return content;
}