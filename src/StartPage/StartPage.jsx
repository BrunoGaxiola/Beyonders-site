import "./StartPage.css"

const StartPage = () => {
    return(
        <>
            <div className="startPageContainer">
                <div className="background">
                    <div className="allText">
                        <p className="title"> Beyonders </p>
                        <p className="desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <button className="start"> Let's Get Started! </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StartPage;