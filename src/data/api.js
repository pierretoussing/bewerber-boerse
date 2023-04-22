
export async function fetchBewerber(params = {}) {
    const url = new URL('https://rest.arbeitsagentur.de/jobboerse/bewerbersuche-service/pc/v1/bewerber');
  
    Object.keys(params).forEach(key => { if (params[key] !== "") {
        url.searchParams.append(key, params[key])
    }
    })
  
    return fetch(url)
      .then(response => response.json())
      .then(response => response.bewerber)
      .catch(error => {
        console.error(error);
      });
    }
  
  
  