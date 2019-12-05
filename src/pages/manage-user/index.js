import React, { Component } from 'react';
import DefaultLayout from 'layout/default-layout/index';
import FormFieldInput from 'components/form-field-input';
// import {  MDBDataTable } from 'mdbreact';
import { MDBDataTable, MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

class ManageUser extends Component {
    state ={
        rows : [],
        openModal : false,
        currentUser : null,
        user: {
            fullName: '',
            email: '',
            phoneNumber : ''
        }
    };

    toggleModal() {
        this.setState({
            openModal: !this.state.openModal,
        });
    }

    async componentWillMount() {
        const result = await window.$http.get('user', {
            attributes : ['id', 'fullName', 'email', 'phoneNumber', 'role', 'isEmailVerified']
        });
        
        console.log('result', result);

        const items = result.map(i => ({
            id: i.id || '-',
            fullName: i.fullName || '-',
            email: i.email || '-',
            phoneNumber: i.phoneNumber || '-',
            role: i.role || '-',
            isEmailVerified: i.isEmailVerified ? 'Yes' : 'No',
            action: (
                <div>
                    <i className="far fa-edit mr-3 cursor-pointer" onClick={this.editUser.bind(this, i)}></i>
                    <i className="far fa-trash-alt cursor-pointer" onClick={this.deleteUser.bind(this, i.id)}></i>
                </div>
            ),
        }));

        console.log('items', items);

        this.setState({
            'rows': items
        });
    }

    addUser() {

    }

    deleteUser(id) {
        console.log('id', id);
    }

    editUser(user) {
        console.log('user', user);

        this.setState({
            currentUser: user,
        });
        this.toggleModal();
    }

    handleUserChange(e){
        this.setState({'user': e.target.value});
    }

    render () {
        const data = {
            columns: [
                {  label: 'Name',  field: 'fullName' },
                {  label: 'Email',  field: 'email' },
                {  label: 'Phone',  field: 'phoneNumber' },
                {  label: 'Role',  field: 'role' },
                {  label: 'Active',  field: 'isEmailVerified' },
                {  label: 'Action',  field: 'action' },
            ],
            rows: this.state.rows
        };

        return (
            <DefaultLayout>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <button type="button" className="btn btn-primary btn-block btn-flat wid-10" onClick={this.toggleModal.bind(this)}>Add User</button>
                                    </div>
                                    <div className="col-sm-12">
                                        <MDBDataTable
                                            striped
                                            hover
                                            noBottomColumns={true}
                                            displayEntries={false}
                                            data={data}
                                        />
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
                <MDBContainer>
                    <MDBModal isOpen={this.state.openModal} toggle={this.toggleModal.bind(this)}>
                        <MDBModalHeader>Manage User</MDBModalHeader>
                        <MDBModalBody>
                            <form onSubmit={this.addUser.bind(this)}>
                                <div className="form-group has-feedback">
                                    <FormFieldInput 
                                        inputClass="form-control sty1"
                                        value={this.state.user.fullName}
                                        handleChange={this.handleUserChange.bind(this)}
                                        attribute="Name" 
                                        inputType="text" 
                                        placeholder="Name" 
                                        required={true}
                                    />
                                </div>
                                <div className="form-group has-feedback">
                                    <FormFieldInput 
                                        inputClass="form-control sty1"
                                        value={this.state.user.email}
                                        handleChange={this.handleUserChange.bind(this)}
                                        attribute="email" 
                                        inputType="email" 
                                        placeholder="Email" 
                                        required={true}
                                    />
                                </div>
                                <div className="form-group has-feedback">
                                    <FormFieldInput 
                                        inputClass="form-control sty1"
                                        value={this.state.user.phoneNumber}
                                        handleChange={this.handleUserChange.bind(this)}
                                        attribute="phone" 
                                        inputType="text" 
                                        placeholder="phone" 
                                        required={true}
                                    />
                                </div>
                            </form>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <button className="btn btn-secondary" onClick={this.toggleModal.bind(this)}>Close</button>
                            <button className="btn btn-primary">Save changes</button>
                        </MDBModalFooter>
                    </MDBModal>
                </MDBContainer>
            </DefaultLayout>
        );
    }
}

export default ManageUser;