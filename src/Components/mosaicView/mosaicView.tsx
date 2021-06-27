import React from 'react';
import { useSelector } from 'react-redux';
import { Comment } from '../../Store/Models/comment';


function MosaicElemet(props: {name: string}) {
    return <div style={{
        width: "300px",
        height: "100px",
        backgroundColor: "white",
        margin: "10px",
        display: "flex",
        flexDirection: "row",
        cursor: "pointer"}}>
            <img src="./Assets/law.png" style={
                {width: "80px",
                height: "80px",
                margin: "10px",
                backgroundColor: "#e0e0e0",
                borderRadius: "15px"}} />
            <div>
                <span style={{fontSize: "18px", color: "#00008b"}}>{
                    props.name.length > 30 ? `${props.name.slice(0, 30)}...` : props.name}</span>
                <br />
                <span style={{fontSize: "12px"}}>Caracas 1050, Districto Capital, Venezuela</span>
            </div>
    </div>
}

function MosaicView(props: {filter: string, reverse: boolean}) {
    const comments = useSelector((state: any) => 
        state.comments.slice(0, 32).filter((c: Comment) => 
        props.filter === '' ? c.name : c.name.includes(props.filter)));
    const sortedComments = props.reverse 
        ? comments.sort((a: Comment, b: Comment) => a.name.localeCompare(b.name)).reverse()
        : comments.sort((a: Comment, b: Comment) => a.name.localeCompare(b.name));
    return (<div style={{margin: "10px 10px", display: "flex", flexDirection: "row"}}>
        <div>
        {
            sortedComments.slice(0, 8).map((c: Comment) => {
                return (<div key={Math.random()}>
                    <MosaicElemet
                        name={c.name}/>
                </div>)
            }
            )
        }
        </div>
        <div>
        {
            sortedComments.slice(8, 16).map((c: Comment) => {
                return (<div key={Math.random()}>
                    <MosaicElemet
                        name={c.name}/>
                </div>)
            }
            )
        }
        </div>
        <div>
        {
            sortedComments.slice(16, 24).map((c: Comment) => {
                return (<div key={Math.random()}>
                    <MosaicElemet
                        name={c.name}/>
                </div>)
            }
            )
        }
        </div>
        <div>
        {
            sortedComments.slice(24, 32).map((c: Comment) => {
                return (<div key={Math.random()}>
                    <MosaicElemet
                        name={c.name}/>
                </div>)
            }
            )
        }
        </div>

    </div>)
}

export default MosaicView;