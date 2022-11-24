import { Grid, Divider } from '@arco-design/web-react';
import ProductCard from '../Card';
const Row = Grid.Row;
const Col = Grid.Col;

export default function CardGrid ({products}){
return(<div>
    <Row className='grid-gutter-demo' gutter={[20]}>

       {products.map((product) => {
          return ( 
          <Col span={6} key={product.id}>
            <div><ProductCard product={product} /></div>
          </Col>);
        })}
      </Row>
</div>);
}