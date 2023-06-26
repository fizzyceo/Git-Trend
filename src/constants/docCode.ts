export const nodejsStars = `const axios = require("axios");

const options = {
    method: 'POST',
    url: 'https://gittrendapi.com/api/v1/gittrend/stars',
    data: {
      text1: 'First text',
      text2: 'Second text'
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
    url: 'https://gittrendapi.com/api/v1/gittrend/contributions',
    data: {
      text1: 'First text',
      text2: 'Second text'
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
    url: 'https://gittrendapi.com/api/v1/gittrend/forks',
    data: {
      text1: 'First text',
      text2: 'Second text'
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

url = 'https://gittrendapi.com/api/v1/gittrend/stars'
api_key = 'YOUR_API_KEY'
text1 = 'First text'
text2 = 'Second text'

headers = {
    'Authorization': api_key
}

payload = {
    'text1': text1,
    'text2': text2
}

response = requests.post(url, headers=headers, json=payload)

if response.status_code == 200:
    data = response.json()
    print(data)
else:
    print(f'Request failed with status code {response.status_code}')`;
export const pythonContributions = `import requests

url = 'https://gittrendapi.com/api/v1/gittrend/contributions'
api_key = 'YOUR_API_KEY'
text1 = 'First text'
text2 = 'Second text'

headers = {
    'Authorization': api_key
}

payload = {
    'text1': text1,
    'text2': text2
}

response = requests.post(url, headers=headers, json=payload)

if response.status_code == 200:
    data = response.json()
    print(data)
else:
    print(f'Request failed with status code {response.status_code}')`;
export const pythonForks = `import requests

url = 'https://gittrendapi.com/api/v1/gittrend/forks'
api_key = 'YOUR_API_KEY'
text1 = 'First text'
text2 = 'Second text'

headers = {
    'Authorization': api_key
}

payload = {
    'text1': text1,
    'text2': text2
}

response = requests.post(url, headers=headers, json=payload)

if response.status_code == 200:
    data = response.json()
    print(data)
else:
    print(f'Request failed with status code {response.status_code}')`;
