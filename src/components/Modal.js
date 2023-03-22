import React from "react";

export default function Modal(props) {

    return (
        <div className="modal" id="image-box" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>Modal body text goes here.</p>
                        <img src={`${props.imageUrl}`} alt="Modal Item"></img>
                    </div>
                </div>
            </div>
        </div>
    )

}