import Head from 'next/head'
import Link from 'next/link'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box className="main">
        <Box className="centered">
          <Link href="/about-me"><Button>About Me</Button></Link>
          <Link href="/weather"><Button>Weather</Button></Link>
        </Box>
      </Box>
    </div>
  )
}