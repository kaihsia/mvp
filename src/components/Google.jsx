class GoogleMaps extends React.Component {

  constructor(props) {
    super(props);
  }

  getDefaultProps() {
    return {
      initialZoom: 6,
      mapCenterLat: 53.5333,
      mapCenterLng: -113.4073126
    };
  }

  componentDidMount(rootNode) {
    let mapOptions = {
      center: this.mapCenterLng(),
      zoom: this.props.initialZoom
    }
    let map = new google.maps.Map(this.getDOMNode(), mapOptions);
    let marker = new google.maps.Marker({position: this.mapCenterLatLng(), title: 'Hi', map: map});
    this.setState({map: map});
  }

  mapCenterLatLng() {
    let props = this.props;

    return new google.maps.LatLng(props.mapCenterLat, props.mapCenterLng);
  }

  render() {
    return (
      <div className='map-gic'></div>
    );
  }
}

window.GoogleMaps = GoogleMaps;
