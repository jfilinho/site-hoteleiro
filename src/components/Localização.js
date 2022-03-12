import React from "react";
import { GoogleMap, useJsApiLoader,Marker } from "@react-google-maps/api";


const  MapPage = () =>{

 const { isLoaded } = useJsApiLoader({
   id: "google-map-script",
   googleMapsApiKey: "AIzaSyCBrE2ZTjTInjdlrVZS6PMjg0Db4rixALM",
 });
 const position = {lat: -23.5223749,
                    lng: -46.5321196
}
 
 return (
   <div className="map">
     {isLoaded ? (
       <GoogleMap
         mapContainerStyle={{ width: "100%", height: "100%" }}
         center={ position }
         zoom={15}
       >
           <Marker position={position } options={{
          label:{
            text: "Hotel Tulipa Rua Chamaná Nº 04",
            
            className: "map-marker"
          } 
           }}/>
       </GoogleMap>
     ) : (
       <></>
     )}
   </div>
 
 )

}
export default MapPage;
