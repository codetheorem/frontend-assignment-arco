import { Card, Avatar, Typography, Space } from '@arco-design/web-react';
import { IconThumbUp, IconShareInternal, IconMore } from '@arco-design/web-react/icon';
const { Meta } = Card;
import styles from './Card.module.css';
import Link from 'next/link'


export default function ProductCard ({product}){
    return (
        <Card
          className='card-with-icon-hover'
          style={{ width: 360 }}
          cover={
            <div style={{ height: 204, overflow: 'hidden' }}>
              <img
                style={{ width: '100%', transform: 'translateY(-20px)' }}
                alt='dessert'
                src={product.thumbnail}
              />
            </div>
          }
          actions={[
            <Link href={`/products/${product.id}`}>
              See more
            </Link>
          ]}
        >
          <Meta
            avatar={
              <Space>
                <Avatar size={24}>{product.brand.split('')[0]}</Avatar>
                <Typography.Text>{product.brand}</Typography.Text>
              </Space>
            }
            title={product.title}
            description={product.description}
          />
        </Card>
      );
}