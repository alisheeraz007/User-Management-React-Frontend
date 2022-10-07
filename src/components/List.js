import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { getData } from '../actions/data'
import { connect } from 'react-redux'

const List = ({ getData, data }) => {

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        console.log(data)
    }, [data])

    return (
        <div className='container mt-5 mb-5 pt-5'>
            {data.data.length ?
                <div className='row'>
                    {data.data.map((a, i) => {
                        return (
                            <div key={i} className='col-lg-3 col-md-4 pl-2 pr-2 mb-3'>
                                <div className='card p-2 text-center' style={{position: "relative"}}>
                                    <div className='col-md-12 p-0'>
                                        <img className='rounded-circle border border-dark' height="100" src={`http://127.0.0.1:8000/${a.profileImage}`} />
                                    </div>
                                    <div className='col-md-12 p-0'>
                                        <h5 className='m-0 mt-2'>{a.user_name}</h5>
                                        <p className='m-0'><small>{a.user_email}</small></p>
                                        <small><b>{a.additionalInfo}</b></small>
                                        <p className='m-0'><small>{a.dateOfBirth}</small></p>
                                        {/* <div style={{position: "absolute", top: 10, right: 10, cursor: "pointer"}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                                            </svg>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                : "Loading"}
        </div>
    )
}

List.propTypes = {
    getData: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    data: state.data
})


export default connect(mapStateToProps, { getData })(List)
