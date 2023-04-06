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
	: 'https://edm-antivirus-bucket.s3.ap-southeast-1.amazonaws.com/images';

export function EmailTemplate() {

	return (
		<Html lang="en">
			<Tailwind>
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

				{/* top header */}
				<Container style={container}>
					<Section style={box}>
						<Img
							src={`${baseUrl}/Footer_Logo.png`}
							alt="logo"
						/>
					</Section>
				</Container>

				{/* section 1 */}
				<Container style={container}>
					<Section className="p-5 bg-white">
						<Column className="p-5 table-row sm:table-cell" align='center'>
							<Img
								// src={`../static/P2_S1_Main.png`}
								src={`${baseUrl}/P2_S1_Main.png`}
								width={200}
								height={160}
								alt="codepen"
							/>
						</Column>

						<Column className="p-5 table-row sm:table-cell text-center sm:text-left">
							<h1>Get your password game strong</h1>
							<p>Keeping your passwords secure is imperative because they're the first line of defense against cybercriminals. Many people struggle to keep their passwords safe, and one of the biggest mistakes is not using a strong password.</p>
							<p>Let’s learn to understand more.</p>
						</Column>
					</Section>
				</Container>

				{/* section 2 */}
				<Container style={container}>
					<Section className="p-5 bg-[#E9EDF0]">

						<Column className="p-5 table-row sm:table-cell w-full sm:w-1/2" align='center'>
							<Heading as="h2" className="text-2xl">Passwords are keys to your digital life</Heading>
							<Img
								// src={`../static/P2_S1_Main.png`}
								src={`${baseUrl}/P2_S1_Main.png`}
								width={200}
								height={160}
								alt="codepen"
							/>
						</Column>

						<Column className="p-5 table-row sm:table-cell text-center sm:text-left w-full sm:w-1/2">
							{/* list */}
							<ul className="list-disc list-inside">
								<li style={list}>
									<Img
										// src={`../static/P2_S1_Main.png`}
										src={`${baseUrl}/P2_S2_Main.png`}
										width={50}
										height={50}
										alt="codepen"
										className='md:mx-auto'
									/>
									<Text>Online banking</Text>
								</li>
								<li>Online shopping</li>
								<li>Online gaming</li>
							</ul>

						</Column>

					</Section>
				</Container>

				{/* section 3 */}
				<Container style={container}>
					<Section className="p-5 bg-[#CF1B58]">
						<Column className="p-5 table-row sm:table-cell" align='center'>
							<Img
								// src={`../static/P2_S1_Main.png`}
								src={`${baseUrl}/P2_S1_Main.png`}
								width={200}
								height={160}
								alt="codepen"
							/>
						</Column>

						<Column className="p-5 table-row sm:table-cell text-center sm:text-left">
							<h1>Get your password game strong</h1>
							<p>Keeping your passwords secure is imperative because they're the first line of defense against cybercriminals. Many people struggle to keep their passwords safe, and one of the biggest mistakes is not using a strong password.</p>
							<p>Let’s learn to understand more.</p>
						</Column>
					</Section>
				</Container>

			</Tailwind>
		</Html >
	);
}

export default EmailTemplate;

const container = {
	backgroundColor: 'white',
};

const box = {
	backgroundColor: '#0294A3',
	padding: '28px',
};

const list = {
	display: '-webkit-inline-box',
};