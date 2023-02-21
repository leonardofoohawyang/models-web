import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useCallback } from "react";


const Header = () => {
    const navigate = useNavigate();
    const onAtmosphericModelsClick = useCallback(() => {
        navigate("/");
    }, [navigate]);

    return (
        <div
            style={{
                marginTop: "3%",
                display: "flex",
                width: "100%",
                justifyContent: "space-evenly",
            }}
        >
            
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", cursor: "pointer" }} onClick={onAtmosphericModelsClick}><b>Atmospheric Models</b></div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "500", fontSize: "19px", color: "#000"}}>Introduction</div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "500", fontSize: "19px", color: "#000"}}>About</div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "500", fontSize: "19px", color: "#000"}}>Documentations</div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "500", fontSize: "19px", color: "#000"}}>References</div>

            <Button
                variant="outlined"
                color="primary"
            >
                Run Models
            </Button>
        </div>
    )
}

export default Header;