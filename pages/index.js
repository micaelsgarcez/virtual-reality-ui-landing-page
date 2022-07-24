import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Virtual Reality UI</title>
        <meta name='description' content='Virtual Reality UI' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1 className='text-3xl font-bold underline'>Hello world!</h1>
      </main>

      <footer></footer>
    </div>
  )
}
