import { GetStaticProps, GetStaticPaths } from 'next'

import { Card } from '../../../interfaces'
import { sampleCardData } from '../../../utils/sample-data'
import CardLayout from '../../../components/CardLayout'
import Layout from '../../../components/Layout'
import CardView from '../../../components/CardView'

type Props = {
  item?: Card
  errors?: string
}

const StaticCard = ({ item, errors }: Props) => {
  if (errors) {
    return (
      <Layout title="Error">
        <p>
          <span style={{ color: 'red' }}>Error:</span> {errors}
        </p>
      </Layout>
    )
  }

  return (
    <CardLayout
      title={`${ item ? item.title : 'No Title.' }`}
    >
      {item && <CardView item={item} />}
    </CardLayout>
  )
}

export default StaticCard

export const getStaticPaths: GetStaticPaths = async () => {
  // この処理により、build時に全cardのhtmlが生成される？
  const paths = sampleCardData.map((card) => ({
    params: { cid: card.cid.toString() },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const cid = params?.cid
    const item = sampleCardData.find((data) => data.cid === Number(cid))
    // By returning { props: item }, the StaticPropsDetail component
    // will receive `item` as a prop at build time
    return { props: { item } }
  } catch (err) {
    return { props: { errors: err.message } }
  }
}