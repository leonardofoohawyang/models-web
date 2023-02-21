import Header from "./Header";
import CsswmVideo from "./csswmVideo";

const CSSWM = () => {
    return (
        <div
            style={{
                position: "absolute",
                backgroundImage: "url('home-page@3x.png')",
                backgroundSize: "100%",
                width: "100%",
                height: "23%",
                fontSize: "24px",
                color: "#002b80",
                fontFamily: "Inter",
            }}
        >
            <Header />

            <b
                style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "2%",
                    fontSize: "200%",
                    lineHeight: "100%",
                    color: "#000",
                    marginBottom: "2%"
                }}
            >
                    Cubed Sphere Shallow Water Model
            </b>

            <div 
                style={{
                    top: "100%",
                    position: "absolute",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {/* <DisplayPage /> */}
                {<CsswmVideo />}
                
                <b
                    style={{
                        fontSize: "15px",
                        lineHeight: "20px",
                        display: "inline-block",
                        color: "#b0b0b0",
                        width: "80%",
                        marginBottom: "5%",
                        marginTop: "3%"
                    }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.
                </b>
                
            </div>
        </div>
    );
};

export default CSSWM;
