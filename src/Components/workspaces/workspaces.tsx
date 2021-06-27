import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setSelectedData } from "../../Store/Slices/selectedData.slice";

interface WorkspaceElementModel {
    name: string,
    type: string,
    users: number,
    lastUpdate: number
}

const subTextStyle = {
    lineHeight: "12px",
    fontSize: "18px",
    fontWeight: 400,
    color: "lightgrey"
};

function WorkspaceElement(props: WorkspaceElementModel): JSX.Element {
    return <div style={{
        display: "flex",
        position: "relative",
        width: "300px",
        height: "200px",
        backgroundColor: "white",
        border: "1px solid lightgrey",
        borderRadius: "5px",
        cursor: "pointer",
        margin: "10px 5px"
        }}>
            <img 
                style={{
                    width: "100%",
                    height: "45%",
                    position: "absolute",
                    zIndex: 1,
                    objectFit: "cover",
                    top: "0"
                }}
                src={
                props.type === "Contract" ? "./Assets/signature.jpg" :
                props.type === "Corporate" ? "./Assets/conference.jpg" :
                props.type === "Norms" ? "./Assets/norms.jpg" : "./"
            }/>
            <div style={{
                width: "80px",
                height: "80px",
                border: "1px solid lightgrey",
                backgroundColor: "white",
                position: "absolute",
                zIndex: 2,
                top: "30%",
                left: "10px",
                borderRadius: "5px"
            }}>
                <img src={
                    props.type === "Contract" ? "./Assets/icons/signDocument.png" :
                    props.type === "Corporate" ? "./Assets/icons/entities.svg" :
                    props.type === "Norms" ? "./Assets/icons/publications.svg" : "./"
                } style={{width: "60px", height: "60px", padding: "10px"}} />
            </div>
            <div style={{
                position: "absolute",
                top: "48%",
                left: "100px"
            }}>
                <span style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "gray"
                }}>{props.name}</span>
            </div>
            <div style={{
                position: "absolute",
                bottom: "30px",
                display: "flex",
                flexDirection: "row",
                margin: "0 20px"
            }}>
                <img src={
                    props.type === "Contract" ? "./Assets/icons/signDocument.png" :
                    props.type === "Corporate" ? "./Assets/icons/entities.png" :
                    props.type === "Norms" ? "./Assets/icons/publications.png" : "./"
                } style={{width: "15px", height: "15px", marginRight: "10px"}} />
                <span style={subTextStyle}>{props.type}</span>
                <div style={{
                    width: "2px",
                    height: "2px",
                    backgroundColor: "lightgrey",
                    margin: "7px"
                }}></div>
                <img src="./Assets/icons/people.png" style={{width: "20px", height: "15px", marginRight: "10px"}} />
                <span style={subTextStyle}>{props.users} users</span>
            </div>
            <div style={{position: "absolute", bottom: "5px"}}>
                <span style={{
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "lightgrey",
                    marginLeft: "20px"
                }}>last update {props.lastUpdate} days ago</span>
            </div>
    </div>
}

function Workspaces(): JSX.Element {
    const workspaces: WorkspaceElementModel[] = [
        {
            name: "Client_contract",
            type: "Contract",
            users: 150,
            lastUpdate: 2
        },
        {
            name: "Supplier_contract",
            type: "Contract",
            users: 25,
            lastUpdate: 2
        },
        {
            name: "Corporate",
            type: "Corporate",
            users: 25,
            lastUpdate: 2
        },
        {
            name: "GroupNorms",
            type: "Norms",
            users: 25,
            lastUpdate: 2
        },
        {
            name: "Real_estate_contracts",
            type: "Contract",
            users: 25,
            lastUpdate: 2
        }
    ];

    function handleLinkClick(name: string, type: string) {
        localStorage.setItem('workspacePage', JSON.stringify({
            name: name,
            type: type
        }));
    }

    return (
      <div>
        <span
          style={{
            fontSize: "18px",
            fontWeight: 700,
            color: "grey",
          }}
        >
          Workspaces
        </span>
        <br />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "calc(100% - 360px)",
            overflowY: "hidden"
          }}
        >
          {workspaces.map((w: WorkspaceElementModel) => {
            return (
              <Link to={`/workspace`} onClick={() => handleLinkClick(w.name, w.type)}  key={Math.random()}>
                <WorkspaceElement
                  name={w.name.replaceAll('_', ' ')}
                  type={w.type}
                  users={w.users}
                  lastUpdate={w.lastUpdate}
                ></WorkspaceElement>
              </Link>
            );
          })}
        </div>
      </div>
    );
}

export default Workspaces;