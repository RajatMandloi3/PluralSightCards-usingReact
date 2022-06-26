import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        let profile=this.props
        
        return (
            <div className='container d-flex justify-content-center mt-5'>

                <div  className="card justify-content-center" style={{width:'18rem'}}>
                    <img src={this.props.img}  className="card-img-top" alt="..." />
                        <div  className="card-body">
                            <h5  className="card-title">{profile.name}</h5>
                            <p  className="card-text">{profile.company.catchPhrase}</p>
                            {/* <a   className="btn btn-primary">Go somewhere</a> */}
                        </div>
                </div>
            </div>
        )
    }
}
