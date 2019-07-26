import React, { Component } from 'react'

export default class LocationDropDown extends Component {

    state = {}

    locationSelected(e) {
        console.log(e.target);

        let locationName = e.target.getAttribute('data-name');
        console.log(locationName);

    }



    render() {

        let locations = this.props.locations
        let defaultLabel = this.props.defaultLabel

        console.log(this.props)

        return (
            <div class="dropdown">
                <a
                    class="btn btn-secondary dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    {defaultLabel}
            </a>

                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    {
                        locations.map((location, index) => {
                            return <a class="dropdown-item" href="#" onClick={e => this.locationSelected(e)} key={location.id} data-id={location.id} data-name={location.name}>{location.name}</a>
                        })
                    }
                </div>
            </div>
        )
    }
}
