import { useParams } from 'react-router-dom';

const LandingPageEditor = () => {
    const { id } = useParams();

    return (
        <div style={{ padding: 24 }}>
            <h1>Редактор страницы #{id}</h1>
        </div>
    );
};

export default LandingPageEditor;