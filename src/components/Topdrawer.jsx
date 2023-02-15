import { Button, Drawer, Radio, Space } from 'antd';
import { useState } from 'react';
import Searchbox from './Searchbox';

const Topdrawer = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('left');
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onChange = e => {
    setPlacement(e.target.value);
  };
  return (
    <>
      <Space>
        <Button type="primary" onClick={showDrawer}>
          Open
        </Button>
      </Space>
      <Drawer
        title="Basic Drawer"
        placement="top"
        closable={false}
        onClose={onClose}
        open={open}
        key="top"
      >
        <div className="dropdownsearchbox">
          <Searchbox />
        </div>
      </Drawer>
    </>
  );
};
export default Topdrawer;
