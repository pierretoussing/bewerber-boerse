export async function fetchData(params = {}) {
  const baseUrl =
    'https://rest.arbeitsagentur.de/jobboerse/bewerbersuche-service/pc/v1/bewerber';

  const url = new URL(baseUrl);
  Object.keys(params).forEach((key) => {
    if (params[key] !== '') {
      url.searchParams.append(key, params[key]);
    }
  });

  const accessToken = await getAccessToken();

  return fetch(url, {
    headers: {
      OAuthAccessToken: accessToken,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      return response.json();
    })
    .catch((error) => {
      console.error(error);
    });
}

async function getAccessToken() {
  const clientId = '919b0af7-6e5f-4542-a7f5-04268b8bae2e';
  const clientSecret = '93fce94c-5be2-4dc8-b040-c62818a4b003';
  const grantType = 'client_credentials';
  const tokenEndpoint = 'https://rest.arbeitsagentur.de/oauth/gettoken_cc';

  const response = await fetch(tokenEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: grantType,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to obtain access token');
  }

  const data = await response.json();
  return data.access_token;
}
