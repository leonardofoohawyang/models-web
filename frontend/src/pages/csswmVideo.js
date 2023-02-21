import { useState } from "react";
import { CardMedia } from "@mui/material";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

const CsswmVideo = () => {
    const [videoSrc, setVideoSrc] = useState('../Barotropic/180/sphere_cartopy/zeta.mov');
    const [videoSrcWithAlpha, setVideoSrcWithAlpha] = useState('../Cosine Ball/180/0/sphere_cartopy/h+wind.mov');

    const [img1Src, set1ImgSrc] = useState('../grid/longitudeOnCube.png');
    const [img2Src, set2ImgSrc] = useState('../grid/latitudeOnCube.png');
    const [coordinate, setCoordinate] = useState("lonlat");
    const handleChangeImg = (event) => {
        let newValue = event.target.value;
        setCoordinate(newValue);
        set1ImgSrc((cur) => {
            if (newValue === "lonlat") {
                let tmp = cur.split('/');
                tmp[2] = "longitudeOnCube.png";
                return tmp.join('/');
            }
            if (newValue === "xy") {
                let tmp = cur.split('/');
                tmp[2] = "xOnCube.png";
                return tmp.join('/');
            }
        })
        set2ImgSrc((cur) => {
            if (newValue === "lonlat") {
                let tmp = cur.split('/');
                tmp[2] = "latitudeOnCube.png";
                return tmp.join('/');
            }
            if (newValue === "xy") {
                let tmp = cur.split('/');
                tmp[2] = "yOnCube.png";
                return tmp.join('/');
            }
        })
    }


    const [chooseCase, setCase] = useState('Barotropic');
    const handleChangeCase = (event, newValue) => {
        setCase(newValue);
        let tmp = {target: {value: "h+wind"}}
        handleChangeVar(tmp) // to avoid error because there is no zeta in other case
        setVideoSrc((cur) => {
            let tmp = cur.split('/');
            tmp[1] = newValue;
            return tmp.join('/');
        });
        setVideoSrcWithAlpha((cur) => {
            let tmp = cur.split('/');
            tmp[1] = newValue;
            return tmp.join('/');
        });
    };

    const [resolution, setResolution] = useState('180');
    const handleChangeRes = (event) => {
        let newValue = event.target.value;
        setResolution(newValue);
        setVideoSrc((cur) => {
            let tmp = cur.split('/');
            tmp[2] = newValue;
            return tmp.join('/');
        });
        setVideoSrcWithAlpha(() => {
            let out = videoSrcWithAlpha.split('/');
            out[2] = newValue;
            return out.join('/')
        });
    };

    const [projection, setProjection] = useState('sphere_cartopy');
    const handleChangeProjection = (event) => {
        let newValue = event.target.value;
        setProjection(newValue);
        setVideoSrc((cur) => {
            let tmp = cur.split('/');
            tmp[3] = newValue;
            return tmp.join('/');
        });
        setVideoSrcWithAlpha(() => {
            let out = videoSrcWithAlpha.split('/');
            out[4] = newValue;
            return out.join('/')
        });
        
    };

    const [alpha, setAlpha] = useState('0');
    const handleChangeAlpha = (event) => {
        let newValue = event.target.value;
        setAlpha(newValue);
        setVideoSrcWithAlpha(() => {
            let out = videoSrcWithAlpha.split('/');
            out[3] = newValue;
            return out.join('/')
        });
    };

    const [variable, setVariable] = useState('zeta');
    const handleChangeVar = (event) => {
        let newValue = event.target.value;
        setVariable(newValue);
        setVideoSrc((cur) => {
            let tmp = cur.split('/');
            tmp[4] = newValue + ".mov";
            return tmp.join('/');
        });
        setVideoSrcWithAlpha(() => {
            let out = videoSrcWithAlpha.split('/');
            out[5] = newValue + ".mov";
            return out.join('/')
        });
    };

    const VideoCard = (src) => {
        console.log(src)
        return (
            <CardMedia
                component="video"
                style={{height: "700px"}}
                autoPlay 
                controls 
                src={src}
            />
        )
    }

    const ImageCard = (src, src2) => {
        console.log(src)
        return (
            <div style={{display: "flex", flexWrap: "wrap"}}>
                <CardMedia
                    component="img"
                    style={{width: "50%"}}
                    autoPlay 
                    controls 
                    src={src}
                />
                <CardMedia
                    component="img"
                    style={{width: "50%"}}
                    autoPlay 
                    controls 
                    src={src2}
                />
            </div>
        )
    }

    const controlResProp = (item) => ({
        checked: resolution === item,
        onChange: handleChangeRes,
        value: item,
    });
    const resolutionRadio = () => {
        return (
            <FormControl>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    style={{display: "flex", justifyContent: "flex-start"}}
                >
                    
                    <p>Resolution  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p>
                    <FormControlLabel value="180" control={<Radio {...controlResProp('180')}/>} label="6 x 180 x 180" />
                    <FormControlLabel value="90" control={<Radio {...controlResProp('90')}/>} label="6 x 90 x 90" />
                    <FormControlLabel value="45" control={<Radio {...controlResProp('45')}/>} label="6 x 45 x 45" />
                </RadioGroup>
            </FormControl>
        )
    };

    const controlProjProp = (item) => ({
        checked: projection === item,
        onChange: handleChangeProjection,
        value: item,
    });
    const projRadio = () => {
        return (
            <FormControl>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    style={{display: "flex", justifyContent: "flex-start"}}
                >
                    
                    <p>Projection  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p>
                    <FormControlLabel value="sphere_cartopy" control={<Radio {...controlProjProp('sphere_cartopy')}/>} label="sphere" />
                    <FormControlLabel value="curvilinear" control={<Radio {...controlProjProp('curvilinear')}/>} label="curvilinear" />
                </RadioGroup>
            </FormControl>
        )
    };

    const controlImgProp = (item) => ({
        checked: coordinate === item,
        onChange: handleChangeImg,
        value: item,
    });
    const imgRadio = () => {
        return (
            <FormControl>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    style={{display: "flex", justifyContent: "flex-start"}}
                >
                    
                    <p>Coordinate  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p>
                    <FormControlLabel value="lonlat" control={<Radio {...controlImgProp('lonlat')}/>} label="lon/lat" />
                    <FormControlLabel value="xy" control={<Radio {...controlImgProp('xy')}/>} label="x/y" />
                </RadioGroup>
            </FormControl>
        )
    };

    const controlVarProp = (item) => ({
        checked: variable === item,
        onChange: handleChangeVar,
        value: item,
    });
    const varRadio = () => {
        return (
            <FormControl>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    style={{display: "flex", justifyContent: "flex-start"}}
                >
                    
                    <p>Variable &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p>
                    <FormControlLabel value="zeta" control={<Radio {...controlVarProp('zeta')}/>} label="ζ" />
                    <FormControlLabel value="h+wind" control={<Radio {...controlVarProp('h+wind')}/>} label="h + wind" />
                </RadioGroup>
            </FormControl>
        )
    };
    const var2Radio = () => {
        return (
            <FormControl>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    style={{display: "flex", justifyContent: "flex-start"}}
                >
                    
                    <p>Variable &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p>
                    <FormControlLabel value="h+wind" control={<Radio {...controlVarProp('h+wind')}/>} label="h + wind" />
                </RadioGroup>
            </FormControl>
        )
    };

    const controlAlphaProp = (item) => ({
        checked: alpha === item,
        onChange: handleChangeAlpha,
        value: item,
    });
    const alphaRadio = () => {
        return (
            <FormControl>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    style={{display: "flex", justifyContent: "flex-start"}}
                >
                    
                    <p>α (wind direction) &emsp;&emsp;</p>
                    <FormControlLabel value="0" control={<Radio {...controlAlphaProp('0')}/>} label="0" />
                    <FormControlLabel value="pi:2" control={<Radio {...controlAlphaProp('pi:2')}/>} label="pi/2" />
                    <FormControlLabel value="pi:4" control={<Radio {...controlAlphaProp('pi:4')}/>} label="pi/4" />
                </RadioGroup>
            </FormControl>
        )
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={chooseCase} sx={{backgroundColor: 'lightgreen'}}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChangeCase} aria-label="lab API tabs example">
                        <Tab label="Grid" value="Grid" />
                        <Tab label="Barotropic" value="Barotropic" />
                        <Tab label="Gravity Wave" value="Gravity Wave" />
                        <Tab label="Cosine Ball" value="Cosine Ball" />
                        <Tab label="Rossby-Hauwrwitz Wave" value="Rossby-Hauwrwitz wave" />
                        <Tab label="Mountain" value="Mountain" />
                        <Tab label="Geostrophic" value="Geostrophic" />
                    </TabList>


                    <div style={{display: "flex", flexDirection: "column", marginLeft: "2%"}}>
                        {
                            chooseCase === "Grid"
                            ? <></>
                            : resolutionRadio()
                        }
                        {
                            chooseCase === "Grid"
                            ? imgRadio()
                            : projRadio()
                        }
                        {
                            chooseCase !== "Grid"
                            ?
                                chooseCase === "Barotropic" 
                                ? varRadio()
                                : var2Radio()
                            :
                                <></>
                        }
                        {
                            chooseCase === "Cosine Ball" || chooseCase === "Geostrophic"
                            ? alphaRadio()
                            : <></>
                        }
                    </div>
                    {
                        chooseCase !== "Grid" 
                        ?
                            chooseCase === "Cosine Ball" || chooseCase === "Geostrophic"
                            ? VideoCard(videoSrcWithAlpha)
                            : VideoCard(videoSrc)
                        :
                            ImageCard(img1Src, img2Src)
                    }
                </Box>

                
            </TabContext>
        </Box>
    )
}

export default CsswmVideo;