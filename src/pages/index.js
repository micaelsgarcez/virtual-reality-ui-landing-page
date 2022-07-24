import Head from 'next/head'
import Image from 'next/image'

import { Container, Button, CardOne } from 'components'
import { Links } from 'data'
import { ArrowRight, Idea, PeopleVr } from 'svg'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Virtual Reality UI</title>
        <meta name='description' content='Virtual Reality UI' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <header className='bg-accent2'>
          <div className='bg-white'>
            <Container>
              <div className='flex items-center justify-between'>
                <div className='logo w-full max-w-[102px]'>
                  <Image
                    src='/img/logo.svg'
                    alt='Logo Agon'
                    layout='responsive'
                    width='102'
                    height='43'
                  />
                </div>
                <nav>
                  <ul className='flex items-center'>
                    {Links.map((link, index, array) => (
                      <li
                        className={`${
                          index === array.length - 1 ? '' : 'mr-14'
                        }`}
                        key={link.label}
                      >
                        <a
                          className={`block font-medium py-7 ${
                            index === 0
                              ? 'text-accent border-b-2 border-accent'
                              : ''
                          }`}
                          href={link.href}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div>
                  <Button href='#' text='Get Started' />
                </div>
              </div>
            </Container>
          </div>
          <Container>
            <div className='flex items-center'>
              <div className='w-1/2'>
                <h1 className='text-5xl font-semibold mb-2'>
                  Building the Work{' '}
                  <span className='text-accent'>Ecosystem</span>
                </h1>
                <p className='merriweather text-accent1 mb-6'>
                  Connect your conversations with the tools and services that
                  you use to get the job done. With over 1,500 apps and a robust
                  API
                </p>
                <div className='flex items-center gap-7 mb-9'>
                  <Button
                    href='#'
                    text={
                      <span className='flex items-center gap-2'>
                        Get Started <ArrowRight color='#fff' />
                      </span>
                    }
                  />
                  <Button
                    href='#'
                    colorClass='text-dark'
                    bgClass='bg-accent2'
                    text={
                      <span className='flex items-center gap-2'>
                        How it works <ArrowRight />
                      </span>
                    }
                  />
                </div>
                <div className='flex items-center gap-14'>
                  <CardOne
                    icon={<Idea />}
                    textNumber='+12k'
                    text='Projects done'
                  />
                  <CardOne
                    icon={<PeopleVr />}
                    textNumber='68k'
                    text='Customers'
                  />
                </div>
              </div>
              <div className='w-1/2'>
                <div className='mb-[-72px] mt-[42px]'>
                  <Image
                    src='/img/hero-image.png'
                    alt='Pessoa com VR'
                    layout='responsive'
                    width={582}
                    height={670}
                  />
                </div>
              </div>
            </div>
          </Container>
        </header>
      </main>

      <footer></footer>
    </div>
  )
}
