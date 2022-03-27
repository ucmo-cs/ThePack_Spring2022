import Wuphf from '../components/Wuphf'
import Wuphfs from '../components/Wuphfs'
import WuphfInput from '../components/WuphfInput'
import tempPosts from '../assets/tempPosts'
import Link from 'next/link'
import Paragraph from './styledComponents/Paragraph'

function Timeline() {
	return (
		<>
			<Paragraph>
				<Link href='/register'>CLICK: Username/Animal Selection Page</Link>
			</Paragraph>

			<WuphfInput />

			<Wuphf
				username='John Doe'
				avatar='sample.jpg'
				post='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.'
			/>

			<Wuphfs posts={tempPosts} />
		</>
	)
}

export default Timeline
