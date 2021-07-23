import './giveSuccess.css';
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

import CurrentLocation from '../give/map';

const mapStyles = {
  width: '90%',
  height: "40%"
};

// export default function GiveSuccess(){

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,  // Hides or shows the InfoWindow
    activeMarker: {},          // Shows the active marker upon click
    selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
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

  render() {
    
    return (
    <div>
      <h1 className="title">
        Thank you for your donation!
      </h1>
      <h2 className="subtitle">
        Here are the nearest drop off centers:
      </h2>
      <Map
        google={this.props.google}
        zoom={12}
        style={mapStyles}
      >
        <Marker
          position={ {lat: 37.7749, lng: -122.4194} }
          onClick={this.onMarkerClick}
          name={'Hīrā Drop Off Center (1765 California St, San Francisco, CA 94109)'}
          
        />
        <Marker
          position={ {lat: 37.7993, lng: -122.3977} }
          onClick={this.onMarkerClick}
          name={'Hīrā Drop Off Center (1098 The Embarcadero, San Francisco, CA 94111)'}
        />
        <Marker
          position={ {lat: 37.8715, lng: -122.2730} }
          onClick={this.onMarkerClick}
          name={'Hīrā Drop Off Center (2495 Bancroft Way, Berkeley, CA 94704)'}
        />
        <Marker
          position={ {lat: 37.7640954, lng: -122.2419132} }
          onClick={this.onMarkerClick}
          name={'Hīrā Drop Off Center (2201 Shore Line Dr, Alameda, CA 94501)'}
        />
        <Marker
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
  
  
        {/* <CurrentLocation
        centerAroundCurrentLocation
        google={this.props.google}
        >
         */}
      {/* <Marker 
        onClick={this.onMarkerClick} 
        name={'Current Location'} />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow> */}
      {/* </CurrentLocation> */}
      </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAYlQ6lsXJey1Uaca8vUVExDcHP4TLGgis'
})(MapContainer);