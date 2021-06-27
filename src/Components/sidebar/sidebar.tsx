import { Button } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Photo } from "../../Store/Models/photo";
import { User } from "../../Store/Models/User";
import Details from "../details/details";

interface IProps {

}
interface IState {
    isEditModalOpen: boolean
}


function Thumbnail() {
    const photo: Photo = useSelector((state: any) => state?.photos)
        .find((p: Photo) => p.id === 1);
    return (
        <img style={{
            padding: "20px 70px",
            borderRadius: "50%"
        }} src={photo?.thumbnailUrl} />
    );
}

function UserData() {
    const user: User = useSelector((state: any) => state?.users)
        .find((u: User) => u.id === 1);
    return (
    <div>
                    <span style={{
                paddingLeft: "calc(25% - 26px)",
                fontSize: "26px",
                fontWeight: 700,
                color: "darkblue"
                }}>{user?.name}</span>
            <br/>
            <span style={{
                fontSize: "18px",
                fontWeight: 500,
                color: "lightgrey",
                paddingLeft: "calc(25% - 18px)",
                marginBottom: "50px"
            }}>{user?.company.name}</span>
    </div>
    )
}

class Sidebar extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            isEditModalOpen: false
        };
        this.onClick = this.onClick.bind(this);
    }

    imgStyle = {
        padding: "0 20px",
        transform: "translateY(5px)"};
    buttonStyle = {
        backgroundColor: "white",
        border: "1px solid black",
        minWidth: "10px"};

    onClick = () => {
        this.setState((previousState, props) => ({
            isEditModalOpen: !this.state.isEditModalOpen
        }));
    }

    render() {
        // this.setState((previousState, props) => ({
        //         isEditModalOpen: false
        // }));
        return (<div style={{
            width: "350px",
        }}>
            <div style={{
                backgroundColor: "white",
                margin: "30px",
                border: "1px solid lightgrey",
                borderRadius: "5px"
                }}>
                    <div onClick={this.onClick}>
                        <Thumbnail></Thumbnail>
                    </div>
            <br/>
            <UserData></UserData>
            <div style={{
                display: "flex",
                flexDirection: "row",
                borderTop: "2px solid lightgrey",
                paddingTop: "15px",
                marginTop: "25px"
            }}>
                <div style={{
                    width: "100%",
                    marginBottom: "5px"
                }}>
                    <img style={this.imgStyle}
                        src="./Assets/icons/network.png" />
                    <span style={{
                        fontWeight: 600,
                        paddingRight: "63px"
                    }}>Your Network</span>
                    <Button variant="contained" style={this.buttonStyle} color="primary">
                        <img src="./Assets/icons/user-plus.png"/>
                    </Button>
                </div>
            </div>
            <div style={{
                    width: "100%",
                    marginBottom: "20px"
                }}>
                    <img style={this.imgStyle}
                        src="./Assets/icons/publications.png" />
                    <span style={{
                        paddingRight: "40px",
                        fontWeight: 600}}>Your Publications</span>
                    <Button variant="contained" style={this.buttonStyle} color="primary">
                        <img src="./Assets/icons/plus.png"/>
                    </Button>
                </div>
            <div style={{
                display: "flex",
                flexDirection: "row"
            }}>
            </div>
            </div>
            <Link style={{
                display: "flex",
                flexDirection: "row",
                marginBottom: "15px",
                cursor: "pointer",
                textDecoration: "none"
            }}
            to="/start">
                <img style={{paddingLeft: "40px", paddingRight: "10px"}} src="./Assets/icons/publications.svg" />
                <span style={{fontWeight: 600, color: "darkgrey", fontSize: '18px'}}>Publications</span>
            </Link>
            <Link style={{
                display: "flex",
                flexDirection: "row",
                marginBottom: "15px",
                cursor: "pointer",
                textDecoration: "none"
            }}
                to="/start">
                <img style={{paddingLeft: "40px", paddingRight: "10px"}} src="./Assets/icons/ecosystem.svg" />
                <span style={{fontWeight: 600, color: "darkgrey", fontSize: '18px'}}>Ecosystem</span>
            </Link>
            <Link style={{
                display: "flex",
                flexDirection: "row",
                marginBottom: "15px",
                cursor: "pointer",
                textDecoration: "none"
            }}
            to="/entities">
                <img style={{paddingLeft: "40px", paddingRight: "10px"}} src="./Assets/icons/entities2.svg" />
                <span style={{fontWeight: 600, color: "darkgrey", fontSize: '18px'}}>Entities</span>
            </Link>
            {
                this.state.isEditModalOpen ? 
                <div style={{
                    width: "500px",
                    height: "500px",
                    backgroundColor: "red",
                    position: "absolute",
                    right: "0",
                    top: "55px"}}>
                    <Details></Details>
                </div> 
                : null
            }
        </div>)
    }
}

export default Sidebar;