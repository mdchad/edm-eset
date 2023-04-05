import { Html } from '@react-email/html';
import { Head } from '@react-email/head'
import { Button } from '@react-email/button'
import { Column } from '@react-email/column'
import { Container } from '@react-email/container'
import { Font } from '@react-email/font'
import { Heading } from '@react-email/heading'
import { Hr } from '@react-email/hr'
import { Img } from '@react-email/img'
import { Link } from '@react-email/link'
import { Preview } from '@react-email/preview'
import { Section } from '@react-email/section'
import { Tailwind } from '@react-email/tailwind'
import { Text } from '@react-email/text'

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

export function EmailTemplate() {

  return (
    <Html lang="en">
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: '#007291',
              },
            },
          },
        }}
      >
        <Head>
          <Font
            fontFamily="Roboto"
            fallbackFontFamily="Verdana"
            webFont={{
              url: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
              format: 'woff2',
            }}
            fontWeight={400}
            fontStyle="normal"
          />
        </Head>

        <Container>
          <Section style={box} className="p-4">
            <Img
              src={`${baseUrl}/static/Footer_Logo.png`}
              alt="logo"
            />
          </Section>
        </Container>

        <Container className='bg-white hidden sm:block'>
          <Section className="p-3">
            <Column className="p-5 sm:w-2/2 w-1/2">
              <Img
                // src={`../static/P2_S1_Main.png`}
                src={`${baseUrl}/static/P2_S1_Main.png`}
                width={200}
                height={160}
                alt="codepen"
              />
            </Column>

            <Column className="p-5 sm:w-2/2 w-1/2">
              <h1>Get your password game strong</h1>
              <p>Keeping your passwords secure is imperative because they're the first line of defense against cybercriminals. Many people struggle to keep their passwords safe, and one of the biggest mistakes is not using a strong password.</p>
              <p>Let’s learn to understand more.</p>
            </Column>
          </Section>
        </Container>

        <Container className='bg-white sm:hidden'>
          <Section className="p-5">
            <Img
              // src={`../static/P2_S1_Main.png`}
              src={`${baseUrl}/static/P2_S1_Main.png`}
              width={200}
              height={160}
              alt="codepen"
            />
          </Section>

          <Section className="p-5">
            <h1>Get your password game strong</h1>
            <p>Keeping your passwords secure is imperative because they're the first line of defense against cybercriminals. Many people struggle to keep their passwords safe, and one of the biggest mistakes is not using a strong password.</p>
            <p>Let’s learn to understand more.</p>
          </Section>
        </Container>


        <Container className="bg-red-500 sm:bg-green-500">
          <Column className="p-5 sm:inline-block">
            <Img
              // src={`../static/P2_S1_Main.png`}
              src={`${baseUrl}/static/P2_S1_Main.png`}
              width={200}
              height={160}
              alt="codepen"
            />
          </Column>

          <Column className="p-5 sm:inline-block">
            <h1>Get your password game strong</h1>
            <p>Keeping your passwords secure is imperative because they're the first line of defense against cybercriminals. Many people struggle to keep their passwords safe, and one of the biggest mistakes is not using a strong password.</p>
            <p>Let’s learn to understand more.</p>
          </Column>
        </Container>


      </Tailwind>
    </Html>
  );
}

export default EmailTemplate;

const container = {
  margin: '0 auto',
};

const box = {
  backgroundColor: '#0294A3',
  // padding: '0 48px',
};