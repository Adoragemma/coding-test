import SalesDetails from './_components/SalesDetails'
export default function Page({ params }) {
  const { id } = params
  return <SalesDetails salesId={id} />
}
