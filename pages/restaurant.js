import Main from "../components/layouts/main/Main"
import GoogleMapReact from 'google-map-react';
import styled from '../styles/restaurant.module.css'
export default function restaurant() {
    const defaultProps = {
        center: {
            lat: 40.7229543,
            lng: -74.0536671
        },
        zoom: 11
    };
    return (
        <Main>
            <div className={styled.page}>
                <h2>Location</h2>
                <address>
                    115 Brunswick Street,
                    Jersey City, NJ 07302
                </address>

                <h2>Phone</h2>
                <a href="tel:+12013600364">(201) 260-0364</a>

            </div>
        </Main>

    )
}
