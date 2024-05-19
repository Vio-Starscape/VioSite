import './main.css';

function PageDesktopOnly() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <h1 className="text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl">This Page can only be accessed on Desktop!</h1>
        </div>
    );
}

export default PageDesktopOnly;