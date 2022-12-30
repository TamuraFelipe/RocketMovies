import { Rating } from 'react-simple-star-rating';

export function Star({rate, size}){
    return(
        <Rating 
        initialValue={rate}
        size={size}
        
        allowFraction={true} 
        fillColor={"#FF859B"} 
        SVGstrokeColor={"#FF859B"}
        SVGstorkeWidth={2}
        emptyColor={'transparent'}
        readonly={true}
        SVGclassName={'star'}
        />
    );
}