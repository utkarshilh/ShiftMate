

import { useEffect } from 'react';
import React, { useState } from 'react';
import Axios from 'axios';
import RequestList from './RequestList';
import "./Main.css";
import AllAppliedRequest from './AllAppliedRequest';
export default function Main(props) {

    console.log(JSON.stringify(props.updateUser.currentUser));






    const [requests, setRequests] = useState([]);

    useEffect(() => {
        console.log("useEffect executed");
        Axios.post("http://localhost:3001/api/getfreeteacher", {
            empId: props.updateUser.currentUser
        }).then(
            (response) => {

                setRequests(response.data)
                console.log("this is requestId " + requests[0].requestId)
            }
        );
    }, []);

    function handleAccept() {
        // TODO: handle accept request with empID
        console.log("accepted was clicked")

        Axios.post("http://localhost:3001/api/allarrengementrequesthandleaccept",
            {
                empId: props.updateUser.currentUser,
                reqId: requests[0].requestId
            }).then(
                (response) => {
                    alert(response.data);
                    update();


                }
            )



    }

    function handleReject() {
        // TODO: handle reject request with empID



        console.log("i was clicked")

        console.log(props.updateUser.currentUser)
    }

    // useEffect(() => {
    //   Axios.pos("/api")

    //   return () => {
    //     second
    //   }
    // }, [third])

    return (
        <>
            <div className='Main'>

                <RequestList
                    requests={requests}
                    onAccept={handleAccept}
                    onReject={handleReject}

                />

            </div>

            <AllAppliedRequest />
        </>


    );
}


