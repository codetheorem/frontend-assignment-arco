import { Carousel } from '@arco-design/web-react';
import styles from "../../styles/Products.module.css";
import { Rate } from '@arco-design/web-react';


export default function Product({data}){
    return(
        <div className={styles.container2}>
    <div>
    <Carousel
      style={{ width: 1000, height: 500 }}
      autoPlay={true}
      indicatorType='dot'
      showArrow='hover'
    >
      {data.images.map((src, index) => (
        <div key={index}>
          <img
            src={src}
            style={{ width: '100%' }}
          />
        </div>
      ))}
    </Carousel>
    </div>
    <div style={{marginLeft: '20px'}}>
       <h1>{data.title}</h1>
       <div>
        <h4>{data.description}</h4>
       </div>
       <div>
        <h4>Price ${data.price}</h4>
       </div>
       <div>
       <Rate allowHalf defaultValue={data.rating} />
       </div>
    </div>
        </div>
    );
}

export async function getServerSideProps({query}) {

    const id = query.id
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await res.json()
    return { props: { data } }
  }