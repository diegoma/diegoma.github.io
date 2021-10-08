import { getPostsMetaData } from '../../lib/getPostsData.js';
import Link from 'next/link';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'

export default function Blog({ postsData }) {
  return (
    <Container fluid>
      <Row>
        <Col sm={{ span: 8, offset: 1 }}>
          {
            postsData.map((metadata) => {
              return (
                <div key={metadata.id}>
                  <Link href={`/blog/${metadata.id}`} key={metadata.title} >
                    <a className='post-title'>{metadata.title}</a>
                  </Link>
                  <p className='post-description'>{metadata.description}</p>
                </div>
              )
            })
          }
        </Col>
      </Row>
    </Container>
  )
};

export async function getStaticProps() {
  const postsData = getPostsMetaData();

  return {
    props: {
      postsData: postsData,
    }
  }
}