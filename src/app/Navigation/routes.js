import TravelScreen from '../Views/Travel';
//import BookingScreen from '../Views/Booking';
import Booking1 from '../Views/Booking1';
import AboutScreen from '../Views/About';
import CreditsScreen from '../Views/Credits';
import NativeTilesScreen from '../Views/NativeTiles';
import ViewJourney from '../Views/ViewJourney';
import ListJourney from '../Views/ListJourney';

/* Icon key is optional. It must be of type string and its value should match a valid provider icon
  name.
  To omit the icon just pass null on its value.
*/
export default [
  {name: 'Travel', screen: TravelScreen, icon: 'airplane-takeoff'},
  {name: 'ListJourney', screen: ViewJourney, icon: 'compass-outline'},
  {name: 'About', screen: ListJourney, icon: 'information-outline'},
  {name: 'Credits', screen: CreditsScreen, icon: 'account-circle'},
  {name: 'NativeTiles', screen: NativeTilesScreen, icon: 'account-circle'},
  {name: 'Booking1', screen: Booking1, icon: 'account-circle'},
  //{name: 'Booking1', screen: Fwelcome, icon: 'account-circle'},

];
