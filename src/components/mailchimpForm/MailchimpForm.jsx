import React, { useState } from 'react'
import jsonp from 'jsonp';


const formUrl = 'https://micahaustralia.us10.list-manage.com/subscribe/post?u=23c18cced86d3cc69289b206c&amp;id=809b06b2ae&amp;f_id=007cd1e5f0';

export default function MailchimpForm({ callBack }) {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [org, setOrg] = useState('');
    const [role, setRole] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        jsonp(`${formUrl}&EMAIL=${email}&FNAME=${firstName}`, { param : 'c' }, (_, data) => {

            const { msg, result } = data;

            console.log(msg, result)

            //callBack(); 
        })
    }
  return (
    <form onSubmit={onSubmit}>
        <div className='input-row'>
            <div className="input-group">
                <label htmlForm="inputFNAME">First Name</label>
                <input
                id="inputFNAME"
                type="text"
                name="FNAME"
                required
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                />
            </div>
            <div className="input-group">
                <label htmlForm="inputLNAME">Last Name</label>
                <input
                id="inputLNAME"
                type="text"
                name="LNAME"
                required
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                />
            </div>
        </div>
        <div className="input-group">
            <label htmlForm="inputEMAIL">Email</label>
            <input
            id="inputEMAIL"
            type="email"
            name="EMAIL"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            />
        </div>
        <div className="input-group">
            <label htmlForm="inputROLE">Role</label>
            <input
            id="inputROLE"
            type="text"
            name="ROLE"
            required
            onChange={(e) => setRole(e.target.value)}
            value={role}
            />
        </div>
        <div className="input-group">
            <label htmlForm="inputORG">Organisation</label>
            <input
            id="inputORG"
            type="text"
            name="ORG"
            required
            onChange={(e) => setOrg(e.target.value)}
            value={org}
            />
        </div>
        <button type="submit"><span>Sign Up</span></button>
    </form>
  )
}
