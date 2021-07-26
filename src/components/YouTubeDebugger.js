// Code YouTubeDebugger Component Here
import React, {Component} from "react";

class YouTubeDebugger extends Component {
    state = {
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
                resolution: "1080p"
            }
        }
    }

    handleBitrate = () => {
        this.setState(previousState => {
            return {
                ...previousState,
                settings: {
                    ...previousState.settings,
                    bitrate: 12
                }
            }
        })
    }

    handleResolution = () => {
        this.setState(previousState => {
            return {
                ...previousState,
                settings: {
                    ...previousState.settings,
                    video: {
                        resolution: "720p"
                    }
                }
            }
        })
    }

    render() {
        return (
            <div>
                <p>Bitrate: {this.state.settings.bitrate}</p>
                <button className="bitrate" onClick={this.handleBitrate}>Change Bitrate</button>
                <p>Resolution: {this.state.settings.video.resolution}</p>
                <button className="resolution" onClick={this.handleResolution}>Change Resolution</button>
            </div>
        )
    }
}

export default YouTubeDebugger;