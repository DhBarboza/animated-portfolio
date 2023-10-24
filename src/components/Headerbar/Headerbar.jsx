import "./StyleHeaderbar.scss";

function Headerbar() {
    return (
        <div className="navbar">
            {/*Sidebar*/}
            <div className="wrapper">
                <span>Douglas Dev</span>
                <div className="social">
                    <a href="#">
                        <img src="./facebook.png" alt="" />
                    </a>
                    <a href="#">
                        <img src="./instagram.png" alt="" />
                    </a>
                    <a href="#">
                        <img src="./youtube.png" alt="" />
                    </a>
                    <a href="#">
                        <img src="./linkedin.png" alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Headerbar;
