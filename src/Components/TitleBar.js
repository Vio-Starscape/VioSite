import { useNavigate } from 'react-router-dom';

function TitleBar({ Title }) {
    const history = useNavigate();

    return (
        <div className="sticky top-0 bg-white z-50 text-center rounded-b-3xl shadow-md p-1 flex justify-between items-center px-1/2">
            <button onClick={() => history(-1)} className="ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <h1 className="text-5xl font-anta">{Title}</h1>
            <div></div>
        </div>
    );
}

export default TitleBar;