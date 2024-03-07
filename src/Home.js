import { Button  } from 'antd';
import { useNavigate} from 'react-router-dom';

const Home = () => {
  const navigator = useNavigate();
  return (
    <Button onClick={() => navigator('/test')}>Edit</Button>
  );
}

export  default Home;