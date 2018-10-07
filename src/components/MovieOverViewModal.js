import React, { Component } from 'react'
import {Modal} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

export default class MovieOverViewModal extends Component {

    constructor(props) {
        super(props);
        this.handleShow = this
            .handleShow
            .bind(this);
        this.handleClose = this
            .handleClose
            .bind(this);
    
        this.state = {
            show: null,
           
        }
        
    }

    handleClose() {
        this.setState({show: null});
    }

    handleShow(id) {
        this.setState({show: id});
    }

  render() {
    return (
      <div>
         <Button
                    className="btn btn-link read-more-btn"
                    onClick={() => this.handleShow(this.props.movieObj.id)}>
                    <span>
                        Read More
                    </span>
                </Button>

                <Modal show={this.state.show === this.props.movieObj.id}>
                    <Modal.Header
                        onClick={() => this.handleClose()}
                        closeButton
                        closeLabel="close window"></Modal.Header>
                    <Modal.Body>
                       
{this.props.movieObj.id}
                    </Modal.Body>
                    <Modal.Footer>
                    close
                    </Modal.Footer>
                </Modal>
      </div>
    )
  }
}
