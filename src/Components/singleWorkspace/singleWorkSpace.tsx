import Button from '@material-ui/core/Button';
import React from 'react';
import { useParams } from 'react-router';
import ListView from '../listView/listView';


const boxView = {
    width: "calc(33% - 20px)",
    margin: "10px",
    border: "1px solid lightgrey",
    backgroundColor: "white",
    height: "240px",
    borderRadius: "5px"
};

function BoxView(props: { url: string, title: string, titleBold: string, description: string }) {
    return <div style={boxView}>
        <img src={props.url} style={{
            width: "50px",
            padding: "10px"
        }} />
        <br />
        <div>
            <span style={{fontSize: "22px", marginLeft: "10px"}}>{props.title} </span><span style={{fontSize: "22px", fontWeight: 700}}>{props.titleBold}</span>
        </div>
        <div style={{padding: "15px"}}>
            <span style={{fontSize: "18px", fontWeight: 600}}>{props.description}</span>
        </div>
    </div>
}

interface IProps {
}
interface IState {
    searchFilter: string,
    name: string,
    type: string
}

class SingleWorkSpace extends React.Component<IProps, IState> {
    //let params: any = useParams();
    // console.log(params.name);
    // console.log(params.type);
    constructor(props: IProps) {
        super(props);
        let name = 'Client_contract';
        let type = 'Contract';
        if (localStorage.getItem('workspacePage')) {
            const localData = JSON.parse(localStorage.getItem('workspacePage') as string);
            name = localData.name;
            type = localData.type;
        }
        this.state = {
            searchFilter: '',
            name: name,
            type: type
        }
        this.handleSearch = this.handleSearch.bind(this);
    }


    handleSearch(input: string) {
        this.setState({
            searchFilter: input
        });
    };

    render() {
        return (<div style={{width: "calc(100vw - 400px)"}}>
        <div style={{
            position: "relative",
            width: "100%",
            height: "300px",
            backgroundColor: "white",
            margin: "10px",
            border: "1px solid darkgrey",
            borderRadius: "5px"
            }}>
                <img 
                style={{
                    width: "100%",
                    height: "60%",
                    position: "absolute",
                    zIndex: 1,
                    objectFit: "none",
                    top: "0",
                    borderBottom: "1px solid lightgrey"
                }}
                src={
                this.state.type === "Contract" ? "./Assets/signature.jpg" :
                this.state.type === "Corporate" ? "./Assets/conference.jpg" :
                this.state.type === "Norms" ? "./Assets/norms.jpg" : "./"
            }
            />
            <div style={{
                display: "flex",
                flexDirection: "row",
                position: "absolute",
                top: "65%",
                margin: "0 20px"}}>
                <img src="./Assets/icons/entities.svg" style={{width: "70px", padding: "10px"}} />
                <div>
                    <span style={{
                        lineHeight: "45px",
                        fontWeight: 700,
                        fontSize: "18px"
                    }}>{this.state.name.replace('_', ' ')}</span>
                    <img src="./Assets/icons/cog.svg" style={{marginLeft: "82%"}} />
                    <br />
                    <span style={{
                        fontSize: "16px",
                        fontWeight: 400,
                        color: "darkgrey"
                    }}>Workspace puprpose and a bit of context. This much neede description is here to remind people where they are, if they are new or have poor memory</span>
                </div>
            </div>
        </div>
        <div style={{            
            position: "relative",
            width: "100%",
            height: "300px",
            backgroundColor: "#d0d0d0",
            margin: "10px",
            border: "1px solid grey",
            borderRadius: "5px"}}>
                <div style={{display: "flex", flexDirection: "row", paddingTop: "15px"}}>
                    <span style={{
                        marginRight: "auto",
                        paddingLeft: "20px",
                        fontSize: "16px",
                        color: "grey"}}>Start working on corporate matters</span>
                    <span style={{
                            fontSize: "16px",
                            color: "grey",
                            paddingRight: "20px"}}>Hide</span>
                </div>
        <div style={{display: "flex", flexDirection: "row"}}>
            <BoxView 
                url="./Assets/icons/entities.svg"
                title='Explore your'
                titleBold="entites"
                description="Take a few minutes to look at the most important elements and specificities of your entities" />
            <BoxView 
                url="./Assets/icons/publications.svg" 
                title='Explore you' 
                titleBold="entites" 
                description="Get a clear view of the ownership by looking at the relations between individulas and entities." />
            <BoxView 
                url="./Assets/icons/house2.svg" 
                title='Explore you' 
                titleBold="entites" 
                description="Prepare future events by creating detailed plans around the life of your entity." />
        </div>
        </div>
        <div style={{marginTop: "30px"}}>
    <div style={{display: "flex", flexDirection: "row"}}>
    <span style={{
    fontSize: "22px",
    fontWeight: 700,
    color: "grey",
    paddingTop: "10px",
    paddingLeft: "10px"
  }}>Latest updates</span>
    <div style={{marginLeft: "48%", display: "flex", flexDirection: "row"}}>
    <input style={{
            margin: "10px",
            width: "300px",
            height: "30px",
            fontSize: "18px",
            border: "1px solid lightgray"
        }}
        onChange={(e) => {this.handleSearch(e.target.value)}}
        placeholder="Filter by title..."/>
        <img src="./Assets/icons/search.svg" style={{transform: "translateX(-35px)"}} />
    </div>
    <Button size="medium" style={{display: "flex", flexDirection: "row"}}>
        <img src="./Assets/icons/bell.svg" style={{marginRight: "10px"}} />
        <span style={{
            fontWeight: 700,
            color: "indigo"
            }}>Followed</span>
        <img style={{marginLeft: "15px"}} src="./Assets/icons/arrow-down.svg" />
    </Button>
    </div>
        <ListView filter={this.state.searchFilter} reverse={false} />
    </div>
    </div>)
    }
}

export default SingleWorkSpace;