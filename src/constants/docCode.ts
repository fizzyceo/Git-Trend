export const nodejsStars = `const axios = require("axios");

const options = {
    method: 'POST',
    url: 'https://git-trends-one.vercel.app/api/v1/gittrend/stars',
    data: {
      fromDate: '2023-06-01',
      min_stars:'2000',
      num_repositories: '100'
    },
    headers: {
      'Authorization': 'YOUR_API_KEY',
    }
  };
  
axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});`;
export const nodejsContributions = `const axios = require("axios");

const options = {
    method: 'POST',
    url: 'https://git-trends-one.vercel.app/api/v1/gittrend/contributions',
    data: {
        fromDate: '2023-06-01',
        num_repositories: '100'
    },
    headers: {
      'Authorization': 'YOUR_API_KEY',
    }
  };
  
axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});`;
export const nodejsForks = `const axios = require("axios");

const options = {
    method: 'POST',
    url: 'https://git-trends-one.vercel.app/api/v1/gittrend/forks',
    data: {
        fromDate: '2023-06-01',
        min_forks:'2000',
        num_repositories: '100'
    },
    headers: {
      'Authorization': 'YOUR_API_KEY',
    }
  };
  
axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});`;

export const pythonStars = `import requests

url = 'https://git-trends-one.vercel.app/api/v1/gittrend/stars'
api_key = 'YOUR_API_KEY'
fromDate= '2023-06-01'
min_stars='2000'
num_repositories= '100'

headers = {
    'Authorization': api_key
}

payload = {
    'fromDate': fromDate
    'min_stars':min_stars,
    'num_repositories': num_repositories
}

response = requests.post(url, headers=headers, json=payload)

if response.status_code == 200:
    data = response.json()
    print(data)
else:
    print(f'Request failed with status code {response.status_code}')`;
export const pythonContributions = `import requests

url = 'https://git-trends-one.vercel.app/api/v1/gittrend/contributions'
api_key = 'YOUR_API_KEY'
fromDate= '2023-06-01'
num_repositories= '100'

headers = {
    'Authorization': api_key
}

payload = {
    'fromDate': fromDate,
    'num_repositories': num_repositories
}

response = requests.post(url, headers=headers, json=payload)

if response.status_code == 200:
    data = response.json()
    print(data)
else:
    print(f'Request failed with status code {response.status_code}')`;
export const pythonForks = `import requests

url = 'https://git-trends-one.vercel.app/api/v1/gittrend/forks'
api_key = 'YOUR_API_KEY'
fromDate= '2023-06-01'
min_forks='2000'
num_repositories='100'


headers = {
    'Authorization': api_key
}

payload = {
    'fromDate': fromDate,
    'min_stars':min_stars,
    'num_repositories': num_repositories
}

response = requests.post(url, headers=headers, json=payload)

if response.status_code == 200:
    data = response.json()
    print(data)
else:
    print(f'Request failed with status code {response.status_code}')`;
