import '../css/main.css';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);
const onSearch = value => console.log(value);
const Searchbox = () => (
  <Space direction="vertical">
    <div className="searchbox">
      <Search placeholder="input search text" onSearch={onSearch} enterButton />
    </div>
  </Space>
);
export default Searchbox;
