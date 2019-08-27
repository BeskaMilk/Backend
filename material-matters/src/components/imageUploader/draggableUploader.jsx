import React from "react";

import { AnchorButton, Intent } from "@blueprintjs/core";


export default class DraggableUploader extends React.Component{

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    onFileLoad(){

    }

    render(){

        return(
            <div style={{ display: "flex", flexDirection: "column"}}>
                <div className="sub-header">Drag an Image</div>
                <div className="draggable-container"/>
                 <input 
                    type = "file"   
                    id="file-browser-input" 
                    name="file-browser-input" 
                    ref={input => this.fileInput = input}
                    onDragOver={(e) => { 
                        e.preventDefault(); 
                        e.stopPropagation();
                }}
                onDrop={this.onFileLoad.bind(this)}
                onChange={this.onFileLoad.bind(this)}
                />

                <div className="files-preview-container">

                </div>
                <div className="helper-text">Drag and Drop Images Here</div>
                <div className="file-browser-contai">
                    <AnchorButton text="Browse" intent={Intent.PRIMARY} minimal={true} onClick={() => this.fileInput.click()}/>
                </div>
                 
            </div>
        )
    }
}