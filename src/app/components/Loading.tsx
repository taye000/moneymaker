import { ClipLoader } from 'react-spinners';
import { LoaderWrapper } from '../styled';
import { theme } from '../theme';

const Loader: React.FC = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <ClipLoader color={theme.colors.primary} loading={true} size={60} />
        </div>
    );
};

export default Loader;
