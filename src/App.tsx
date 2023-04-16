import './App.css'
import SignupForm from './SignupForm'
import { TranslatorContext, Storage } from 'react-jhipster';
const LOCALE_DEFAULT = 'vn_vi';
// import './locale-validator'
import axios from 'axios';


TranslatorContext.setDefaultLocale(LOCALE_DEFAULT);
TranslatorContext.setRenderInnerTextForMissingKeys(false);

const response = await axios.get(`/i18n/vn_vi.json?buildTimestamp='${new Date().getTime()}'`, { baseURL: '' });
console.log(response.data)
TranslatorContext.registerTranslations(LOCALE_DEFAULT, response.data);

function App() {
  return (
    <div className="App">
      <SignupForm /> 
    </div>
  )
}

export default App
