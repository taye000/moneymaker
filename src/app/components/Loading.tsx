import { ClipLoader } from 'react-spinners';

const Loader: React.FC = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <ClipLoader color="#3498db" loading={true} size={60} />
        </div>
    );
};

export default Loader;
