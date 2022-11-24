import { Menu } from '@arco-design/web-react';
import { Typography } from '@arco-design/web-react';
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
import styles from  './Header.module.css';
import Link from 'next/link';

export default function Header(){
    return(
        <div className={styles.menudemo}>
      <Menu mode='horizontal' defaultSelectedKeys={['1']}>
        <MenuItem
          key='0'
          style={{ padding: 0, marginRight: 38, }}
          disabled
        >
          <Typography>
          <Typography.Title heading={4}>Marketing</Typography.Title>
          </Typography>
        </MenuItem>
        <Link href="/"><MenuItem key='1'>Home</MenuItem></Link>
        <Link href="/products"><MenuItem key='2'>Products</MenuItem></Link>
      </Menu>
    </div>
    );
}