import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventHome from './pages/EventHome/EventHome';
import { routers } from './constants/routes';
import InfoScreen from './pages/InfoScreen/index'
import OTPScreen from './pages/OTPScreen/OTPScreen';
import MessageScreen from './pages/MessageScreen/index';

const RouterCompoent = () => {
  return (
    <Router>

      <Routes>
        <Route path={routers.HOME} element={<EventHome />} />
        <Route path={routers.INFO} element={<InfoScreen />} />
        <Route path={routers.OTP} element={<OTPScreen />} />
        <Route path={routers.MESSAGE} element={<MessageScreen />} />
      </Routes>
    </Router>
  );
}

export default RouterCompoent
