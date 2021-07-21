import './giveSuccess.css';
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

import CurrentLocation from '../give/map';
<div>
  <h1 className="title">
    Thank you for your donation!
  </h1>
  <h2 className="subtitle">
    Here are the nearest drop off centers:
  </h2>
</div>

const mapStyles = {
  width: '100%',
  height: '100%'
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
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: 37.7749,
            lng: -122.4194
          }
        }
        center2={
          {
            lat: 37.7793,
            lng: -122.4192
          }
        }
      >
        <CurrentLocation
        centerAroundCurrentLocation
        google={this.props.google}
        >
        <Marker
          onClick={this.onMarkerClick}
          name={'Hīrā Drop Off Center'}
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
      <Marker onClick={this.onMarkerClick} name={'Current Location'} />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </CurrentLocation>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAYlQ6lsXJey1Uaca8vUVExDcHP4TLGgis'
})(MapContainer);