import React from 'react';
import Head from 'next/head'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default function Home() {
  const API_KEY = '31c3b31c04daa6353c5c1afa46bd2eb4'
  const cities = {
    'Jakarta': '1642911',
    'Bandung': '1650357',
    'Yogyakarta': '1621177'
  }
  const [cityID, setCityID] = React.useState('');
  const [weatherData, setWeatherData] = React.useState(undefined);
  const dummyData = {
    weather: [{main: '-', description: '-'}],
    main: {temp: 273.15}
  }

  const WeatherWidget = (data) => {
    if (data == undefined) {
      data = dummyData;
    }
    var temp = Math.round((data.main.temp-273.15)*100)/100;;
    return (
      <>
        <Typography variant="h3" gutterBottom>{data.weather[0].main}</Typography>
        <Typography variant="h6">{data.weather[0].description}</Typography>
        <Typography variant="h6">{temp}&deg;C</Typography>
      </>
    )
  }

  async function fetchData(city_id) {
    const data = await fetch(`http://api.openweathermap.org/data/2.5/weather?id=${city_id}&appid=${API_KEY}`)
      .then( res => res.json())
      .then(data => data)
    setWeatherData(data);
    console.log(data)
  }

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCityID(event.target.value);
    //fetchData(cities[event.target.value])
  };

  function genMenuItems() {
    return Object.keys(cities).map((key) => {
      return <MenuItem value={key}>{key}</MenuItem>;
    });
  };

  return (
    <div>
      <Head>
        <title>Weather</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box className="main">
        <Box className="centered">
          <FormControl id="form">
            <InputLabel id="select-label">City</InputLabel>
            <Select
              labelId="select-label"
              id="select"
              value={cityID}
              onChange={handleChange}
              label="City"
            >
              {genMenuItems()}
            </Select>
          </FormControl>
          {WeatherWidget(weatherData)}
        </Box>
      </Box>
    </div>
  )
}