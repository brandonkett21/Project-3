import React from "react";
import Modal from 'react-awesome-modal';

function OurModal(props) {
    return (
        // <Modal visible={props.visible} width="400" height="300" effect="fadeInUp" onClickAway={() => props.close()}>
        //     <div style={{ textAlign: "center" }}>
        //         <h2 style={{ color: props.color }}>{props.messageheader}</h2>
        //         <p>{props.message}</p>
        //         <a href="javascript:void(0);" onClick={() => props.close()}>Close</a>
        //     </div>
        // </Modal>

        <div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    );
}

export default OurModal;

