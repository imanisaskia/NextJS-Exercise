import React from 'react';
import Head from 'next/head'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  pinkText: {
    color: 'pink'
  }
});

export default function Home() {
  const classes = useStyles();

  const myname = {
    fullname: "Saskia Imani",
    nickname: "Saskia"
  }

  const [name, setName] = React.useState(myname.fullname);

  function changeName() {
    if (name == myname.fullname) {
      setName(myname.nickname)
    } else {
      setName(myname.fullname)
    }
  }

  return (
    <div>
      <Head>
        <title>About Me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box className="main">
        <Box className="centered">
          <Typography variant="h2" className={classes.pinkText} gutterBottom>{name}</Typography>
          <Typography variant="h5" gutterBottom>imani.saskia@gmail.com</Typography>
          <Button onClick={(e) => changeName()}>Toggle Name</Button>
        </Box>
      </Box>
    </div>
  )
}