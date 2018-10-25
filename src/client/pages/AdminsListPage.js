import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchAdmins} from '../actions';
import requireAuth from '../components/hocs/requireAuth';

class AdminsListPage extends Component{

    componentDidMount(){
        this.props.fetchAdmins();
    }

    renderAdmins(){
        return this.props.admins.map(admin => <li key={admin.id}>{admin.name}</li>);
    }

    render(){
        return(
            <div>
                <h3>Protected List of Admins:</h3>
                <ul>{this.renderAdmins()}</ul>
            </div>
        );
    }
}

function mstp(state){
    return {admins:state.admins};
}

function loadData({dispatch}){
   return dispatch(fetchAdmins());
}

export default {
    loadData,
    component: connect(mstp,{fetchAdmins})(requireAuth(AdminsListPage))
};