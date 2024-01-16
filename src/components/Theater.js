import {numOfMoviegoersEvent} from "./TheaterEvents/moviegoersEvent.js;"
export default class Theater{
    
    constructor(){
        this.seatBuff = [];
        render();
    }

    render(){
        numOfMoviegoersEvent(this.seatBuff); 
    }
}