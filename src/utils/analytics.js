import ReactGA from 'react-ga';
import { GATrackingID } from '../config';

ReactGA.initialize(GATrackingID);

export default ReactGA;
