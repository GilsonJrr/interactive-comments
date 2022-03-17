import React from 'react';

function Modal(props) {
 return (
     <div className='ModalBackGround'>
        <div className='ModalBody'>
            <p1>Delete comment</p1> 
            <p2>Are you sure you want to delete this comment? This will remove the comment and cant`t be undone.</p2>
            <div className='CalDel'>
                <div className='Cancel' onClick={props.Modal}>
                    NO, CANCEL
                </div>
                <div className='DeleteModal'> 
                    YES, DELETE
                </div>
            </div>
        </div>
     </div>
  );
}

export default Modal;