import React, {useState} from 'react';
import Modal from 'react-modal';
import './App.css';
//This Component is for the individual cells of the Sudoku table
//Its props should be a number which the user can edit via a modal
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};
function Cell(props){
    let numbers = [0,1,2,3,4,5,6,7,8,9];
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [value, setValue] = React.useState(1);
    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
      }
      
    function closeModal() {
        setIsOpen(false);
    }

    function getValueFromModal(number){
        setValue(number)
    }

    return (<div className="Cell">
        <td onClick={openModal}>{value}</td>
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <table>
                <tr>
                    {numbers.map(function(number,i){
                        return <td onClick={() => getValueFromModal(number)} className="Row">{number}</td>
                    })}
                </tr>
            </table>
        </Modal>
    </div>);
}

export default Cell;