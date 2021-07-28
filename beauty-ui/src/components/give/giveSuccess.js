import './giveSuccess.css';
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import { Typography } from '@material-ui/core';
import Geocode from "react-geocode";

const mapStyles = {
  width: '100%',
  height: "40%",
};

const centers = [
  { lat: 37.7749, lng: -122.4194},
  { lat: 37.7993, lng:  -122.3977},
  { lat: 37.8715, lng: -122.2730},
  { lat: 37.7640954, lng: -122.2419132},
  { lat: 37.8128, lng: -122.2610},
];

//use the haversine method to find nearest center to location 
// private function nearestCenter(centers, location) {
  
// }

// export default function GiveSuccess(){

export class MapContainer extends Component {
  
  state = {
    showingInfoWindow: false,  // Hides or shows the InfoWindow
    activeMarker: {},          // Shows the active marker upon click
    selectedPlace: {},          // Shows the InfoWindow to the selected place upon a marker
    userPosition: {}
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInnpmfoWindow: false,
        activeMarker: null
      });
    }
  };

  componentDidMount(){
    Geocode.fromAddress(this.props.user.zip_code).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log(lat, lng);
        this.setState({
          ...this.state,
          userPosition: {latitude: lat, longitude: lng}
        })
      },
      (error) => {
        console.error(error);
      }
    );
  }

  render() {
    Geocode.setApiKey("AIzaSyAYlQ6lsXJey1Uaca8vUVExDcHP4TLGgis");
    return (
    <div>
      <h1 className="title">
        Thank you for your donation!
      </h1>
      <h2 className="subtitle">
        Here are the nearest drop off centers:
      </h2>
      <div className="googleMap">
      <Map
        google={this.props.google}
        zoom={11}
        center={ { lat: this.state.userPosition.latitude, lng: this.state.userPosition.longitude } }
        style={mapStyles}
      >
        <Marker className="current location"
          position={ { lat: this.state.userPosition.latitude, lng: this.state.userPosition.longitude } }
          onClick={this.onMarkerClick}
          name={'Current Location'}
          
        />
        <Marker className="SF1"
          position={ {lat: 37.7749, lng: -122.4194} }
          onClick={this.onMarkerClick}
          name={'Hīrā Drop Off Center (1765 California St, San Francisco, CA 94109)'}
        />
        <Marker className="SF2" 
          position={ {lat: 37.7993, lng: -122.3977} }
          onClick={this.onMarkerClick}
          name={'Hīrā Drop Off Center (1098 The Embarcadero, San Francisco, CA 94111)'}
        />
        <Marker className="Berkeley" 
          position={ {lat: 37.8715, lng: -122.2730} }
          onClick={this.onMarkerClick}
          name={'Hīrā Drop Off Center (2495 Bancroft Way, Berkeley, CA 94704)'}
        />
        <Marker className="Alameda" 
          position={ {lat: 37.7640954, lng: -122.2419132} }
          onClick={this.onMarkerClick}
          name={'Hīrā Drop Off Center (2201 Shore Line Dr, Alameda, CA 94501)'}
        />
        <Marker className="Oakland" 
          position={ {lat: 37.8128, lng: -122.2610} }
          onClick={this.onMarkerClick}
          name={'Hīrā Drop Off Center (230 Bay Pl, Oakland, CA 94612)'}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
      </div>
      </div>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyAYlQ6lsXJey1Uaca8vUVExDcHP4TLGgis'
})(MapContainer);