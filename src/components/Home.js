import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { getData } from '../actions/data'
import { connect } from 'react-redux'

const Home = ({ getData, data }) => {

    let [userName, setUserName] = useState("")
    let [email, setEmail] = useState("")
    let [age, setAge] = useState("")
    let [additionalInfo, setAdditionalInfo] = useState("")
    let [date, setDate] = useState("")
    let [profileImg, setProfileImg] = useState("")

    const save = (e) => {
        e.preventDefault()
        let data = new FormData()
        data.append("user_name", userName)
        data.append("user_email", email)
        data.append("age", age)
        data.append("additionalInfo", additionalInfo)
        data.append("dateOfBirth", date)
        data.append("profileImage", profileImg)

        var axios = require('axios');

        var config = {
            method: 'post',
            url: 'http://127.0.0.1:8000/shop/products/',
            data: data
        };

        axios(config)
            .then(function (response) {
                window.location.reload()
            })
            .catch(function (error) {
                console.log(error);
            });


    }

    return (
        <div className='container mt-5 mb-5 pt-5'>
            <form className='col-md-6 col-sm-12 m-auto'>
                <div className="mb-3">
                    <label className="form-label">User name</label>
                    <input onChange={(e) => setUserName(e.target.value)} value={userName} type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">User email</label>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Age</label>
                    <input onChange={(e) => setAge(e.target.value)} value={age} type="number" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Additional Info</label>
                    <input onChange={(e) => setAdditionalInfo(e.target.value)} value={additionalInfo} type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Date Of Birth</label>
                    <input onChange={(e) => setDate(e.target.value)} value={date} type="date" className="form-control" />
                </div>
                <div className="mb-4">
                    <label className="form-label">Profile Image</label>
                    <input onChange={(e) => setProfileImg(e.target.files[0])} type="file" className="form-control" />
                </div>
                <button onClick={(e) => save(e)} type="submit" className="btn btn-primary w-100">Save</button>
            </form>
        </div>
    )
}

Home.propTypes = {
    getData: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    data: state.data
})


export default connect(mapStateToProps, { getData })(Home)
