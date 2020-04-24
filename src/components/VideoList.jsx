import React from "react";
import VideoCard from './VideoCard';


const VideoList = props => {

    return (
        <div>
            {
                props.videoList ?
                    props.videoList.map(video => {
                        return (
                            <VideoCard key={video.etag} setSelectedVideo={props.setSelectedVideo} video={video.id.videoId} title={video.snippet.title} description={video.snippet.description} image={video.snippet.thumbnails.medium.url}></VideoCard>
                        );
                    })
                : null
            }
        </div>
    );
}

export default VideoList;