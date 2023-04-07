import React from 'react'
import { useState, useEffect } from 'react'
export default function AllAppliedRequest() {


    const [request, setRequest] = useState([
        {
            status: "pending",
            reqId: 778,
            empId: 990,
            name: "utkarsh here",
            applicationDate: "10-11-1233",
            forDate: "10-11-2023",
            section: '4A',
            lecture: "one",
            reason: " bla bla bla "
        }
    ])

    const getStatusColor = (status) => {
        console.log(status)
        if (status === 'Requested') {
            return 'blue';
        } else if (status === 'Rejected') {
            return 'red';
        } else {
            return 'Green';
        }
    };

    return (
        <div>
            <h1 className='text-center'>All Applied Request</h1>

            {request.map((val) => {
                return (
                    <div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#F8F8F8',
                            padding: '16px',
                            border: '1px solid #E6E6E6'
                        }}>
                            <div style={{
                                color: getStatusColor(val.status),
                                fontSize: '24px',
                                fontWeight: 'bold',
                                marginBottom: '16px'
                            }}>
                                {val.status.toUpperCase()}
                            </div>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                fontSize: '18px'
                            }}>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    marginBottom: '8px'
                                }}>
                                    <span style={{ fontWeight: 'bold' }}>Date</span>
                                    <span style={{ marginLeft: '4px' }}>{val.forDate} &nbsp;&nbsp;</span>
                                    <span style={{ fontWeight: 'bold' }}>Section </span>
                                    <span style={{ marginLeft: '4px' }}>{val.section} &nbsp;&nbsp;</span>
                                    <span style={{ fontWeight: 'bold' }}>Lecture</span>
                                    <span style={{ marginLeft: '4px' }}>{val.lecture}&nbsp;&nbsp;</span>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'row'
                                }}>
                                    <span style={{ fontWeight: 'bold' }}>Applied Date:</span>
                                    <span style={{ marginLeft: '8px' }}>{val.applicationDate}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}


        </div>
    )
}
