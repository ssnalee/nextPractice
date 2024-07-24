import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function Detail({params}) {
  const router = useRouter();
  const [title, id] = params || [];
  return (
  <>
    <Seo title={title} />
    <p>{title || "Loading..."} </p>
  </>
)
}

export async function getServerSideProps({ params: { params } }) {
  return {
    props: { params },
  };
}
