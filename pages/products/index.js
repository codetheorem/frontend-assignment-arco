import { Typography } from "@arco-design/web-react";
import styles from "../../styles/Products.module.css";
import ProductCard from "../../components/Card";
import CardGrid from "../../components/CardGrid";
import { Pagination } from '@arco-design/web-react';
import { useRouter } from "next/router"

export default function Products({data}) {

  const router = useRouter()


  const pageChange = (pageNumber,pageSize) => {

    const path = router.pathname
    const query = router.query
    query.page = pageNumber
    router.push({
      pathname: path,
      query: query,
    })

  }

  return (
    <div className={styles.container}>
      <Typography.Title bold>Latest Products</Typography.Title>
      <CardGrid products={data.products} />
      <div className={styles.pagination}>
       <Pagination total={data.total} pageSize={data.limit} onChange={pageChange} />
      </div>
    </div>
  );
}

export async function getServerSideProps({query}) {

  const page = query.page || 1
  const res = await fetch(`https://dummyjson.com/products?limit=10&skip=${(page-1)*10}`);
  const data = await res.json()
  return { props: { data } }
}