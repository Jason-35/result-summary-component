const fetchDataFromJson = async () => {
    try {
      const response = await fetch('./data.json');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching and parsing JSON:', error);
      return null; // or handle the error in another way
    }
  };
  
  // Store the function in a variable outside
  const getDataFunction = fetchDataFromJson;
  
  let k;
  // Now you can use getDataFunction wherever you need to fetch and get data
  getDataFunction().then(data => {
    // Now you have the data, you can do something with it
    console.log(data);
    k = data
});

console.log(k)