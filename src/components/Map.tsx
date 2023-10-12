import MapPicker from "react-google-map-picker";

interface Iprop {
  setLocation: React.Dispatch<
    React.SetStateAction<{ latitude: number; longitude: number }>
  >;
}

const defaultLocation = { lat: 30.040877290936784, lng: 31.226896986654083 };
const defaultZoom = 12;

export const MapComponent = (props: Iprop) => {
  function handleChangeLocation(lat: number, lng: number) {
    props.setLocation({ latitude: lat, longitude: lng });
  }

  return (
    <>
      <MapPicker
        defaultLocation={defaultLocation}
        zoom={defaultZoom}
        style={{ height: "500px" }}
        onChangeLocation={handleChangeLocation}
        apiKey="AIzaSyD07E1VvpsN_0FvsmKAj4nK9GnLq-9jtj8"
      />
    </>
  );
};
