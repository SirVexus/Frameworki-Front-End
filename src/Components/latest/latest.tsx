import React from "react";
import { useSelector } from "react-redux";
import { Photo } from "../../Store/Models/photo";
import { Post } from "../../Store/Models/post";
import { User } from "../../Store/Models/User";

function AuthorPlaceholder(props: {name: string, thumb: string}): JSX.Element {
    return (<div style={{paddingBottom: "15px", marginTop: "-15px"}}>
        <span style={{fontSize: "12px", color: "grey", fontWeight: 500}}>7 jan 2020</span>
        <img style={{transform: "translateY(17px)", width: "25px", height: "25px", borderRadius: "50%", padding: "10px"}} src={props?.thumb}/>
        <span style={{fontSize: "12px", color: "grey", fontWeight: 500}}>{props?.name}</span>
    </div>)
}

function Latest() {
    const posts = useSelector((state: any) => state?.posts);
    const users = useSelector((state: any) => state?.users);
    const photos = useSelector((state: any) => state?.photos);
    const latestPost: Post = posts[0];
    const otherPosts: Post[] = posts.slice(1, 5);

    return <div style={{
        display: "flex",
        flexDirection: "row",
        margin: "20px",
        width: "calc(100% - 400px)"
    }}>
        <div style={{
            width: "35%",
            height: "auto",
            position: "relative",
        }}>
            <img style={{width: "100%", height: "100%", borderRadius: "5px 0 0 5px"}} src="./Assets/skyscrapper.jpg"/>
            <span style={{position: "absolute", color: "#eeeeee", top: "calc(78.2% - 80px)", left: "0", padding: "10px"}}>
                {latestPost?.body}</span>
            <div style={{position: "absolute", bottom: "0", width: "100%"}}>
                <AuthorPlaceholder
                    name={users.find((u: User) => u.id === latestPost?.userId)?.name}
                    thumb={photos.find((p: Photo) => p.id === latestPost?.userId)?.thumbnailUrl}></AuthorPlaceholder>
            </div>

        </div>
        <div style={{backgroundColor: "white", width: "100%", borderRadius: "0 5px 5px 0"}}>
            <span style={{fontWeight: 500, fontSize: "18px", margin: "10px"}}>Latest publications</span>
            <br/>
            {
                otherPosts.map((post: Post) => {
                    return (
                    <div key={Math.random()}
                    style={{display: "flex", flexDirection: "row"}}>
                        <img style={{width: "50px", height: "50px", padding: "10px"}} src={'./Assets/skyscrapper.jpg'}/>
                        <div style={{paddingTop: "5px"}}>
                            <span style={{fontSize: "16px", fontWeight: 500, color: "darkblue"}}>{post.title}</span>
                            <br />
                            <AuthorPlaceholder
                            name={users.find((u: User) => u.id === post?.userId)?.name}
                            thumb={photos.find((p: Photo) => p.id === 1)?.thumbnailUrl}
                            ></AuthorPlaceholder>
                        </div>
                    </div>
                    )
                })
            }
            <span style={{fontWeight: 500, fontSize: "16px", color: "darkblue", lineHeight: "30px", marginLeft: "15px"}}>See more publications</span>
        </div>

    </div>
}

export default Latest;