import '../css/main.css';
import { Button, Drawer } from 'antd';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

function Drawercomponent(params) {
  const [visible, setVisible] = useState(false);
  return (
    <div className="Drawercomponent">
      <Button
        className="searchButton"
        onClick={() => {
          setVisible(true);
        }}
      >
        <FaSearch />
      </Button>
      <Drawer
        visible={visible}
        placement="top"
        closable={false}
        onClose={() => {
          setVisible(false);
        }}
      ></Drawer>
    </div>
  );
}

export default Drawercomponent;
