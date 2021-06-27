import React from 'react';
import { useSelector } from 'react-redux';
import { Comment } from '../../Store/Models/comment';

const subTextStyle = {
    lineHeight: "12px",
    fontSize: "18px",
    fontWeight: 400,
    color: "lightgrey"
};

export function WorkspaceListElement(props: {name: string, body: string}): JSX.Element {
    return (
        <div style={{
            width: "calc(100% - 20px)",
            marginBottom: "15px",
            backgroundColor: "white",
            padding: "10px",
            border: "1px solid lightgrey",
            borderRadius: "5px",
            cursor: "pointer"}}>
            <div>
                <span style={{
                    fontSize: "22px",
                    fontWeight: 500,
                    color: "indigo",
                    }}>{props.name}</span>
            </div>
            <div>
                <span style={{
                    lineHeight: "10px",
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "grey"}}>
                    {props.body}
                </span>
            </div>
            <div>
                <img src="./Assets/icons/comments.svg" style={{width: "15px", height: "15px", marginRight: "10px", marginTop: "20px"}} />
                <span style={subTextStyle}>Subsid. corp.</span>
                <img src="./Assets/icons/entities.svg" style={{width: "15px", height: "15px", marginLeft: "10px", marginRight: "10px", marginTop: "20px"}}/>
                <span style={subTextStyle}>Corporate</span>
                <span style={subTextStyle}>Updated 3 days ago by John Doe</span>
            </div>
        </div>
    )
}

function ListView(props: {filter: string, reverse: boolean}) {
    const comments = useSelector((state: any) => 
        state.comments.slice(0, 32).filter((c: Comment) => 
        props.filter === '' ? c.name : c.name.includes(props.filter)));
    const sortedComments = props.reverse 
        ? comments.sort((a: Comment, b: Comment) => a.name.localeCompare(b.name)).reverse()
        : comments.sort((a: Comment, b: Comment) => a.name.localeCompare(b.name));
    return (<div style={{margin: "10px 10px"}}>
        {
            sortedComments.map((c: Comment) => {
                return (<div key={Math.random()}>
                    <WorkspaceListElement
                        name={c.name}
                        body={c.body}/>
                </div>)
            }
            )
        }
    </div>)
};

export default ListView;