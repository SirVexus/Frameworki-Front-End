import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Photo } from "../../Store/Models/photo";
import { User } from "../../Store/Models/User";

interface MenuElement {
    iconPath: string,
    name: string,
    path: string
}
interface WorkspaceMenuElement extends MenuElement {
    type: string,
    linkName: string
}

interface IProps {

}
interface IState {
    platformMenuElements: MenuElement[],
    workspaceMenuElements: WorkspaceMenuElement[]
}

function Account() {
    const user: User = useSelector((state: any) => state?.users)
        .find((u: User) => u.id === 1);
    const photo: Photo = useSelector((state: any) => state?.photos)
        .find((p: Photo) => p.id === 1);
    return (
    <div style={{display: "flex", flexDirection: "row"}}>
        <img style={{
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            padding: "10px"
        }} src={photo?.thumbnailUrl} />
        <div>
            <span style={{
                fontSize: "14px",
                fontWeight: 600,
            }}>{user?.name}</span>
            <br/>
            <span style={{
                fontSize: "14px",
                fontWeight: 500,
                color: "darkblue"
            }}>See profile</span>
        </div>
    </div>
    )
}

let platformMenuElements: MenuElement[] = [
    {
        iconPath: './Assets/icons/house2.svg',
        name: 'Home',
        path: '/start'
    },
    {
        iconPath: './Assets/icons/publications.svg',
        name: 'Publications',
        path: '/start'
    },
    {
        iconPath: './Assets/icons/people.svg',
        name: 'People',
        path: '/start'
    },
    {
        iconPath: './Assets/icons/entities2.svg',
        name: 'Entities',
        path: '/entities'
    },
    {
        iconPath: './Assets/icons/administration.svg',
        name: 'Administration',
        path: '/administration'
    }
];
let workspaceMenuElements: WorkspaceMenuElement[] = [
    {
        iconPath: './Assets/icons/people.svg',
        name: 'Client contract',
        path: '/workspace',
        type: 'Contract',
        linkName: 'Client_contract'
    },
    {
        iconPath: './Assets/icons/people.svg',
        name: 'Supplier contract',
        path: '/workspace',
        type: 'Contract',
        linkName: 'Supplier_contract'
    },
    {
        iconPath: './Assets/icons/entities2.svg',
        name: 'Corporate',
        path: '/workspace',
        type: 'Corporate',
        linkName: 'Corporate'
    },
    {
        iconPath: './Assets/icons/entities2.svg',
        name: 'GroupNorms',
        path: '/workspace',
        type: 'Norms',
        linkName: 'GroupNorms'
    },
    {
        iconPath: './Assets/icons/people.svg',
        name: 'Real estate contracts',
        path: '/workspace',
        type: 'Contract',
        linkName: 'Real_estate_contracts'
    }
];

class HomeMenu extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            platformMenuElements: platformMenuElements,
            workspaceMenuElements: workspaceMenuElements
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.handleLinkClick = this.handleLinkClick.bind(this);
    }

    handleSearch = (input: string) => {
        if (input === '') {
            this.setState({
                platformMenuElements: platformMenuElements,
                workspaceMenuElements: workspaceMenuElements
            });
        } else {
            this.setState({
                platformMenuElements: this.state.platformMenuElements.filter(
                    (el: MenuElement) => el.name.toLowerCase().startsWith(input.toLowerCase())),
                workspaceMenuElements: this.state.workspaceMenuElements.filter(
                    (el: MenuElement) => el.name.toLowerCase().startsWith(input.toLowerCase())),
            })
        }
    }

    handleLinkClick(name: string, type: string) {
        localStorage.setItem('workspacePage', JSON.stringify({
            name: name,
            type: type
        }));
    }

    render() {
        return (
            <div style={{width: '237px', backgroundColor: "white", border: "1px solid lightgray", borderRadius: "5px"}}>
                <input style={{
                    margin: "10px",
                    width: "calc(100% - 30px)",
                    height: "30px",
                    fontSize: "18px",
                    border: "1px solid lightgray"
                }}
                placeholder="Filter..."
                onChange={(e) => {this.handleSearch(e.target.value)}}/>
                <div style={{borderBottom: "1px solid lightgrey"}}>
                    <span style={{fontSize: "16px", color: "grey", fontWeight: 500, marginLeft: "10px"}}>Platform</span>
                    <br />
                    {
                        this.state.platformMenuElements.map((el: MenuElement) => {
                            return (<Link to={el.path} key={Math.random()} style={{
                                marginBottom: "10px",
                                cursor: "pointer",
                                textDecoration: "none"}}>
                                <img style={{
                                    marginTop: "10px",
                                    marginRight: "20px",
                                    marginLeft: "10px",
                                    transform: "translateY(5px)"}} src={el.iconPath}/>
                                <span style={{fontSize: "18px", fontWeight: 600, color: "darkblue"}}>{el.name}</span>
                                <br/>
                            </Link>)
                        })
                    }
                <br/>
                    <span style={{fontSize: "16px", color: "grey", fontWeight: 500, marginLeft: "10px"}}>Workspaces</span>
                    <br/>
                    {
                        this.state.workspaceMenuElements.map((el: WorkspaceMenuElement) => {
                            return (<Link 
                                to={el.path}
                                key={Math.random()}
                                onClick={() => this.handleLinkClick(el.linkName, el.type)}
                                style={{marginBottom: "10px", cursor: "pointer", textDecoration: "none"}}>
                                <img style={{
                                    marginTop: "10px",
                                    marginRight: "20px",
                                    marginLeft: "10px",
                                    transform: "translateY(5px)"}} src={el.iconPath}/>
                                <span style={{fontSize: "18px", fontWeight: 600, color: "darkblue"}}>{el.name}</span>
                                <br />
                            </Link>)
                        })
                    }
                </div>
                <div style={{borderBottom: "1px solid lightgrey"}}>
                    <span style={{
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "darkgrey",
                        marginLeft: "10px"}}>Account</span>
                    <Account></Account>
                    <div style={{cursor: "pointer"}}>
                        <img style={{margin: "0 15px"}} src="./Assets/icons/privacy.svg" />
                        <span style={{fontWeight: 600, position: "absolute", transform: "translateY(-1px)"}}>Privacy</span>
                    </div>
                    <div style={{cursor: "pointer"}}>
                        <img style={{margin: "0 15px"}} src="./Assets/icons/settings.svg" />
                        <span style={{fontWeight: 600, position: "absolute", transform: "translateY(-1px)"}}>Settings</span>
                    </div>
                </div>
                <div style={{margin: "20px 0", marginLeft: "calc(25% + 10px)", cursor: "pointer"}}>
                    <img style={{marginRight: "12px"}} src="./Assets/icons/logout.svg" />
                    <span>Logout</span>
                </div>
        </div>
        )
    }
}

export default HomeMenu;