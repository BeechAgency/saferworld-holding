import React, { useState } from 'react'
import jsonp from 'jsonp';


const formUrl = 'https://saferworld.us21.list-manage.com/subscribe/post?u=1e88f3849531b2e943815a986&amp;id=9c6a68827d&amp;f_id=0036e1e6f0'; //'https://micahaustralia.us10.list-manage.com/subscribe/post?u=23c18cced86d3cc69289b206c&amp;id=809b06b2ae&amp;f_id=007cd1e5f0';

export default function MailchimpForm({ callBack }) {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [org, setOrg] = useState('');
    const [role, setRole] = useState('');

    const [honey, setHoney] = useState('');

    function doThing() {
        console.log('A thing was done');
    }

    const onSubmit = (e) => {
        e.preventDefault();

        console.log('Submitty');

        //if(honey !== '') return console.log('No submitty, you got honey');

        jsonp(
            `${formUrl}&EMAIL=${email}&FNAME=${firstName}&LNAME=${lastName}&ORG=${org}&ROLE=${role}`, 
            { param : 'c' }, 
            function (error, data) {
                console.log('Doing a thing, ', error, data);
                if(error) throw error;

                console.log(error, data);
                //const { msg, result } = data;
                //console.log(msg, result)

                doThing();
        })

        callBack(); 
    }
  return (
    <form onSubmit={onSubmit}>
        <div className='input-row'>
            <div className="input-group">
                <label htmlFor="inputFNAME">First Name</label>
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
                <label htmlFor="inputLNAME">Last Name</label>
                <input
                id="inputLNAME"
                type="text"
                name="LNAME"
                required
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                />
            </div>
        </div>
        <div className="input-group">
            <label htmlFor="inputEMAIL">Email</label>
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
            <label htmlFor="inputROLE">Role</label>
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
            <label htmlFor="inputORG">Organisation</label>
            <input
            id="inputORG"
            type="text"
            name="ORG"
            required
            onChange={(e) => setOrg(e.target.value)}
            value={org}
            />
        </div>
        <div aria-hidden="true" style={{position: 'absolute', left: '-5000px' }}>
            <input type="text" name="b_1e88f3849531b2e943815a986_9c6a68827d" tabIndex="-1" value={honey} onChange={(e) => setHoney(e.target.value)} />
        </div>
        <button type="submit"><span>Sign Up</span></button>
    </form>
  )
}
